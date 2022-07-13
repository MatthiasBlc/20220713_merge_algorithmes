const exercice2 = (array) => {
  let ouestVue = 0;
  for (let i = 0; i < array.length; i++) {
    let changeNumberView = 1;
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] <= array[j]) {
        changeNumberView = 0;
      }
    }
    ouestVue += changeNumberView;
  }
  return ouestVue;
};

console.log("must return 3");
test1Ar = [3, 7, 8, 3, 6, 1];
console.log(`array = ${test1Ar}`);
console.log("Answer  =>");
console.log(exercice2(test1Ar));

console.log("--------------------------------");
console.log("must return 1");
test2Ar = [1, 4, 5, 8];
console.log(`array = ${test2Ar}`);
console.log("Answer  =>");
console.log(exercice2(test2Ar));
