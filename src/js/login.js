var senha = 'o'

function logar(nome) {
    alert("Olá, " + nome);
    open(URL="home.html")
};

function abrirIndex(){
    window.open('index.html')
}

function verificarSenha(){
   
    if(document.getElementById('senha').value == senha){
        abrirIndex() 
    } 
    else if(document.getElementById('senha').value == ''){
        alert('Senha não inserida')
    }
    else{
        alert('Senha Incorreta!!')
    }
    
}
