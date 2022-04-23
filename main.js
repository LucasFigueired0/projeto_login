const userName = document.querySelector('#userName');
const userPass = document.querySelector('#userPass');
const botao_login = document.querySelector('#botao_login');


//console.log(userPass);

//Modificação de textp
// userName.innerHTML = '<input type="text" placeholder="Usuário">';

//Eventos ao clicar o botão
botao_login.addEventListener('click',function(e)
{
    e.preventDefault;
    const nome = userName.value;
    const senha = userPass.value;
    

    if(nome === 'Lucas')
    {
        console.log('Okay');
    }
})

