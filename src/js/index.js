const cep = document.getElementById("cep")

function dinamicCEPValues(data) {
	for (let field in data) {
		if (document.querySelector(`#${field}`)) {
			document.querySelector(`#${field}`).value = data[field]
		}
	}
}

function fetchCEP(CEPselector, DOMevent) {
	CEPselector.addEventListener(DOMevent, (e) => {
		let cepValue = CEPselector.value.replace("-", "")
		const options = {
			method: 'GET',
			mode: 'cors',
			cache: 'default'
		}

		fetch(`https://viacep.com.br/ws/${cepValue}/json/`, options)
			.then(response => {
				response.json().then(data => dinamicCEPValues(data))
			})
			.catch(e => console.log(`Erro: ${e.message}`))
	})
}

fetchCEP(cep, "blur")
