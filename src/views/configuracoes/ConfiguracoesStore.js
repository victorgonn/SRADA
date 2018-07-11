import {computed, observable} from "mobx";

export default class ConfiguracoesStore {
    @observable modoEdicao;
    @observable parametros;

    constructor(loadingPanelStore) {
        this.loadingPanelStore = loadingPanelStore;
        this.modoEdicao = false;
        this.resetParametrosGerais();
    }

    carregarDados() {
/*        this.loadingPanelStore.setIsLoading("parametrosGeraisLoading", true);
        const dadosPromise = Promise.all([
            this.carregarLista(),
            this.carregarCargos()
        ]);

        dadosPromise.then(() => {
            this.loadingPanelStore.setIsLoading("parametrosGeraisLoading", false);
        }).catch(error => {
            this.loadingPanelStore.setIsLoading("parametrosGeraisLoading", false);
            console.log(error);
        });*/
    }

    toggleModoEdicao() {
        this.modoEdicao = !this.modoEdicao;
    }

    editar() {
        this.parametrosSalvos = Object.assign({}, this.parametros);
        this.toggleModoEdicao();
    }

    reverter() {
        this.parametros = this.parametrosSalvos;
        this.toggleModoEdicao();
    }

    salvar() {
/*        this.parametroGeralService.save(this.parametros).then(response => {
            this.parametros = response.data;
            this.toggleModoEdicao();
        }).catch(error => {
            console.log(error)
        })*/
    }

    setData(item, value){
        this.parametros[item] = value;
    }

    resetParametrosGerais() {
        this.parametros = {
            crQntContratoSucessivo: 4,
            crPeriodoAnalise: 720,
            crPrctAlocacaoMinIntervalo: 50,
            fdcPeriodoAnalise: 720,
            qrtParaContratosRecorrentes: 540,
            qrtParaFmtDiferenteContratacao: 540,
            qrtParaExMot: 90,
            qrtParaExPsp: 90,
            qrtParaExFuncionario: 90,
            qrtParaExTerceiro: 90,
            qrtCargosNaoConsideradosIds: "",
            qrtCargosNaoConsiderados: [],
            slaEttTmpReinv:2,
            slaEttTmpEnvioAposReinv: 2,
            slaEttTmpRespProrrogacao: 2,
            slaEttTmpRespSubstituicao: 2,
            slaEttTmpRespTA: 2,
            slaEttTmpEnvioLH: 2,
            slaEttTmpEnvioDadosNF: 2,
            slaSlcTmpRespAjustDemand: 2,
            slaGslTmpAvaliarResponder: 2,
            slaNgfTmpAvaliarResponder: 2,
            slaDirTmpAvaliarResponder: 2,
            slaGrlTmpAvaliarResponder: 1,
            slaOutrosTmpResponder:2,
            smrsgPrctPraticado: 80,
            smrsgPrctMin: 80,
            smrsgPrctRgl: 120,
            smrsgPrctMinAvalGestor: 80,
            smrsgPrctMinAvalAR: 100,
            pmrifSolicitacaoMin: 3,
            pmrifSolicitacaoRgl: 10,
            pmrifProrrogUmMin: 3,
            pmrifProrrogUmRgl: 10,
            pmrifProrrogDoisMin: 3,
            pmrifProrrogDoisRgl: 10,
            pmrifProrrogTresMin: 3,
            pmrifProrrogTresRgl: 10,
            pmraifProrrogUmMin: 3,
            pmraifProrrogUmRgl: 10,
            pmraifProrrogDoisMin: 3,
            pmraifProrrogDoisRgl: 10,
            pmraifProrrogTresMin: 3,
            pmraifProrrogTresRgl: 10,
            pgmDiaIncPeriodoApuracao: 1,
            pgmDiaGerControlePonto: 1,
            pgmDiaGerLotePagamento: 10,
            otsContaUsadaLancamento: 5432,
            emailCriacaoLP : ""
        }
    }
}