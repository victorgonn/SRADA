import("./assets/styles/main.scss");
import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Switch } from "react-router-dom";
import { Provider } from "mobx-react";
import { AppContainer } from "react-hot-loader";
import { rehydrate, hotRehydrate } from "rfx-core";

import "./config/Interceptors";
import App from "./App";
import stores from "./stores";
import Routes from './routes';

require('font-awesome/css/font-awesome.css');
require('bootstrap/dist/css/bootstrap.css');
require('react-datepicker/dist/react-datepicker.css');
require('react-bootstrap-table/css/react-bootstrap-table.css');

const store = rehydrate();

const routes = new Routes();

const RenderApp = Component => {
	render(
		<AppContainer>
			<BrowserRouter basename="/app">
				<Provider store={hotRehydrate()} routes={routes.data} >
					<Switch>
						<App />
					</Switch>
				</Provider>
			</BrowserRouter>
		</AppContainer>,
		document.getElementById("root")
	);
};

RenderApp(App);

if(module.hot) {
    module.hot.accept('./App', () => {
        const NextApp = require('./App').default
        RenderApp(NextApp)
    })
}


export {store}