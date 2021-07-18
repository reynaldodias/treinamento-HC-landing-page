const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
    e.preventDefault(); // Não deixa que a página seja mais recarregada ao clicar no submit e sim sobreescrita
    let nome = document.getElementById('nome').value;                                 
    let email = document.getElementById('email').value;

    // Pegando as informações e passando para o localStorage

    let data = {
      nome,
      email,
   }
    let convertData = JSON.stringify(data); // pega o objeto e converte para string

    localStorage.setItem('lead', convertData);

    let content = document.getElementById('content');
    
    let carregando = '<p>Carregando...</p>';

    let pronto = '<p>Cadastro Realizado com Sucesso!</p>';

    content.innerHTML = carregando;
  

    setTimeout(() => {
      content.innerHTML = pronto;
    }, 2000);

    setTimeout(() => {
      location.reload();
    }, 4000);
   

});
