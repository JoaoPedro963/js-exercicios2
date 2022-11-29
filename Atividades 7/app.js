function convercao(){
        var valor = document.getElementById("Valor").value 
        var litros = parseFloat(valor / 5).toFixed(2)
        var km = parseFloat(litros * 20).toFixed(2)

        // to.fixed é utilizado para definir o número de casas decimais

    document.write("Você tem R$" ,(valor) , ", com esse valor é possivel comprar " ,(litros) ,", essa quantidade de litros faz com que o carro rode ",(km),".")
}
// document.write é utilizado para passar por escrito o conteúdo desejado