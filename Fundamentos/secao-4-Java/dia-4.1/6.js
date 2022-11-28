let piece = 'BiShoP';
piece = piece.toLowerCase();
/* console.log('Antes: ', piece);

console.log('LowerCase: ', piece);
piece = piece.toLowerCase();

piece = piece.toUpperCase();
console.log('UpperCase: ', piece); */

switch(piece) {
    case 'pawn':
        console.log(piece);
        break;
    case 'bishop':
        console.log(piece);
        break;
    case 'knight':
        console.log(piece);
        break;
    case 'rook':
        console.log(piece);
        brerak;
    case 'queen':
        console.log(piece);
        break;
    case 'king':
        console.log(piece);
        break;

    default:
        console.log('Peça invalida!');
}