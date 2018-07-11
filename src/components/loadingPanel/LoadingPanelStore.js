import { observable, computed, extendObservable } from "mobx";
import _ from "lodash";

export default class LoadingPanelStore {
    @observable loadingMap;

    constructor() {
        this.loadingMap = [];
    }

    @computed
    get isLoading() {
        return this.loadingMap.length > 0;
    }

    setIsLoading(key, value) {
        const loading = {};
        loading[key] = true;
        const paginaJaEstaEmLoading = _.find(this.loadingMap, loading);
        if(!paginaJaEstaEmLoading && value) {
            this.loadingMap.push(loading);
        } else if(paginaJaEstaEmLoading && !value) {
            _.remove(this.loadingMap, loading);
        }
    }

    resetLoading() {
        this.loadingMap = [];
    }
}
