const listaMesesTexto = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
const letras = '0123456789ABCDEF';
const cores = [
  '#0082c8', '#e6194b', '#3cb44b', '#ffe119', '#f58231',
  '#911eb4', '#46f0f0', '#f032e6', '#d2f53c', '#fabebe',
  '#008080', '#e6beff', '#aa6e28', '#fffac8', '#800000',
  '#aaffc3', '#808000', '#ffd8b1', '#000080', '#808080' ]

export const getCorAleatoria = (index = 0) => {
    if(index < cores.length - 1) {
        return cores[index];
    } else {
      let cor = '#';
      for (var i = 0; i < 6; i++) {
          cor += letras[Math.floor(Math.random() * 16)];
      }
      return cor;
    }
}

export const getMensagemDeErro = (erro) => {
    if(erro && erro.response && erro.response.data) {
        return erro.response.data.message;
    }
};

export const pad = (n, width, z) => {
    z = z || '0';
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

export const stringToArray = (string) => {
    return string ? string.split(",") : null;
}

export const getListaMesesTexto = () => {
    return listaMesesTexto;
}

export const getMesTexto = (mes) => {
    return listaMesesTexto[parseInt(mes) - 1];
}

export const formatarCPF = (cpf) => {
    if(!cpf) {
        return;
    }

    try {
        return cpf.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    } catch(err) {
        return;
    }
}

export const formatarCNPJ = (cnpj) => {
    if(!cnpj) {
        return;
    }

    try {
        return cnpj.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5");
    } catch(err) {
        return;
    }
}

export const formatarData = (data) => {
    if(!data) {
        return;
    }

    try {
        return new Date(data).toLocaleString("pt-br");
    } catch(err) {
        return;
    }
}

export const formatarPercentual = (percentual) => {
    if(!percentual) {
        return;
    }

    try {
        return Math.floor(percentual * 100) + "%";
    } catch(err) {
        return;
    }
}