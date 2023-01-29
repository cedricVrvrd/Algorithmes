function abreviation(str) {}

/* ÉNONCÉ 📚 */

/* Créez un algorithme qui retourne l'abréviation d'un nom et prénom. */
function abreviation(params) {
  const result = params.split(" ");
  return result[0] + " " + result[1][0] + ".";
}

/* Tests à passer 🧪 */

console.log(abreviation("John Doe")); // John D.
console.log(abreviation("Romy Schneider")); // Romy S.
console.log(abreviation("Alfred Hitchcock")); // Alfred H.
