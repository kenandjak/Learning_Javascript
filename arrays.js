// Executa com F8
let array = [0,1,2,3,4]

console.log(`${array}`)
console.log(array)

array[2] = 6
array.push(7)

console.log(array)

let tamanho = array.length // sem parênteses mesmo
console.log(tamanho)

array = [8,30,1,9,5]
array.sort()
console.log(array)

for(let pos in array){
    console.log(array[pos])
}

let ind = array.indexOf(30)
console.log(`O número 30 está na posição: ${ind}`)