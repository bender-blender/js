let styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");

// Заміна середнього елемента
let middleIndex = Math.floor(styles.length / 2);
styles[middleIndex] = "Classics";

// Видалення першого елемента
let removed = styles.shift();
console.log("Видалено:", removed);

// Додавання на початок
styles.unshift("Rap", "Reggae");

console.log(styles);
// ["Rap", "Reggae", "Classics", "Rock-n-Roll"]


// 2

function sumInput() {
    let numbers = [];
    while (true) {
      let input = prompt("Введіть число:", "");
      if (input === null || input.trim() === "" || isNaN(input)) break;
      numbers.push(+input);
    }
    return numbers.reduce((sum, num) => sum + num, 0);
  }
  
  // Приклад використання:
  console.log("Сума:", sumInput());

// 3

function getMaxSubSum(arr) {
    let maxSum = 0;
    let currentSum = 0;
  
    for (let num of arr) {
      currentSum = Math.max(0, currentSum + num);
      maxSum = Math.max(maxSum, currentSum);
    }
  
    return maxSum;
  }
  
  // Приклад:
  console.log(getMaxSubSum([1, -2, 3, 4, -9, 6])); // 7
