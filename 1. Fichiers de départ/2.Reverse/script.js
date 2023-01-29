function reverse(str) {}

/* ÉNONCÉ 📚 */

/* Créez un algorithme qui retourne la chaîne de caractères passée en argument à l'envers. */
function reverse(params) {
  let phrase = [];
  for (let index = 0; index < params.length; index++) {
    phrase.push(params[index]);
  }
  return phrase.reverse().join("");
}

/* Tests à passer 🧪 */

console.log(reverse("Bonjour à tous")); // suot à ruojnoB
console.log(reverse("Être haut comme trois pommes")); // semmop siort emmoc tuah ertÊ
console.log(reverse("Ne pas chercher midi à quatorze heures")); // serueh ezrotauq à idim rehcrehc sap eN

// correction
// const reverse = str => str.split("").reverse().join("")
