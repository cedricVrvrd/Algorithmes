function removeDuplicates(arr) {
  const tabNew = [];
  for (let index = 0; index < arr.length; index++) {
    if (!tabNew.includes(arr[index])) tabNew.push(arr[index]);
  }
  return tabNew;
}

/* ÉNONCÉ 📚 */

/* Créez un algorithme qui retourne un tableau sans les valeurs doublon de celui qui est passé en argument. */

/* Tests à passer 🧪 */

console.log(removeDuplicates([5, 5, 4, 6, 3, 5])); // [5, 4, 6, 3]
console.log(removeDuplicates(["a", "b", "z", "z", "e", "a"])); // ["a", "b", "z", "e"]
