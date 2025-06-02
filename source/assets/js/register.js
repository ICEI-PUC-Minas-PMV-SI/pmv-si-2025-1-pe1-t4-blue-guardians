const form = document.getElementById('formRegister');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    // coleta de dados
    const email = form.emailUsuario.value;
    const nome = form.nomeUsuario.value;
    const tipoUsuario = form.tipoUsuario.value;
    const senha = form.senha.value;
    const senhaConfirmacao = form.senhaConfirmacao.value;

    function validarFormulario(form) {
        const email = form.emailUsuario.value.trim();
        const nome = form.nomeUsuario.value.trim();
        const tipoUsuario = form.tipoUsuario.value.trim();
        const senha = form.senha.value;
        const senhaConfirmacao = form.senhaConfirmacao.value;

        const camposBranco = document.getElementById('camposBranco');
        const senhasDiferentes = document.getElementById('senhasDiferentes');

        camposBranco.textContent = '';
        senhasDiferentes.textContent = '';

        if (!email || !nome || !tipoUsuario || !senha || !senhaConfirmacao) {
            camposBranco.textContent = 'Por favor, preencha todos os campos.';
            return false;
        }

        if (senha !== senhaConfirmacao) {
            senhasDiferentes.textContent = 'As senhas não conferem. Por favor, verifique.';
            return false;
        }

        return true;
    }

    if (validarFormulario(form)) {
        // OBJETO DO NOVO USUARIO
        const novoUsuario = {
            name: nome,
            email: email,
            password: senha,
            type: tipoUsuario,
            bio: "",
            urls: [""]
        };

        fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(novoUsuario)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error("Erro ao cadastrar usuário.");
            }
            return response.json();
        })
        .then(data => {
            alert("Usuário cadastrado com sucesso!");
            window.location.href = 'index.html';
            form.reset(); 
        })
        .catch(error => {
            console.error("Erro:", error);
            alert("Falha ao cadastrar usuário.");
        });
    }
});