import React, {Component} from "react";
import { inject, observer } from "mobx-react";
import DataWrapper from '../masterPage/DataWrapper';

@inject("store")
@DataWrapper
@observer
export class Home extends Component {
    constructor(props) {
        super(props);
        this.appStore                   = this.props.store.appStore;
        this.loginStore                = this.props.store.loginStore;
    }

    componentDidMount() {
        this.appStore.setTitulo("Home");
/*        this.tituloPaginaStore.setBotoesMobile([
            {
                label: "Ordenar",
                icone: "sort",
                acao: () => this.modalStore.toggleModal('ordenar')
            }
        ]);*/
    }

    render() {
        return (
            <div>
                <div className="form-wrapper">
                    <div className={this.appStore.width > 768 ? "content-panel" : ""}>
                        <text>Bem vindo</text>
                    </div>
                </div>
            </div>
        );
    }
}

