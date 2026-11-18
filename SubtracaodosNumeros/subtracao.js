document.getElementById("=").onclick = function(){

    var numero1 = Number (document.getElementById("n1").value) 
    var numero2 = Number (document.getElementById("n2").value)

    document.getElementById("subtracao").textContent = (numero1 - numero2)

    console.log(numero1 - numero2)
}