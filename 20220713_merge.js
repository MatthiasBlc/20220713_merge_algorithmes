//Script lecture fichier
let fs = require("fs");
let data;

if (!process.argv[2]) {
  console.log("Aucun fichier de données renseigné");
  return;
}
try {
  data = fs.readFileSync(process.argv[2], "utf8"); //Throw en cas d'erreur (donc il faut catch)
} catch (error) {
  console.log("Le fichier renseigné déclanche les erreurs suivantes :");
  console.error(error);
  return;
}
//End lecture fichier

//Script conversion file to array
console.log(data); //Le contenu du fichier est présent dans data
data = data
  .split(" ")
  .map((data) => (!isNaN(Number(data)) ? Number(data) : null))
  .filter(Boolean);
if (data.length < 1) {
  console.log("Aucun nombre dans le fichier de données renseigné");
  return;
}
//End Script conversion file to array



// Merge sort
const mergeSort = (data) => {
  let run = 0;
  if (data.length > 1) {
    const findMiddle = Math.floor(data.length / 2)
    const left = data.slice(0, findMiddle)
    const right = data.slice(findMiddle)

    mergeSort(left)
    mergeSort(right)

    let leftIndex = 0, rightIndex = 0, globalIndex = 0

    while(leftIndex < left.length && rightIndex < right.length) {
      run += 1
      if (left[leftIndex] < right[rightIndex]) {
        data[globalIndex] = left[leftIndex]
        leftIndex++
      } else {
        data[globalIndex] = right[rightIndex]
        rightIndex++
      }
      globalIndex++
    }

    while(leftIndex < left.length) {
      data[globalIndex] = left[leftIndex]
      leftIndex++
      globalIndex++
    }
    while(rightIndex < right.length) {
      data[globalIndex] = right[rightIndex]
      rightIndex++
      globalIndex++
    }
  }
  return `Oder by Merge : ${run} comparisons
  -------------------------- 
  ${data}
  --------------------------`;
};

// Run
copy = data.slice();
console.log(mergeSort(copy));


