import React from "react";
import FontAwesome from 'react-fontawesome';
import {getMotivoContratacaoById, getStatusSolicitacaoById} from "./enums";
import moment from 'moment';

export let diasAlertaG = 1;

export const qtdeMotsColuna = (cell, row, enumObject, rowIndex) => {
    return row.vencimentos.length;
};

export const valorTotalColuna = (cell, row, enumObject, rowIndex, tipo) => {
    var NumberFormat = require('react-number-format');
    let valor_total = row.vencimentos.reduce((total, obj) => {
        return total + obj.valor_vencimento;
    }, 0);

    if (tipo) {
        return formatarReal(valor_total);
    }

    return <NumberFormat value={valor_total} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','}
                         prefix={'R$ '} decimalPrecision={2}/>;
};

export const slaColuna = (cell, row, enumObject, rowIndex) => {
    let className = "circle ";
    if (row.sla == 0) className += " green";
    else if (row.sla == 1) className += " yellow";
    else className += " red";
    return <span className={className}></span>
};

export const statusTarefaColuna = (cell, row, enumObject, rowIndex) => {
    return row.statusTarefa === "Adquirida" ? <FontAwesome name="envelope-open"/> : <FontAwesome name="envelope"/>;
};

export const mesReferenciaColuna = (cell, row, enumObject, rowIndex) => {
    return row.ano_referencia + "/" + (row.mes_referencia < 10 ? "0" + row.mes_referencia : row.mes_referencia);
};

export const competenciaColuna = (cell, row, enumObject, rowIndex) => {
    return (row.mes_referencia < 10 ? "0" + row.mes_referencia : row.mes_referencia) + "/" + row.ano_referencia;
};

export const cpfProfissionalColuna = (cell, row, enumObject, rowIndex) => {
    return row.profissional.cpf;
};

export const nomeProfissionalColuna = (cell, row, enumObject, rowIndex) => {
    return row.profissional.nome;
};

export const valorVencimentoColuna = (cell, row, enumObject, rowIndex, tipo) => {
    if (tipo) {
        return formatarReal(row.valor_vencimento);
    }
    var NumberFormat = require('react-number-format');
    return <NumberFormat value={row.valor_vencimento} displayType={'text'} thousandSeparator={'.'}
                         decimalSeparator={','} prefix={'R$ '} decimalPrecision={2}/>;
};

export const formatarDataISO8601 = (data) => {
    if (data) {

        //var parsedData = new Date(data);
        //var dataFormatada = parsedData.getDate() + "/" + (parsedData.getMonth() + 1) + "/" + parsedData.getFullYear();
        return moment(data).format("DD/MM/YYYY");
    }
};

export const formatarDataMesAno = (data) => {
    if (data) {
        return moment(data).isValid() ? moment(data).format("MMM/YYYY") : moment(data, "MM/YYYY").isValid() ? moment(data, "MM/YYYY").format("MMM/YYYY") : "";
    }
};

export const formatarData = (data) => {
    if (data) {
        var parsedData = new Date(data);


        var d = parsedData.getDate();
        if (d < 10) d = "0" + d;

        var m = parsedData.getMonth() + 1;
        if (m < 10) m = "0" + m;

        var minutes = parsedData.getMinutes();
        if (minutes < 10) minutes = "0" + minutes;

        var hours = parsedData.getHours();
        if (hours < 10) hours = "0" + hours;
        var dataFormatada = d + "/" + m + "/" + parsedData.getFullYear() + " " + hours + ":" + minutes;
        return dataFormatada;
    }
};

export const formatarReal = (numero) => {
    if (numero) {
        var numero = numero.toFixed(2).split('.');
        numero[0] = "R$ " + numero[0].split(/(?=(?:...)*$)/).join('.');
        return numero.join(',');
    }
};

export const formatarCnpj = (numero) => {
    return numero.replace(/^(\d{3})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5")
};

export const getRandomSubArray = (arr) => {
    if (arr) {
        let n = Math.floor(Math.random() * arr.length + 1);
        let result = new Array(n),
            len = arr.length,
            taken = new Array(len);
        while (n--) {
            const x = Math.floor(Math.random() * len);
            result[n] = arr[x in taken ? taken[x] : x];
            taken[x] = --len;
        }
        return result;
    } else {
        return [];
    }
};

export const arrayToString = (arr, attribute, nospaces) => {
    let arrAux = [];
    if (arr) {
        for (let i = 0; i < arr.length; i++) {
            arrAux.push(arr[i][attribute])
        }
    }
    if (nospaces) {
        return arrAux.join(",");
    } else {
        return arrAux.join(", ");
    }

};

export const createSelectOptions = (arr, value, label) => {
    const result = [];
    if (arr) {
        if (typeof label === "string") {
            for (let i = 0; i < arr.length; i++) {
                result.push({"value": arr[i][value], "label": arr[i][label]})
            }
        } else {
            if (label) {
                for (let i = 0; i < arr.length; i++) {
                    const labelComposto = [];
                    for (let j = 0; j < label.length; j++) {
                        arr[i][label[j]]
                        if (arr[i][label[j]]) {
                            labelComposto.push(arr[i][label[j]])
                        }
                    }
                    result.push({"value": arr[i][value], "label": labelComposto.join(" - ")})
                }
            }
        }
    }
    return result;
};

export const stringToArray = (arr, string, attribute) => {
    if (arr && string) {
        const result = [];
        const splitedString = string.split(",");
        for (let i = 0; i < splitedString.length; i++) {
            const object = arr.find(a => {
                return a[attribute] == splitedString[i]
            });
            if (object) {
                result.push(object)
            }
        }
        return result;
    }
};

export const getByAtribute = (arr, valueToFind, attribute) => {
    return arr.find(a => {
        return a[attribute] == valueToFind
    });
};

export const deleteByAtribute = (arr, valueToDelete, attribute) => {
    let indexToRemove = null;
    arr.forEach((a, index) => {
        if(a[attribute] == valueToDelete) {
            indexToRemove = index;
        }
    });

    if(indexToRemove) {
        arr.splice(indexToRemove, 1);
    }
};

export const listDiferencaByAtribute = (arr1, arr2, att1, att2) => {
    const result = [];
    let insere = false;
    arr1.forEach((value) => {
        insere = true;
        const attribute1 = att1 ? value[att1] : value;
        for (let i = 0; i < arr2.length; i++) {
            const attribute2 = att2 ? arr2[i][att2] : arr2[i];
            if (attribute1 === attribute2) {
                insere = false;
                break;
            }
        }
        if (insere) result.push(value);
    });
    return result;
};

export const listIgualdadeByAtribute = (arr1, arr2, att1, att2) => {
    const result = [];
    let insere = false;
    arr1.forEach((value) => {
        insere = false;
        const attribute1 = att1 ? value[att1] : value;
        for (let i = 0; i < arr2.length; i++) {
            const attribute2 = att2 ? arr2[i][att2] : arr2[i];
            if (attribute1 === attribute2) {
                insere = true;
                break;
            }
        }
        if (insere) result.push(value);
    });
    return result;
};

export const percentualFormat = (cell, nome) => {
    return cell.toFixed(1).replace('.', ',') + '%';
};

export const formatTelefone = (value) => {
    var re = /(\d?)(\d?)(\d?)(\d?)(\d?)(\d?)(\d?)(\d?)(\d?)(\d?)(\d?)/;
    var str = value.toString();
    if (str.length > 10) {
        return str.replace(re, '($1$2) $3$4$5$6$7-$8$9$10$11');
    } else {
        return str.replace(re, '($1$2) $3$4$5$6-$7$8$9$10');
    }
};

export const motivoContratacaoFormatter = (codigoMotivo) => {
    return getMotivoContratacaoById(codigoMotivo).valor;
};

export const statusSolicitacaoFormatter = (statusSolicitacao) => {
    return getStatusSolicitacaoById(statusSolicitacao).valor;
};

export const mudarDiasAlerta = (dias) => {
    diasAlertaG = dias;
}

export const slaFormatter = (totalDias, row) => {
    let title;
    let prazo = moment(row.prazo + ' 23:59:59', "DD/MM/YYYY hh:mm:ss");

    if(isNaN(prazo)){
        var parsedData = new Date(row.prazo);
        var dataFormatada = parsedData.getDate() + "/" + (parsedData.getMonth() + 1) + "/" + parsedData.getFullYear();
        prazo = moment(dataFormatada+ ' 23:59:59', "DD/MM/YYYY hh:mm:ss");
    }

    let agora = moment();
    //let prazo = agora.add(1, 'days');
    let diasAlerta = diasAlertaG;
    let duration = moment.duration(prazo.diff(agora));

    let sla = duration.days();

    if (sla < 0) title = "Prazo expirado";
    else if (sla <= diasAlerta) title = "Prazo expira hoje";
    else title = "Prazo expira em " + sla + " dias";

    const sqSize = 25;
    const strokeWidth = 3;
    //const totalDias = 2;
    const percentage = 1; //sla / totalDias;
    const radius = (sqSize - strokeWidth) / 2;
    const viewBox = `0 0 ${sqSize} ${sqSize}`;
    const dashArray = radius * Math.PI * 2;
    const dashOffset = dashArray - dashArray * percentage;
    let classname;
    if (sla < 0) classname = "stroke-red";
    else if (sla <= diasAlerta) classname = "stroke-yellow";
    else classname = "stroke-green";

    classname = ""; // removendo cor conforme solicitação do usuário

    if (sla < 0) sla = 0;

    return <div title={title}>
        <svg
            width={sqSize}
            height={sqSize}
            viewBox={viewBox}>
            <circle
                className="circle-background"
                cx={sqSize / 2}
                cy={sqSize / 2}
                r={radius}
                strokeWidth={`${strokeWidth}px`}/>
            <circle
                className={`${classname} circle-progress`}
                cx={sqSize / 2}
                cy={sqSize / 2}
                r={radius}
                strokeWidth={`${strokeWidth}px`}
                // Start progress marker at 12 O'Clock
                transform={`rotate(-90 ${sqSize / 2} ${sqSize / 2})`}
                style={{
                    strokeDasharray: dashArray,
                    strokeDashoffset: dashOffset
                }}/>
            <text
                className="circle-text"
                x="50%"
                y="50%"
                dy=".3em"
                textAnchor="middle">
                {`${sla}`}
            </text>
        </svg>
    </div>;
};

export const ordenarData = (a, b, order, fieldName) => {
    let dateA = moment(a[fieldName]).isValid() ? moment(a[fieldName]) :
                moment(a[fieldName], "DD/MM/YYYY").isValid() ? moment(a[fieldName], "DD/MM/YYYY") :
                moment(a[fieldName], "MM/YYYY").isValid() ? moment(a[fieldName], "MM/YYYY") : null;

    let dateB = moment(b[fieldName]).isValid() ? moment(b[fieldName]) :
                moment(b[fieldName], "DD/MM/YYYY").isValid() ? moment(b[fieldName], "DD/MM/YYYY") :
                moment(b[fieldName], "MM/YYYY").isValid() ? moment(b[fieldName], "MM/YYYY") : null;

    if (order === "asc") {
        if (dateA && dateA.isValid() && dateB && dateB.isValid()) {
            return dateA.isBefore(dateB) ? -1 : dateA.isSame(dateB) ? 0 : 1;
        } else if (dateA && dateA.isValid()) {
            return 1;
        } else {
            return -1;
        }

    } else {
        if (dateA && dateA.isValid() && dateB && dateB.isValid()) {
            return dateA.isBefore(dateB) ? 1 : dateA.isSame(dateB) ? 0 : -1;
        } else if (dateA && dateA.isValid()) {
            return -1;
        } else {
            return 1;
        }
    }
};

export const ordenarSLA = (a, b, order ) => {
    let agora = moment();

    let prazo_a = moment(a.prazo + ' 23:59:59', "DD/MM/YYYY hh:mm:ss");
    let prazo_b = moment(b.prazo + ' 23:59:59', "DD/MM/YYYY hh:mm:ss");

    let duration_a = moment.duration(prazo_a.diff(agora));
    let duration_b = moment.duration(prazo_b.diff(agora));

    let sla_a = duration_a.days()+1;
    let sla_b = duration_b.days()+1;

    if (sla_a < 0){
        sla_a = 0;
    }
    if (sla_b < 0){
        sla_b = 0;
    }

    if (order === 'desc') {
        if (sla_a > sla_b) {
            return -1;
        } else if (sla_a < sla_b) {
            return 1;
        }
        return 0;
    }
    if (sla_a < sla_b) {
        return -1;
    } else if (sla_a > sla_b) {
        return 1;
    }
    return 0;
};


export const formatarCpf = (valor) => {
    if(!valor)
        return ''
    return valor.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "\$1.\$2.\$3\-\$4");
};

export const nullable = (valor) => {
    return valor ? valor : "";
};

export const formatarValorReal = (valor) => {
    let novoValor = valor ? valor : 0;
    return (novoValor).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });
};

export const concatenarArrays = (arr, arr2) => {
    arr.push.apply(arr, arr2);
};

export const formatarDataMilisegundos = (data) => {
    return data ? moment(data).format('DD/MM/YYYY') : false;
}

export const inteiroPositivo = (valor) => {
    var num = parseInt(valor) || 0
    return Math.abs(num)
}

export const alphanumeric = (valor) => {
    let retorno = valor.replace(/[^a-z0-9]/gi,'');
    return retorno
}