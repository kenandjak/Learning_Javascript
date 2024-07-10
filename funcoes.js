function parImpar(n) {
    if (n%2 == 0) {
        return 'Par'
    } else {
        return 'Ímpar'
    }
}

let ans = parImpar(5)
console.log(ans)

// Se não passar valores oara n1 ou n2, considera o default
function soma(n1=0, n2=0){
    return n1 + n2
}

// Arrow function
//https://www.w3schools.com/Js/js_arrow_function.asp
let mult = () => {
    return 5 * 4
}
let mult2 = (x,y) => {
    return x * y
}
console.log(mult())
console.log(mult2(3,6))

function fatorial (n) {
    if (n == 1) {
        return 1
    } else {
        return n * fatorial(n-1)
    }
}
console.log(fatorial(7))