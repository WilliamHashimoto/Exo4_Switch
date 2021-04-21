let nbr1 = prompt("Entrez un nombre");
let operateur = prompt("Entrez un opérateur");
let nbr2 = prompt("Entrez un deuxieme nombre");

switch (operateur) {
    case "+":
        alert(Number(nbr1) + Number(nbr2));
        break;
    case "-":
        alert(Number(nbr1) - Number(nbr2));
        break;
    case "*":
        alert(Number(nbr1) * Number(nbr2));
        break;
    case "/":
        alert(Number(nbr1) / Number(nbr2));
        break;

    default:
        alert("Vous avez rentrer une mauvaise info")
        break;
}