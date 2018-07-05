import {http} from "../config/Constantes";

export default class LoginService {

    constructor() {}

    login(usuario, senha) {
        return http.post("/auth/login", {login: usuario, senha: senha});
    }
}