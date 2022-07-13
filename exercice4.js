const exercice4 = (array) => {
  let ouestVue = -1;
  let arr = array;
  let index = 0;
  while (arr.length > 1) {
    ouestVue += 1;
    // console.log(`hello ${arr}`);
    arr = arr.slice(index);
    // console.log(arr);
    let highest = Math.max(...arr);
    // console.log(highest);
    index = array.indexOf(highest);
    // console.log(`ouestVue ${ouestVue}`);
    // console.log("///////////////");
  }
  return ouestVue;
}

console.log('must return 3')
test1Ar = [3, 7, 8, 3, 6, 1]
console.log(`array = ${test1Ar}`)
console.log('Answer  =>')
console.log(exercice4(test1Ar))

console.log('--------------------------------')
console.log('must return 1')
test2Ar = [1, 4, 5, 8]
console.log(`array = ${test2Ar}`)
console.log('Answer  =>')
console.log(exercice4(test2Ar))
