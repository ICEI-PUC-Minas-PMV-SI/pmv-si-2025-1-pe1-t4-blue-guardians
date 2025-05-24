const form = document.getElementById('formLogin')

form.addEventListener('submit', function (event) {
  event.preventDefault();
   // consumindo a API para identificar os usuarios da aplicação
  async function carregarDados() {
    try {
      const response = await fetch('/db.json');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Erro ao carregar o JSON:", error);
    }
  }
  // coleta de e-mail e senha
  const email = form.emailLogin.value;
  const senha = form.senhaLogin.value;

  // função para verificarmos se o usuario digitou o e-mail e senha
  function funcitionVerificaDados(email, senha) {
    if (email.trim() === '') {
      erroEmail.textContent = 'Por favor, preencha o e-mail.';
      temErro = true;
    }
    if (senha.trim() === '') {
      erroSenha.textContent = 'Por favor, preencha a senha.';
      temErro = true;
    }
  }

  async function verificaSeUsuarioExiste(){
    const data = await carregarDados()
    console.log(data.users)
  }
  
  // execução das funções:
  carregarDados();
  funcitionVerificaDados(email, senha)
  verificaSeUsuarioExiste()
  console.log(`Email: ${email}, senha: ${senha}`);
});