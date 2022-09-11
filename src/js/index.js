const cep = document.getElementById("cep")

const isValidCEP = function(cepValue) {
	cepValue.value.replace("-", "")
	const pattern = /^[0-9]{5}[0-9]{3}$/
	return pattern.test(cepValue)
}
