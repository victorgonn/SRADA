import React from "react";
import { inject, observer } from 'mobx-react'
import FontAwesome from 'react-fontawesome';
import {Component} from "react/lib/ReactBaseClasses";

@inject("store")
@observer
export default class TituloPagina extends Component {
    constructor(props) {
        super(props);
        this.appStore = this.props.store.appStore;
    }

    gerarBotoes() {
        const botoesMobile = [];

        this.controller.botoesMobile.map((botao, i) => {
            botoesMobile.push(
                <li className={"page-title-button"}>
                    <a key={i} title={botao.label} onClick={() => botao.acao()}>{botao.icone ? <FontAwesome name={botao.icone} /> : botao.label }</a>
                </li>
            )
        });

        return botoesMobile
    }

    render() {
        return (
            <div>
                {this.appStore.titulo ? (
                <div>
                    <ul className="page-title-with-button">
                        <li>
                            <h3>{this.appStore.titulo}</h3>
                        </li>
                        {this.appStore.width <= 768 && this.appStore.botoesMobile && this.appStore.botoesMobile.length > 0 &&
                            this.gerarBotoes()
                        }
                    </ul>
                </div>
                ) : (
                    <br />
                )}
            </div>
        )
    }
}
