const form = document.getElementById('formRegister');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const email = form.emailUsuario.value.trim();
  const nome = form.nomeUsuario.value.trim();
  const tipoUsuario = form.tipoUsuario.value.trim();
  const senha = form.senha.value;
  const senhaConfirmacao = form.senhaConfirmacao.value;

  const camposBranco = document.getElementById('camposBranco');
  const senhasDiferentes = document.getElementById('senhasDiferentes');
  const emailDuplicado = document.getElementById('emailDuplicado');

  camposBranco.textContent = '';
  senhasDiferentes.textContent = '';
  emailDuplicado.textContent = '';

  // Validação
  if (!email || !nome || !tipoUsuario || !senha || !senhaConfirmacao) {
    camposBranco.textContent = 'Por favor, preencha todos os campos.';
    return;
  }

  if (senha !== senhaConfirmacao) {
    senhasDiferentes.textContent = 'As senhas não conferem. Por favor, verifique.';
    return;
  }

  // Verificar se o e-mail já existe
  fetch("http://localhost:3001/users")
    .then(res => res.json())
    .then(usuarios => {
      const emailJaExiste = usuarios.some(user => user.email.toLowerCase() === email.toLowerCase());

      if (emailJaExiste) {
        emailDuplicado.textContent = 'Este e-mail já está cadastrado.';
        return;
      }

      const novoUsuario = {
        name: nome,
        email: email,
        password: senha,
        type: tipoUsuario,
        bio: "",
        urls: [""]
      };


      return fetch("http://localhost:3001/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(novoUsuario)
      });
    })
    .then(response => {
      if (response && response.ok) {
        localStorage.setItem('nomeUsuario', nome); 
        window.location.href = 'login.html';
      }
    })
    .catch(error => {
      console.error("Erro ao cadastrar:", error);
    });
});