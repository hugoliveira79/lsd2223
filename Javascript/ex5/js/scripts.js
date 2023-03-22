function validaIdade(){
    //alert('entrei na funcao');
    ano = document.getElementById('ano').value ;

    //devolve a data actual
    dataAtual = new Date();
    anoAtual = dataAtual. getFullYear();

    idade= anoAtual - ano;
    //alert(idade);

    if(idade < 18 ){
        document.getElementById('erros').innerText='idade insuficiente';    
        return false;
    } else {
        return true;
    }


}