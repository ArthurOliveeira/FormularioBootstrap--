const cep = document.getElementById("cep")
cep.addEventListener("keyup", brasil)

function brasil(j){
    var v = j.target.value.replace(/\D/g,"")
    v = v.replace(/^(\d{5})(\d{3})/, "$1-$2")
    j.target.value = v
}