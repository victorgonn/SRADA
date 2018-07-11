import React from 'react';
import {Button, FormGroup, Input, InputGroup, InputGroupAddon} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import logo from '../../assets/images/logo.png';
import { observer, inject } from 'mobx-react';
import FontAwesome  from "react-fontawesome";
import { Redirect } from 'react-router-dom'
import {checkAuth} from "../../utils/security";
import loading from '../../assets/images/login-loading.gif';

@inject("store")
@observer
export class Login extends React.Component {

    constructor(props){
        super(props);
        this.appStore = this.props.store.appStore;
        this.controller = this.props.store.loginStore;
    }

    componentWillMount() {
        this.logging = false;
    }

    componentDidMount() {
        this.usuarioInput.focus();
    }

    render() {
        return (
			<div>
                {checkAuth() && <Redirect to="/home" />}
				<div className="login-container">
					<div className="panel">
						<div className="panel-heading" style={{backgroundColor:'#17882c'}}>
							<text style={{fontFamily: "open_sansextrabold,Open Sans,Arial,Helvetica,sans-serif", fontSize: "2em", lineHeight: ".8em", fontWeight: "500", color: "white"}}>
								IFES - Serra
							</text>
						</div>
						<div className="panel-body">
							<div className="login-form">
								<form onSubmit={(event) => this.controller.login(event)}>
									<FormGroup className="form-group has-feedback">
										<InputGroup>
											<Input value={this.controller.usuario} getRef={(input) => { this.usuarioInput = input; }} onChange={(event) => this.controller.setUsuario(event.target.value)} placeholder="Usuário" style={{marginRight: 'none'}} required="required"/>
											<InputGroupAddon className="InputGroupAddon-white">
												<FontAwesome name="user-o" />
											</InputGroupAddon>
										</InputGroup>
									</FormGroup>
									<FormGroup className="form-group has-feedback">
										<InputGroup>
											<Input value={this.controller.senha} onChange={(event) => this.controller.setSenha(event.target.value)} type="password" placeholder="Senha" required="required" style={{marginRight: 0}} />
											<InputGroupAddon className="InputGroupAddon-white">
												<FontAwesome name="lock" />
											</InputGroupAddon>
										</InputGroup>
									</FormGroup>
									<p style={{color: "red"}}>{this.controller.mensagemErro}</p>
									<Button type="submit" color="primary" block disabled={this.controller.logging}>{this.controller.logging ? <img src={loading} alt="loading" className="logging"/> : "Entrar"}</Button>
								</form>
							</div>
						</div>
						<p className="text-center">
							&copy; 2018 - IFES
						</p>
					</div>
				</div>
			</div>
        );
    }
}
