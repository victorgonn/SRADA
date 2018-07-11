import { store } from "rfx-core";

import AppStore from "./AppStore";
import LoginStore from "./views/login/LoginStore";
import ConfiguracoesStore from "./views/configuracoes/ConfiguracoesStore";
import LoadingPanelStore from "./components/loadingPanel/LoadingPanelStore";


export default store.setup({
    appStore: AppStore,
    loginStore: LoginStore,
    configuracoesStore: ConfiguracoesStore,
    loadingPanelStore: LoadingPanelStore,
});