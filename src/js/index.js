const cep = document.getElementById("cep")
const statusHandler = document.getElementById("fetch-handler-status")

function clearAddressText() {
	let logradouro = document.getElementById("logradouro")
	let bairro = document.getElementById("bairro")
	let localidade = document.getElementById("localidade")
	let uf = document.getElementById("uf")

	logradouro.value = ""
	bairro.value = ""
	localidade.value = ""
	uf.value = ""

	return
}

function dinamicCEPValues(data) {
	for (let field in data) {
		if (document.querySelector(`#${field}`)) {
			document.querySelector(`#${field}`).value = data[field]
		}
	}
}

function fetchCEP(CEPselector, DOMevent) {
	CEPselector.addEventListener(DOMevent, () => {
		let cepValue = CEPselector.value.replace("-", "")
		const options = {
			method: 'GET',
			mode: 'cors',
			cache: 'default'
		}

		fetch(`https://viacep.com.br/ws/${cepValue}/json/`, options)
			.then(response => {
				statusHandler.innerText = `CEP Encontrado!`
				statusHandler.style.color = "green"
				response.json().then(data => dinamicCEPValues(data))
			})
			.catch(() => {
				statusHandler.innerText = `Erro: entrada invalida!`
				statusHandler.style.color = "red"
				clearAddressText()
			})
	})
}

fetchCEP(cep, "blur")
