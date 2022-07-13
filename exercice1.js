const exercice1 = (k, array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[i] + array[j] == k) return true;
    }
    return false;
  }
};

console.log("must return true");
test1Val = 17;
console.log(`k = ${test1Val}`);
test1Ar = [10, 15, 3, 7];
console.log(`array = ${test1Ar}`);
console.log("Answer  =>");
console.log(exercice1(test1Val, test1Ar));

console.log("--------------------------------");
console.log("must return false");
test2Val = 19;
console.log(`k = ${test2Val}`);
test2Ar = [1, 8, 10, 21];
console.log(`array = ${test2Ar}`);
console.log("Answer  =>");
console.log(exercice1(test2Val, test2Ar));
