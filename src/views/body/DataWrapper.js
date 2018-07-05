import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import TopBar from '../../components/TopBar'
import SideBar from '../../components/SideBar'
import Footer from '../../components/Footer'
import TituloPagina from "../../components/TituloPagina";
import {Redirect} from "react-router-dom";
import {toast} from "react-toastify";
import {checkAuth} from "../../utils/security";

export default function DataWrapper(Component) {
	@inject("store")
	@observer
	class DataFetcher extends Component {
		constructor(props) {
			super(props);
            this.appStore                   = this.props.store.appStore;
            this.loginStore                 = this.props.store.loginStore;

            this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
		}

		componentWillMount() {
            this.appStore.contentBackgroundWhite = false;
        }

        componentDidMount() {
            if(this.appStore.width < 768) {
                this.appStore.sidebarFechado = true;
            }
            this.updateWindowDimensions();
            window.addEventListener('resize', this.updateWindowDimensions);
        }

        componentWillUnmount() {
            window.removeEventListener('resize', this.updateWindowDimensions);
            {/*TODO: refatorar forms*/}
            this.appStore.setSubmitted(false);
            this.appStore.setSubmitMensagemErro("");
            this.appStore.setSubmitted(false);
            this.appStore.setSubmitMensagemErro("");
            this.appStore.acaoEnviada = false;
            this.appStore.setTitulo("");
            this.appStore.setBotoesMobile([]);
            this.appStore.contentBackgroundWhite = false;
        }

        updateWindowDimensions() {
            this.appStore.width = window.innerWidth;
        }

        render() {
            const minimizedWrapper = this.appStore.sidebarFechado ? "wrapper minimized-content" : "wrapper";
            const wrapperClass = this.appStore.gridMode && this.appStore.width > 768 ? minimizedWrapper + " white" : minimizedWrapper;

            return(
                <div className={wrapperClass}>
                    {checkAuth() ? (
                        <div className={this.appStore.contentBackgroundWhite ? "content background-white" : "content"} >
                            <TituloPagina />
                            <TopBar />
                            <SideBar />
                            <div className="pages-content">
                                <Component {...this.props} />
                            </div>
                            <div className="footer-bottom">
                                <Footer />
                            </div>
                    </div>) :(
                        <div>
                            {toast.dismiss() && <Redirect to="/login" />}
                        </div>
                    )}
                </div>
            );
        }

	}
	return DataFetcher;
}
