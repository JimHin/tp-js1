
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

// Fonction de calcul du volume d'un cône
export function coneVolume(rayon, hauteur) {
    let volume = rayon * rayon * hauteur * Math.PI * (1 / 3);
    return volume;
}
