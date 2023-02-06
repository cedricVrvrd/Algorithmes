function getPosition(arr, num) {
  arr.push(num);
  let position = 0;
  const artTri = arr.sort((a, b) => a - b);
  for (let index = 0; index < artTri.length; index++) {
    if (artTri[index] === num) {
      position = index;
    }
  }
  return position;
}

/* ÉNONCÉ 📚 */

/*
  Créez un algorithme qui retourne la position du second argument dans la liste triée de nombres contenus dans le tableau qu'on passe en premier argument. 
*/

/* Tests à passer 🧪 */

console.log(getPosition([10, 30, 40, 20], 25)); // 2
console.log(getPosition([30, 45, 87, 96, 54, 29], 60)); // 4
