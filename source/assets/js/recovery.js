const form = document.getElementById('formRecovery');
const codigoVerificacaoInput = form.codigoVerificacao;
const novaSenhaInput = form.novaSenha;
let codigoGerado;
let usuarioEncontrado = null;
let codigoValidado = false;

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const email = form.emailUsuario.value.trim();
  const emailInvalido = document.getElementById('emailInvalido');
  const codigoInvalido = document.getElementById('codigoInvalido');
  const senhaInvalida = document.getElementById('senhaInvalida');

  emailInvalido.textContent = '';
  codigoInvalido.textContent = '';
  senhaInvalida.textContent = '';

  if (codigoValidado) {
    redefinirSenha();
    return;
  }

  if (!codigoVerificacaoInput.disabled) {
    validarCodigo();
    return;
  }

  // Primeira etapa: envio do e-mail e geração do código
  fetch("http://localhost:3000/users")
    .then(res => res.json())
    .then(usuarios => {
      const usuario = usuarios.find(user => user.email.toLowerCase() === email.toLowerCase());

      if (!usuario) {
        emailInvalido.textContent = 'E-mail não encontrado.';
        return;
      }

      usuarioEncontrado = usuario;
      codigoGerado = Math.floor(100000 + Math.random() * 900000);
      alert(`Seu código de verificação é: ${codigoGerado}`);

      // Habilita campo de código (mas não o de senha ainda)
      codigoVerificacaoInput.disabled = false;
      codigoVerificacaoInput.value = '';
    })
    .catch(error => {
      console.error("Erro ao verificar e-mail:", error);
    });
});

function validarCodigo() {
  const codigoVerificado = codigoVerificacaoInput.value.trim();
  const codigoInvalido = document.getElementById('codigoInvalido');

  codigoInvalido.textContent = '';

  if (codigoVerificado !== codigoGerado.toString()) {
    codigoInvalido.textContent = 'Código de verificação incorreto.';
  } else {
    codigoInvalido.style.color = 'green';
    codigoInvalido.textContent = 'Código válido. Insira sua nova senha.';
    codigoVerificacaoInput.disabled = true;
    novaSenhaInput.disabled = false;
    codigoValidado = true;
  }
}

function redefinirSenha() {
  const novaSenha = novaSenhaInput.value.trim();
  const senhaInvalida = document.getElementById('senhaInvalida');

  senhaInvalida.textContent = '';

  if (!novaSenha) {
    senhaInvalida.textContent = 'Por favor, insira uma nova senha.';
    return;
  }

fetch(`http://localhost:3000/users/${usuarioEncontrado.id}`, {
  method: 'PATCH',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ password: novaSenha })
  })
    .then(response => {
      if (response.ok) {
        alert('Senha redefinida com sucesso!');
        window.location.href = 'login.html';
      } else {
        senhaInvalida.textContent = 'Erro ao atualizar a senha.';
      }
    })
    .catch(error => {
      console.error("Erro ao atualizar a senha:", error);
    });
}
