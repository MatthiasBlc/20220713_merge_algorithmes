const exercice5 = (k, array) => {
  return array.some((element) => array.includes(k-element))

}

console.log('must return true')
test1Val = 17
console.log(`k = ${test1Val}`)
test1Ar = [10, 15, 3, 7]
console.log(`array = ${test1Ar}`)
console.log('Answer  =>')
console.log(exercice5(test1Val, test1Ar))

console.log('--------------------------------')
console.log('must return false')
test2Val = 19
console.log(`k = ${test2Val}`)
test2Ar = [1, 8, 10, 21]
console.log(`array = ${test2Ar}`)
console.log('Answer  =>')
console.log(exercice5(test2Val, test2Ar))
