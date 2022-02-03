const custoDoProduto = 549;
const valorDeVenda = 700;


if (custoDoProduto >= 0 && valorDeVenda >= 0 ){
    const valorCustoTotal = custoDoProduto*1.2;
    const lucro = valorDeVenda - valorCustoTotal;
    console.log(lucro);
} else {
    console.log("Algum Valor Digitado Errado");
}

