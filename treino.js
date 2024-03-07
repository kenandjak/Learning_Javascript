/*console.log("Este é um console")
var velocidade = 120
if(velocidade > 60){
    console.log(`Velocidade acima da permitida: ${velocidade}`)
} else if(velocidade > 30) {
    console.log(`Velocidade adequada: ${velocidade}`)
} else {
    console.log(`Velocidade muita baixa: ${velocidade}`)
}
*/
console.log("HORAS")

var hours = prompt("Digite a hora: ")
if (alert(hours) < 5) {
    console.log("Seu Madruga")
} else if (hours < 12){
    console.log("O Sol já raiou!")
} else if (hours < 18){
    console.log("Tardou!")
} else {
    console.log("The Night!")
}