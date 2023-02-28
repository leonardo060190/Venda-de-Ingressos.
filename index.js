function calcular(){
    if(validaQuantidade() && validapreco() && validafilme() && validaSessao()){
    let total = parseFloat(quantidade.value) * parseFloat(preco.value);
    valor_a_pagar.value = total;
}
}

function validaQuantidade(){
    if(quantidade.value.trim() === ""){
        quantidade.style.background = "green";
        mensagem.innerHTML = "Informe a Quantidade."
        $('#alerta').modal('show');
        return false;
    }else{
        quantidade.style.background = "white";
        return true;
    }
};

function validapreco(){
if(preco.value.trim() === ""){
    preco.style.background = "green";
    mensagem.innerHTML = "Informe o Preço."
    $('#alerta').modal('show');
    return false;
}else{
    preco.style.background = "white";
    return true;
};
};

function validafilme(){
if(filme.value.trim() === ""){
    filme.style.background = "green";
    mensagem.innerHTML = "Informe o nome do Filme."
    $('#alerta').modal('show');
    return false;
}else{
    filme.style.background = "white";
    return true;
};
};

function validaSessao(){
if(sessao.value.trim() === ""){
    sessao.style.background = "green";
    mensagem.innerHTML = "Informe a Sessão."
    $('#alerta').modal('show');
    return false;
}else{
    sessao.style.background = "white";
    return true;
};
};