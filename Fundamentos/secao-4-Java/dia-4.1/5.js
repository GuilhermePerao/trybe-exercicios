let a = 90;
let b = 45;
let c = 45;

let triangle = true;

if(a>0 && b>0 && c>0) {
    if(a + b + c == 180) {
        triangle = true;
    } else {
        triangle = false;
    }
    console.log(triangle);
} else {
    console.log('Erro!! Angulo inválido');
}