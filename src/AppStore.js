import { observable, action } from "mobx";

export default class AppStore {

//region Data Itens
    //general
    @observable width;
    @observable gridMode;
    @observable innerHeight;

    //sidebar
    @observable sidebarFechado;
    @observable expandirGrupoSidebar;

    @observable baseUrl;
    @observable contentBackgroundWhite;

    @observable currentPage;

    //Titulo
    @observable titulo;
    @observable botoesMobile;

    //Form
    @observable submitted;
    @observable submitMensagemErro;
    @observable acaoEnviada;
    @observable solicitando;

    //Modal
    @observable exibirModal;
    @observable activeTab;
    @observable submitted;
    @observable submitMensagemErro;
    @observable loading;
    @observable mensagemAlerta;



    constructor() {
        this.sidebarFechado = false;
        this.expandirGrupoSidebar = "Ações pendentes";
        this.width = window.innerWidth;
        this.innerHeight = window.innerHeight;
        this.gridMode = false;
        this.baseUrl = "http://localhost:8080/api"
        this.contentBackgroundWhite = false;
        this.currentPage = null;

        this.nome = "";
        this.botoesMobile = [];

        this.acaoEnviada = false;
        this.submitted = false;
        this.submitMensagemErro = "";
        this.solicitando = false;

        this.activeTab = '1';
        this.exibirModal = { tipo: null, aberto: false };
        this.submitted = false;
        this.submitMensagemErro = "";
    }

//endregion

    @action authenticate() {
        return new Promise((resolve, reject) => {
            this.authenticating = true;
            setTimeout(() => {
                this.authenticated = !this.authenticated;
                this.authenticating = false;
                resolve(this.authenticated);
            }, 0);
        });
    }

//region Titulo Functions

    setTitulo(value) {
        this.titulo = value;
    }

    setBotoesMobile(value) {
        this.botoesMobile = value;
    }

//endregion

//region SideBar Functions

    toggleSideBar() {
        this.sidebarFechado = !this.sidebarFechado;
    }

    setCurrentPage(page) {
        this.currentPage = page;
    }

    toggleSideBarGroup(group) {
        if(group === this.expandirGrupoSidebar)
            this.expandirGrupoSidebar = "none";
        else
            this.expandirGrupoSidebar = group;
    }

//endregion

//region Form Functions

    toggleAcaoEnviada() {
        this.acaoEnviada = !this.acaoEnviada;
    }

    setSubmitted(value) {
        this.submitted = value;
    }

    setSubmitMensagemErro(value) {
        this.submitMensagemErro = value;
    }

//endregion

//region Modal Functions

    setLoading = (value) => {
        this.loading = value;
    };

    setSubmitted = (value) => {
        this.submitted = value;
    };

    setSubmitMensagemErro = (value) => {
        this.submitMensagemErro = value;
    };

    setTab = (tab) => {
        this.activeTab = tab;
    };

    toggleModal = (tipo = null) => {
        this.activeTab = '1';
        this.exibirModal = {
            tipo,
            aberto: !this.exibirModal.aberto
        };
    };

    closeModal = (tipo = null) => {
        this.activeTab = '1';
        this.exibirModal = {
            tipo,
            aberto: false
        };
    };

//endregion

}
