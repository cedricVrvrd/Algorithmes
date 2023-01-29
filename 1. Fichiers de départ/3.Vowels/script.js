function getVowelsNumber(txt) {}

/* ÉNONCÉ 📚 */

/* Créez un programme qui retourne le nombre de voyelles dans une chaîne de caractères. */
function getVowelsNumber(params) {
  let result = 0;
  for (let index = 0; index < params.length; index++) {
    if (
      params[index] === "a" ||
      params[index] === "e" ||
      params[index] === "i" ||
      params[index] === "o" ||
      params[index] === "u" ||
      params[index] === "y"
    ) {
      result++;
    }
  }
  return result;
}

/* Tests à passer 🧪 */

console.log(getVowelsNumber("jdhqgdqsghdakzejamazemlqksd")); // 5
console.log(getVowelsNumber("Lorem ipsum dolor sit amet consectetur.")); // 13
console.log(getVowelsNumber("L’imagination gouverne le monde.")); // 13
console.log(getVowelsNumber("zzzZZZzz")); // 0
