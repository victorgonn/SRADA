import React from "react";
import {getByAtribute} from "./formatar";

export const tipoGDVEnum = [
    {
        id: "D",
        valor: "Diário"
    },{
        id: "F",
        valor: "Fixo"
    }
];

export const getTipoGDVById = (id) => {
    const result = getByAtribute(tipoGDVEnum, id, "id");
    return result ? result : {id: 0, valor: "Nenhum"};
};





export const tipoPerfilEnum = [
    {
        id: "ADM",
        valor: "Administrador"
    },{
        id: "SMT",
        valor: "Solicitante de MOT"
    }
];

export const getTipoPerfilById = (id) => {
    const result = getByAtribute(tipoPerfilEnum, id, "id");
    return result ? result : {id: 0, valor: "Nenhum"};
};





export const motivoContratacaoEnum = [
    {
        id: "DEC",
        valor: "Demanda complementar"
    },{
        id: "SUB",
        valor: "Substituição"
    }
];

export const getMotivoContratacaoById = (id) => {
    const result = getByAtribute(motivoContratacaoEnum, id, "id");
    return result ? result : {id: 0, valor: id};
};

export const statusSolicitacaoEnum = [
    {
        id: "RAS",
        valor: "Rascunho"
    }, {
        id: "EPR",
        valor: "Em Aprovação"
    }, {
        id: "APR",
        valor: "Aprovada"
    }, {
        id: "REP",
        valor: "Reprovada"
    }, {
        id: "CAN",
        valor: "Cancelada"
    }
];

export const getStatusSolicitacaoById = (id) => {
    const result = getByAtribute(statusSolicitacaoEnum, id, "id");
    return result ? result : id;
};




export const statusSolicitacaoConcluidaEnum = [
    {
        id: "APR",
        valor: "Aprovada"
    }, {
        id: "REP",
        valor: "Reprovada"
    }, {
        id: "CAN",
        valor: "Cancelada"
    }
];

export const getStatusSolicitacaoConcluidaById = (id) => {
    const result = getByAtribute(statusSolicitacaoConcluidaEnum, id, "id");
    return result ? result : id;
};





export const justificativaAlocavelEnum = [
    {
        id: "SIM",
        valor: "Sim"
    },{
        id: "OPI",
        valor: "Opcional"
    },{
        id: "NAO",
        valor: "Não"
    }
];

export const getJustificativaAlocavelById = (id) => {
    const result = getByAtribute(justificativaAlocavelEnum, id, "id");
    return result ? result : {id: 0, valor: ""};
};







export const escopoEnum = [
    {
        id: "ATRCO",
        valor: "Atraso da ETT na confirmação do contrato"
    },{
        id: "CONTR",
        valor: "Contratação"
    },{
        id: "DESIS",
        valor: "Desistência na alocação pela ETT"
    },{
        id: "REJEI",
        valor: "Rejeição prorrogação pela ETT"
    },{
        id: "SUBRA",
        valor: "Substituição de recurso alocado"
    },{
        id: "SUBST",
        valor: "Substituição de recurso indicado"
    },{
        id: "TERMI",
        valor: "Término antecipado"
    }
];

export const getEscopoById = (id) => {
    const result = getByAtribute(escopoEnum, id, "id");
    return result ? result : {id: 0, valor: ""};
};





export const sistemaAlocacaoEnum = [
    {
        id: "PCP",
        valor: "PCP"
    },{
        id: "MOT",
        valor: "MOT"
    }
];

export const getSistemaAlocacaoById = (id) => {
    const result = getByAtribute(sistemaAlocacaoEnum, id, "id");
    return result ? result : {id: 0, valor: ""};
};





export const nomeFluxosEnum = [
    {
        id: "SolicitacaoEtt",
        valor: "Contratação"
    },{
        id: "SolicitacaoContratacao",
        valor: "Solicitação contratação"
    },{
        id: "SolicitacaoTerminoAntecipado",
        valor: "Término antecipado"
    },{
        id: "SolicitacaoSubstituicao",
        valor: "Substituição"
    },{
        id: "SolicitacaoProrrogacao",
        valor: "Prorrogação"
    }
];

export const getNomeFluxosById = (id) => {
    const result = getByAtribute(nomeFluxosEnum, id, "id");
    return result ? result : {id: 0, valor: ""};
};



export const statusLotePagamentoEnum = [
    {
        id: "NOV",
        valor: "Novo"
    },{
        id: "PNF",
        valor: "Pendente preenchimento nota fiscal"
    },{
        id: "PPG",
        valor: "Pendente envio pagamento"
    },{
        id: "PAG",
        valor: "Enviado para pagamento"
    },{
        id: "ERR",
        valor: "Erro ao enviar para pagamento"
    },{
        id: "CNC",
        valor: "Cancelado"
    }
];

export const getStatusLotePagamentoById = (id) => {
    const result = getByAtribute(statusLotePagamentoEnum, id, "id");
    return result ? result : {id: 0, valor: ""};
};





