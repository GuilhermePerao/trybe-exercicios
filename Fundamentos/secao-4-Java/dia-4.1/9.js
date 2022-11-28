const price = 22;
const cost = 10;
let profit = 0;

if(price>=0 && cost>=0){
    profit = (price - (1.2 * cost)) * 1000;
    console.log(profit.toFixed(2));
} else{
    console.log('Erro! Valores Inválidos!');
}