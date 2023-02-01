function similarEnd(str, end) {
  let string = str.slice(-end.length);
  if (string === end) {
    return true;
  } else {
    return false;
  }
}

/* ÉNONCÉ 📚 */

/*
Créez un algorithme qui vous informe si les lettres du second argument correspondent à la fin du premier argument.
Si elles correspondent, retournez true, sinon false.
*/

/* Test à passer 🧪 */

console.log(similarEnd("ours", "rs")); // true
console.log(similarEnd("fonction", "zzz")); // false
console.log(similarEnd("Mario", "io")); // true
