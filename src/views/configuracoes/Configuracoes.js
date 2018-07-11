import React, {PropTypes, Component} from "react";
import {inject, observer} from "mobx-react";
import {Button, ButtonGroup, Col, Form, FormGroup, FormText, Input, Label, Row, Table} from 'reactstrap';
import DataWrapper from "../../views/masterPage/DataWrapper";
import {LoadingPanel} from "../../components/loadingPanel/LoadingPanel";
/*import ParametrosGeraisStore from "../stores/ParametrosGeraisStore";
import {createSelectOptions} from "../../../utils/formatar";*/
import FontAwesome from "react-fontawesome";
/*import {inteiroPositivo} from "../../../utils/formatar"*/


@inject("store")
@DataWrapper
@observer
export class Configuracoes extends Component {
    constructor(props) {
        super(props);
        this.appStore = this.props.store.appStore;
        this.controller = this.props.store.configuracoesStore;
    }

    componentDidMount() {
       // this.controller.carregarDados();
        this.appStore.setTitulo("Parâmetros gerais do sistema");
    }

    render() {
        return (
            <div>
                <div className="form-wrapper">
                    <LoadingPanel>
                        <div className="content-panel panel-sm">
                            <Form className="panel-form">
                                <Row>
                                    <Col xs={12} md={12} lg={12}>
                                        <div className="form-buttons">
                                            <ButtonGroup size="sm">
        {/*                                        {
                                                    this.controller.modoEdicao ? <Button
                                                        onClick={() => this.controller.reverter()}>Reverter</Button> : null
                                                }
                                                {
                                                    this.controller.modoEdicao ?
                                                        <Button color="primary"
                                                                onClick={() => this.controller.salvar()}>Salvar</Button> : null
                                                }*/}
                                                {
                                                   /* !this.controller.modoEdicao ?*/
                                                        <Button color="primary"
                                                                onClick={() => this.controller.editar()}>Editar</Button>/* : null*/
                                                }
                                            </ButtonGroup>
                                        </div>
                                    </Col>
                                </Row>
                                <h4>Parametros de Sistema</h4>
                                <Row>
                                    <Col>Campus</Col>
                                    <Col><Input disabled={!this.controller.modoEdicao} type="number"
                                                value={this.controller.parametros.crQntContratoSucessivo}
                                                onChange={(event) => this.controller.setData("azul",event.target.value)}/></Col>
                                </Row>
                                <Row>
                                    <Col>Relacao Aluno Professor</Col>
                                    <Col><Input disabled={!this.controller.modoEdicao} type="number"
                                                value={this.controller.parametros.crQntContratoSucessivo}
                                                onChange={(event) => this.controller.setData("azul",event.target.value)}/></Col>
                                </Row>
                            </Form>
                        </div>
                    </LoadingPanel>
                </div>
            </div>
        )
    }
}