const form = document.getElementById('formLogin')
form.addEventListener('submit', function (event) {
  event.preventDefault();
   // consumindo a API para identificar os usuarios da aplicação
  async function carregarDados() {
    try {
      const response = await fetch('./assets/api/db.json');
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
  function verificaDados(email, senha) {
    erroEmail.textContent = ''
    erroSenha.textContent = ''
    if (email.trim() === '') {
      erroEmail.textContent = 'Por favor, preencha o e-mail.';
    } 
    if (senha.trim() === '') {
      erroSenha.textContent = 'Por favor, preencha a senha.';
    } 
  }

  async function verificaSeUsuarioExiste(){
    try {
    const data = await carregarDados();
    const users = data.users;
    const user = users.find(u => u.email === email);
    if (!user) {
      if(senha != ''){
        erroSenha.textContent = 'Usuário não encontrado.';
      }
      
      return;
    }
    if (user.password === senha) {
      erroSenha.textContent = '';
      console.log('Usuário encontrado');
      localStorage.setItem('nomeUsuario', user.name); 
      window.location.href = 'index.html';
    } else {
      erroSenha.textContent = 'Senha incorreta.';
    }
  } catch (error) {
    console.error('Erro ao verificar usuário:', error);
  }
  }
  
  // execução das funções:
  carregarDados();
  verificaDados(email, senha)
  verificaSeUsuarioExiste()
  console.log(localStorage)
});