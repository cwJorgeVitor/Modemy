function logar(nome) {
    alert("Olá, " + nome);
    open(URL="home.html")
};

let btn= document.querySelector('.olho');

btn.addEventListener('click', function(){
    let input = document.querySelector('#senha');

    if(input.getAttribute('type')== 'password'){
        input.setAttribute ('type', 'text');
    } else{
        input.setAttribute('type', 'password');
    }
})



