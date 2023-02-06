function getLongestWord(str) {
  const tab = str.split(" ");
  let longest = "0";
  for (let index = 0; index < tab.length; index++) {
    if (tab[index].length > longest) {
      longest = tab[index].length;
    }
  }
  return longest;
}

/* ÉNONCÉ 📚 */

/* Trouvez la longueur du mot le plus long dans une phrase et retournez-la. */

/* Tests à passer 🧪 */

console.log(getLongestWord("Du sublime au ridicule il n'y a qu'un pas.")); // 8
