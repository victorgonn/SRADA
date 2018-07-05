import { store } from "rfx-core";

import AppStore from "./AppStore";
import LoginStore from "./views/login/LoginStore";


export default store.setup({
    appStore: AppStore,
    loginStore: LoginStore,
});