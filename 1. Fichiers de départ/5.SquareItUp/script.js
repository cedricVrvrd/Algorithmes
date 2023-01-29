function squareDigits(num) {
  const nbrToTsr = num.toString();
  const tab = nbrToTsr.split("");
  let result = "";
  for (let index = 0; index < tab.length; index++) {
    result += tab[index] * tab[index];
  }
  return result;
}

/* ÉNONCÉ 📚 */

/*
  Retournez chaque chiffre que contient le nombre passé en argument au carré et concaténez-les. 
  Retournez le nombre concaténé final.
*/

/* Tests à passer 🧪 */

console.log(squareDigits(5225)); // 254425
console.log(squareDigits(5555)); // 2525252525
console.log(squareDigits(1111)); // 1111
