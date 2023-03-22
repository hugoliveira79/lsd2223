function validaFormulario(){
    alert('entrei');

        //guardar numa variavel o q estiver no nome
    nome_inserido= document.getElementById('nome').value ;
        //guardar numa variavel o que estiver na morada
    morada_inserida = document.getElementById('morada').value ;
    console.log(nome_inserido)  ;
    console.log(morada_inserida)  ;

    //alert('ja li os valores');
        // se estiver alguma coisa no nome E estiver alguma coisa na morada
            //submete
   /* if(nome_inserido !='' && morada_inserida!=''){
        
        return true;
    } else {
        document.getElementById('zona-de-erro').innerText='Dados incorrectos';
        //alert('DADOS INCORRECTOS!!')
        return false;
    }
    */
    if(nome_inserido =='' || morada_inserida==''){
        document.getElementById('zona-de-erro').innerText='Dados incorrectos';

        
        return false;
    } else {
        //alert('DADOS INCORRECTOS!!')
        return true;
    }   
    
            
        // senao
            //avisa o utilizador
            //impede a submissao do formulario

}

function validaFormularioMelhor(){
    document.getElementById('obrigatorio_nome').style.display='none';
    document.getElementById('obrigatorio_morada').style.display='none';
    document.getElementById('zona-de-erro').innerText='';

    //guardar numa variavel o q estiver no nome
    nome_inserido= document.getElementById('nome').value ;
    //guardar numa variavel o que estiver na morada
    morada_inserida = document.getElementById('morada').value ;
    //se nome vazio
    if(nome_inserido==''){
        //mostra * do nome
        document.getElementById('obrigatorio_nome').style.display='block';
    } 
    if(morada_inserida==''){
        //mostra * do nome
        document.getElementById('obrigatorio_morada').style.display='block';
    }
    
    if(nome_inserido=='' || morada_inserida==''){
        document.getElementById('zona-de-erro').innerText='preencha os campos assinalados';
        return false;

    } else {
        return true;
    }



}