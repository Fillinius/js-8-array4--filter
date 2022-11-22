console.log('Hello')

// let askClient = prompt('Как вы оцениваете нашу кофейню от 1 до 10?').trim()
// let askClient1 = Number(askClient)
// console.log(askClient1)

// const askClientToGiveEstimation = function (askClient1) {
//   let clientsEstimations = []
//   for (let i=0; i<=5; i++) {if (askClient1>=0 || askClient1<=10)} 
//   return  clientsEstimations.push(askClient1)
// }
// console.log(askClientToGiveEstimation)

function askClientToGiveEstimation() {
  let clientsEstimations = [] // пустой массив для оценок
    
  for (let i = 0; i < 5; i++) { // просим пользователяя оставить оценку 5 раз
  let askClient = +prompt("введите вашу оценку!") // унарным + приводим ввод пользователя к числу
  if(askClient >= 0 || askClient <= 10) { // проверяем диапазон значений, которые ввел пользователь, и только после этого добавляем их в массив
      clientsEstimations.push(askClient)
  }
      
} 
    return  clientsEstimations // возвращаем массив из функции
}

console.log(askClientToGiveEstimation())



//надо посчитать положительные и отрицательных оценки.
const findNumberSmall = askClientToGiveEstimation.filter((item, index, array) => {
  return item <= 5;
})
console.log(findNumberSmall);
alert (`Всего положительных оценок: ${findNumberSmall.length}`)

const findNumberBig = askClientToGiveEstimation.filter((item,index,array)=>{
  return item>5
})
alert (`Всего положительных оценок: ${findNumberBig.length}`)