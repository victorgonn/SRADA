export const ordernarValorTotal = (rowA, rowB, order) => {
    let valor_a = rowA.vencimentos.reduce((total, obj) => {return total + obj.valor_vencimento;}, 0);
    let valor_b = rowB.vencimentos.reduce((total, obj) => {return total + obj.valor_vencimento;}, 0);
    return order === 'asc' ? (valor_a < valor_b ? -1 : 1) : (valor_a < valor_b ? 1 : -1);
}

export const ordenarQtdeMots = (rowA, rowB, order) => {
    let valor_a = rowA.vencimentos.length;
    let valor_b = rowB.vencimentos.length;
    return order === 'asc' ? (valor_a < valor_b ? -1 : 1) : (valor_a < valor_b ? 1 : -1);
}

export const revertSortFunc = (a, b, order) => {   // order is desc or asc
    if (order === 'desc') {
        return a.price - b.price;
    } else {
        return b.price - a.price;
    }
}

export const sortAlphaNum = (valueA, valueB , order, fieldName) =>{
    var a = valueA[fieldName];
    var b = valueB[fieldName];

    var reA = /[^a-zA-Z]/g;
    var reN = /[^0-9]/g;
    var AInt = parseInt(a, 10);
    var BInt = parseInt(b, 10);

    if(a == null || a == undefined){
        return 1;
    }
    if(b == null || b == undefined) {
        return -1;
    }
    if(a.toString().indexOf("/") > 0 && b.toString().indexOf("/") > 0){
        var Avalues = a.split("/");
        var Bvalues = b.split("/");

        if(parseInt(Avalues[0], 10) == parseInt(Bvalues[0], 10)){
            AInt =parseInt(Avalues[1], 10);
            BInt = parseInt(Bvalues[1], 10);
        }
    }
    if((isNaN(AInt) && AInt != null)&& (isNaN(BInt) ** BInt != null)){
        var aA = a.replace(reA, "");
        var bA = b.replace(reA, "");
        if(aA === bA) {
            var aN = parseInt(a.replace(reN, ""), 10);
            var bN = parseInt(b.replace(reN, ""), 10);

            if (order === 'desc') {
                return aN === bN ? 0 : aN > bN ? 1 : -1;
            }
            else{
                return aN === bN ? 0 : aN < bN ? 1 : -1;
            }

        } else {
            if (order === 'desc') {
                return aA > bA ? 1 : -1;
            }
            else{
                return aA < bA ? 1 : -1;
            }
        }
    }else if(isNaN(AInt)){
        return 1;
    }else if(isNaN(BInt)){
        return -1;
    }else if(AInt == BInt) {
        var aA = a.replace(reA, "");
        var bA = b.replace(reA, "");
        if (order === 'desc') {
            return aA > bA ? 1 : -1;
        }
        else{
            return aA < bA ? 1 : -1;
        }
    }
    else {
        if (order === 'desc') {
            return AInt > BInt ? 1 : -1;
        }
        else{
            return AInt < BInt ? 1 : -1;
        }
    }
}
