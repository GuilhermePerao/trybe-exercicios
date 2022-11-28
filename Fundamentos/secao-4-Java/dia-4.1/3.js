let a = 2;
let b = 2;
let c = 3;

let bigger = a;

if(a>b && a>c) {
    console.log(a, ' é o maior');
} else if(b>a && b>c) {
    console.log(b, ' é o maior');
} else if(c>a && c>b) {
    console.log(c, ' é o maior');
} else {
    console.log('Não existe apenas um número maior');
}