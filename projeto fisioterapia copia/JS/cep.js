document.getElementById('cep').addEventListener('blur', function() {
    const cep = this.value.replace(/\D/g, ''); // Remove caracteres não numéricos

    // Verifica se o CEP tem 8 dígitos
    if (cep.length === 8) {
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then(response => response.json())
            .then(data => {
                if (!data.erro) { // Se não houver erro no retorno
                    document.getElementById('rua').value = data.logradouro;
                    document.getElementById('bairro').value = data.bairro;
                    document.getElementById('estado').value = data.uf;
                } else {
                    alert("CEP não encontrado!");
                }
            })
            .catch(() => alert("Erro ao buscar o CEP."));
    } else {
        alert("CEP inválido!");
    }
});

