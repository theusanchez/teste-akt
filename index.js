function clear_cep_form() {
  document.getElementById("endereco").value = "";
  document.getElementById("cidade").value = "";
  document.getElementById("estado").value = "";
}

function my_callback(content) {
  if (!("erro" in content)) {
    document.getElementById("endereco").value = content.logradouro;
    document.getElementById("cidade").value = content.localidade;
    document.getElementById("estado").value = content.uf;
  } else {
    clear_cep_form();
    alert("CEP não encontrado.");
  }
}

function searchcep(valor) {
  var cep = valor.replace(/\D/g, "");

  if (cep != "") {
    var validate_cep = /^[0-9]{8}$/;

    if (validate_cep.test(cep)) {
      document.getElementById("endereco").value = "...";
      document.getElementById("cidade").value = "...";
      document.getElementById("estado").value = "...";

      var script = document.createElement("script");

      script.src =
        "https://viacep.com.br/ws/" + cep + "/json/?callback=my_callback";

      document.body.appendChild(script);
    } else {
      clear_cep_form();
      alert("Formato de CEP inválido.");
    }
  } else {
    clear_cep_form();
  }
}
