const emailCerto = 'teste@gmail.com'
const senhaCerta = '123'

function verificar(){
    var email = document.getElementById('email').value;
    var senha = document.querySelector('#senha').value;
    if(email != '' && senha != ''){
        var resultado = this.login(email, senha);
        if(resultado == true){
            alert('Login efetuado com sucesso!');
        }else{
            alert('Login inválido! Tente novamente');
        }
    }else{
        alert('Preencha seu email e senha');
    }
}

function login(email, senha){
    if(email == emailCerto && senha == senhaCerta){
        return true;
    }else{
        return false;
    }
}