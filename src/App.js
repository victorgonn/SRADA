import React, { Component } from "react";
import {Redirect, Route} from "react-router-dom";
import { inject, observer } from "mobx-react";
import {ToastContainer} from "react-toastify";
import {checkAuth} from "./utils/security"
import {toast} from "react-toastify";
import {http} from "./config/Constantes";

@inject("store")
@inject("routes")
@observer
export default class App extends Component {
	constructor(props) {
		super(props);
		this.store = this.props.store;
        this.routes = this.props.routes;
        this.loginStore = this.props.store.loginStore;

        this.appStore = this.props.store.appStore;
	}
	componentDidMount() {
/*        this.usuarioService.checkLogado().then(response => {
        	this.loginStore.isLogado = true;
        }).catch(error => {
            this.loginStore.isLogado = false;
		})*/
        this.loginStore.isLogado = false;
	}

	componentWillReceiveProps(props) {
		if(this.appStore.currentPage != null && this.appStore.currentPage !== props.location.pathname) {
			http.cancel(this.appStore.currentPage)
		}

        this.appStore.setCurrentPage(props.location.pathname);
	}

    componentWillMount() {
        this.appStore.setCurrentPage(this.props.location.pathname);
    }

	render() {
		/*const {
			authenticated,
			authenticating,
			timeToRefresh,
			refreshToken,
			testval
		} = this.store.appStore;*/
        const routesList = [];
        let key = 0;
        for (let i=0; i < this.routes.length; i++) {
            const menuCategory = this.routes[i];
           /* if(this.loginStore.checkPermission(menuCategory.permission)) {*/
                if(typeof menuCategory.itens !== 'undefined'){
                    for (let j=0; j < menuCategory.itens.length; j++) {
                        const menuCategoryItem = menuCategory.itens[j];
                       /* if(this.loginStore.checkPermission(menuCategoryItem.permission)) {*/
                            routesList.push(<Route
                                key={key}
                                exact
                                path={menuCategoryItem.path}
                                component={menuCategoryItem.component}
                            />);
                            key++;
						/*}*/
                    }
                }
/*			}*/
        }

		return (
			<div>
                <div>
                   {/* <Redirect to="/login" />*/}
                    {!checkAuth() && <Redirect to="/login" />}
                    {routesList}
                    <ToastContainer
                        position="top-center"
                        type="success"
                        autoClose={5000}
                        className="custom-toast"
                        hideProgressBar={false}
                        newestOnTop
                        closeOnClick={false}
                        pauseOnHover
                    />
                </div>
			</div>
		);
	}
}
