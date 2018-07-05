import {Login} from "./views/login/Login";
import {Home} from "./views/home/Home";

class Routes {
    constructor() {
        this.data = [
            {
                "separator": true,
                "label": "Preferências",
                "permission": [],
                "icon": "cog",
                "itens":[
                    {
                        "label": "login",
                        "path": "/",
                        "component":  Login,
                        "onSideBar": false,
                    },
                    {
                        "label": "login",
                        "path": "/login",
                        "component":  Login,
                        "onSideBar": false,
                    },
                    {
                        "label": "Home",
                        "path": "/home",
                        "component":  Home,
                        "onSideBar": true,
                        "icon": "cog"
                    },


                ]
            },
            {
                "separator": true,
                "label": "Relatórios",
                "permission": [],
                "icon": "bar-chart",
                "itens": [
                ]
            }
        ];
    }
}

export default Routes;
