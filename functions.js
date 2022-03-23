
// Fonction qui trouve toutes les occurences possible d'un chiffrement césar d'une expression passée en paramètre
export function forceCaesar(str) {
    let res = "";
    let alphabet = "abcdefghijklmnopqrstuvwxyz";

    for (let i = 0; i < 25; i++) {
        for (let j = 0; j < str.length; j++) {
            let currentChar = str[j]
            if (currentChar == " ") {
                break;
            }
            let position = alphabet.indexOf(currentChar)
            let newCHar = alphabet[(position + i) % 25]
            res += newCHar;
        }
        console.log(res)
        res = "";
    }
}

// Fonction de calcul du volume d'un cône en m3
export function coneVolume(radius, height) {
    let volume = radius * radius * height * Math.PI * (1 / 3);
    console.log('le volume de ce cône est de ' + volume + " m3");
}

// Fonction permettant de déterminer si un nombre est pair ou impair
export function pairOuIimpair(number) {
    if (number % 2 == 0) {
        console.log(volume + " est un nombre pair");
    }
    else {
        console.log(volume + " est un nombre impair");
    }
}