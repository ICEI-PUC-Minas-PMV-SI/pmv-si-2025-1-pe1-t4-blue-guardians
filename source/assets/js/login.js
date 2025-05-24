const form = document.getElementById('formLogin')

form.addEventListener('submit', function(event) {
  event.preventDefault(); 
  const email = form.emailLogin.value;
  const senha = form.senhaLogin.value;
  console.log(`Email: ${email}, senha: ${senha}`);
});