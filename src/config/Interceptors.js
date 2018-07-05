import axios from "axios";
import {store} from "../index"
import _ from 'lodash';
import {toast} from "react-toastify";
import {http} from "./Constantes";
import { CancelToken } from 'axios';
import RequestManager from './RequestManager';
import shortid from "shortid"
import {toJS} from "mobx";

const token = window.localStorage.getItem('jwt');
http.defaults.headers.common['Authorization'] = token;


let networkErrorToastActive = false;

let toastIds = [];

http.interceptors.response.use(function (response) {
    return response;
}, (error) => {
    if(axios.isCancel(error)) {
        return Promise.reject(error);
    } else {
        if (_.get(error, "response.status") === 401 || _.get(error, "response.status") === 403) {
            store.loginStore.token = undefined;
        } else if (_.get(error, "response.status") !== 400 && _.get(error, "response.status") !== 404 && _.get(error, "response.data.message")) { //erros com status code 400, serão exibidos na tela de formas específicas
            if(!_.includes(toastIds, error.response.data.message)) {
                const errorMessage = toJS(error.response.data.message);
                toastIds.push(errorMessage);
                toast.error(errorMessage, {onClose: () => _.pull(toastIds, errorMessage), autoClose: false});
            }
            error.response.data.message = "";
        } else if (!error.response) {
            if(!networkErrorToastActive) {
                networkErrorToastActive = true;
                toast.error("Não foi possível contactar o servidor, por favor verifique sua conexão com a internet", {onClose: () => networkErrorToastActive = false, autoClose: false});
            }
        }
        return Promise.reject(error);
    }
});

const requestManager = new RequestManager({debug: false});

http.interceptors.request.use((config) => {
    if(!config.dontCancel && config.method === "get") {
        config.requestId = toJS(_.get(store, "appStore.currentPage")) + ":::" + shortid.generate();
        const source = CancelToken.source();
        config.cancelToken = source.token;
        requestManager.addRequest(config.requestId, source.cancel);
    }

    return config;
});


http.interceptors.response.use((response) => {
    const { requestId } = response.config;
    if (requestId) {
        requestManager.removeRequest(requestId);
    }
    return response;
});


http.cancel = (pageKey, reason) => {
    if (pageKey) {
        requestManager.cancelRequest(pageKey, reason);
    }
};


http.cancelAll = (reason) => {
    requestManager.cancelAllRequests(reason)
};

