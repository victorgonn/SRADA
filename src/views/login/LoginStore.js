import {observable, computed, reaction, extendObservable} from "mobx";
import {http} from '../../config/Constantes'
import LoginService from "../../services/LoginService";
import lscache from "lscache";
import {setCookie} from "../../utils/security";

export default class LoginStore {

    @observable token;
    @observable usuario;
    @observable usuarioLogado;
    @observable senha;
    @observable nome;
    @observable mensagemErro;
    @observable logging;
    @observable loadingUsuarioLogado;
    @observable isLogado;

    constructor() {
        this.usuario = "";
        this.senha = "";
        this.mensagemErro = "";
        this.token = window.localStorage.getItem('jwt');
        this.nome = window.localStorage.getItem('loggedUserName');
        this.loginService = new LoginService();
        this.usuarioLogado = {};
        this.logging = false;
        this.getUsuarioLogado();
        this.isLogado = false;


        /*        reaction(
                    () => this.token,
                    token => {
                        http.defaults.headers.common['Authorization'] = token;
                        if (token) {
                            this.getUsuarioLogado();
                            window.localStorage.setItem('jwt', token);
                            lscache.set('token', token, 250);
                        } else {
                            this.usuarioLogado = {};
                            window.localStorage.removeItem('jwt');
                            lscache.flush();
                            this.nome = undefined;
                        }
                    }
                );*/

        /*        reaction(
                    () => this.nome,
                    nome => {
                        if (nome) {
                            window.localStorage.setItem('loggedUserName', nome);
                        } else {
                            window.localStorage.removeItem('loggedUserName');
                        }
                    }
                );*/
    }

    getUsuarioLogado() {
        this.loadingUsuarioLogado = false;
        /*        this.usuarioService.me().then(response => {
                    if (response.data) {
                        extendObservable(this.usuarioLogado, response.data);
                        this.usuarioLogado = response.data;
                    }
                    this.loadingUsuarioLogado = false;
                }).catch(error => {
                    console.log(error);
                    this.loadingUsuarioLogado = false;
                });*/
    }

    setToken(value) {
        this.token = value;
    }

    setUsuario(value) {
        this.usuario = value;
    }

    setSenha(value) {
        this.senha = value;
    }

    login(e) {
        this.logging = true;
        e.preventDefault();
        this.mensagemErro = "";
        lscache.set('token', this.usuario, 250);
        this.usuarioLogado.nome = this.usuario;
        /*        this.loginService.login(this.usuario, this.senha).then(response => {
                    this.token = response.data.token;
                    this.nome = response.data.nome;
                    this.usuario = "";
                    this.senha = "";
                    this.mensagemErro = "";
                    this.logging = false;
                }).catch(error => {
                    console.log("Error -> " + JSON.stringify(error));
                    this.mensagemErro = _.get(error, "response.data.message");
                    this.logging = false;
                });*/
        this.logging = false;
    }

}