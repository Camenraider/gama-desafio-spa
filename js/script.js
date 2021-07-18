// pegando dados do formulário
const form = document.getElementById('form')

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let data = {
        nome,
        email,
    }

    //convertendo em json
    let convertData = JSON.stringify(data);

    //armazenado no localstorage
    localStorage.setItem('lead', convertData);

    //criando um loader da pg
    let content = document.getElementById('content');
    let carregando = `<p>Carregando...</p>`;
    let pronto = `<p>pronto</p>`
    content.innerHTML= carregando;

    //tempo de carregar
    setTimeout(() => {
        content.innerHTML = pronto;
    }, 1000) 
})