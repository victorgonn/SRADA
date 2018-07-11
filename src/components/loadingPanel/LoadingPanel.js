import React from "react";
import { react } from "mobx";
import { inject, observer } from "mobx-react";
import {Button, Form, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import {Component} from "react/lib/ReactBaseClasses";
import store from "../../stores";
import loading from '../../assets/images/ajax-loader.gif';

@inject("store")
@observer
class LoadingPanel extends Component {

    constructor(props) {
        super(props);
        this.loadingPanelStore          = this.props.store.loadingPanelStore;
        this.appStore                   = this.props.store.appStore;
    }

    componentWillMount() {
        this.loadingPanelStore.resetLoading();
    }

    render() {
        return (

            <div>
                {this.appStore.width > 768 && this.loadingPanelStore.isLoading &&
                    <div className="content-panel panel-sm">
                        <Form className="panel-form">
                            <div className="loading-panel">
                                <h4>Carregando...</h4>
                                <img src={loading} alt="loading" className="loading"/>
                            </div>
                        </Form>
                    </div>
                }
                {this.appStore.width <= 768 && this.loadingPanelStore.isLoading &&
                    <div className="loading-mobile">
                        <img src={loading} alt="loading" className="loading"/>
                    </div>
                }
                {!this.loadingPanelStore.isLoading &&
                    <div>
                        {this.props.children}
                    </div>
                }
            </div>
        );
    }
}

export {LoadingPanel}