// Завдання 1: Підсумуйте властивості

function sumSalaries(salaries) {
    let sum = 0;
    for (let salary of Object.values(salaries)) {
      sum += salary;
    }
    return sum;
  }


// Завдання 2: Порахуйте властивості
function count(obj) {
    return Object.keys(obj).length;
  }


// Завдання 3: Деструктуроване присвоєння
const user = {
    name: "John",
    years: 30
  };
  
const { name, years: age, isAdmin = false } = user;

