let successful = []
let success = []
let victorious = []
let winning = []
let best = []
let theBest = []
let exactly = []
let onTarget = []
let victory = []
let first = document.querySelector('.successful')
let two = document.querySelector('.success')
let tree = document.querySelector('.victorious')
let foor = document.querySelector('.winning')
let five = document.querySelector('.best')
let six = document.querySelector('.theBest')
let seven = document.querySelector('.exactly')
let eit = document.querySelector('.onTarget')
let nine = document.querySelector('.victory')
let finish = document.querySelector('.finich')
  let ticket = [];
  for(let i = 1; i < 53; i++){
    ticket.push(i)
  }
   
document.querySelector('.one').addEventListener("click", function(){


function getRandomArrayElements(arr, count) {
    var shuffled = arr.slice(0), i = arr.length, min = i - count, temp, index;
    while (i-- > min) {
        index = Math.floor((i + 1) * Math.random());
        temp = shuffled[index];
        shuffled[index] = shuffled[i];
        shuffled[i] = temp;
    }
    return shuffled.slice(min);
}
//dfgsdgsdgd

let number1 = getRandomArrayElements(ticket, 6)
first.innerHTML = number1.join(' ')
let difference = ticket.filter(x => !number1.includes(x)).concat(number1.filter(x => !ticket.includes(x)))
//console.log(difference)
let number2 = getRandomArrayElements(difference, 6)
two.innerHTML = number2.join(' ')
let differenceOne = difference.filter(x => !number2.includes(x)).concat(number2.filter(x => !difference.includes(x)))
//console.log(differenceOne)
let number3 = getRandomArrayElements(differenceOne, 6)
tree.innerHTML = number3.join(' ')
let differenceTwo = differenceOne.filter(x => !number3.includes(x)).concat(number3.filter(x => !differenceOne.includes(x)))
//console.log(differenceTwo)
let number4 = getRandomArrayElements(differenceTwo, 6)
foor.innerHTML = number4.join(' ')
let differenceThree = differenceTwo.filter(x => !number4.includes(x)).concat(number4.filter(x => !differenceTwo.includes(x)))
//console.log(differenceThree)
let number5 = getRandomArrayElements(differenceThree, 6)
five.innerHTML = number5.join(' ')
let differenceFoor = differenceThree.filter(x => !number5.includes(x)).concat(number5.filter(x => !differenceThree.includes(x)))
//console.log(differenceFoor)
let number6 = getRandomArrayElements(differenceFoor, 6)
six.innerHTML = number6.join(' ')
let differenceFive = differenceFoor.filter(x => !number6.includes(x)).concat(number6.filter(x => !differenceFoor.includes(x)))
//console.log(differenceFive)
let number7 = getRandomArrayElements(differenceFive, 6)
seven.innerHTML = number7.join(' ')
let differenceSix = differenceFive.filter(x => !number7.includes(x)).concat(number7.filter(x => !differenceFive.includes(x)))
//console.log(differenceSix)
let number8 = getRandomArrayElements(differenceSix, 6)
eit.innerHTML = number8.join(' ')
let differenceSeven = differenceSix.filter(x => !number8.includes(x)).concat(number8.filter(x => !differenceSix.includes(x)))
//console.log(differenceSeven)
let number9 = getRandomArrayElements(differenceSeven, 4)
  nine.innerHTML  =   number9.join(' ')
let differenceAit = differenceSeven.filter(x => !number9.includes(x)).concat(number9.filter(x => !differenceSeven.includes(x)))
//console.log(differenceAit)
})