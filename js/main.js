function arrayHandler (lista1, lista2) {
    if (lista2.length ==! lista1.length){
        console.log("Las listas deben de tener la misma longitud")
    }

    for (let i = 0; i < lista1.length; i++){
        console.log(`Soy ${lista1[i]} y yo soy ${lista2[i]}`)
    }
}

arrayHandler([1, 2, 3, 4], ["h", "o", "l", "a"])