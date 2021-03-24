const cep = document.querySelector("#cep");

cep.addEventListener("blur", (e) => {
  let search = cep.value.replace("-", "");
  const options = {
    method: "GET",
    mode: "cors",
    cache: "default",
  };

  const showData = (result) => {
    for (const campo in result) {
      if (document.querySelector("#" + campo)) {
        document.querySelector("#" + campo).value = result[campo];
      }
    }
  };

  fetch(`https://viacep.com.br/ws/${search}/json/`, options)
    .then((response) => {
      response.json().then((data) => showData(data));
    })
    .catch((e) => console.log("Deu Erro: " + e, message));
});
