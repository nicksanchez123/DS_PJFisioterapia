document.getElementById('telefone').addEventListener('input', function (e) {
    var input = e.target;
    var value = input.value.replace(/\D/g, ''); // Remove tudo que não for número
    if (value.length <= 2) {
      input.value = value.replace(/^(\d{0,2})/, '($1');
    } else if (value.length <= 7) {
      input.value = value.replace(/^(\d{2})(\d{0,5})/, '($1) $2-');
    } else {
      input.value = value.replace(/^(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3');
    }
  });