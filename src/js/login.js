var senha = 'o'

function logar(nome) {
    alert("Olá, " + nome);
};

function abrirIndex(){
    window.open(URL="../index.html")
}

function verificarSenha(){
   
    if(document.getElementById('senha').value == senha){
        abrirIndex() 
        window.close()
    } 
    else if(document.getElementById('senha').value == ''){
        alert('Senha não inserida')

    }
    else{
        alert('Senha Incorreta!!')
    }
    
}
