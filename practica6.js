//Завдання 1: Фільтрувати унікальні елементи масиву

function unique(arr) {
    return Array.from(new Set(arr));
  }
  
  // Приклад:
  console.log(unique(["яблуко", "апельсин", "яблуко", "груша"])); 
  
  
  
  //Завдання 2: Відфільтрувати анаграми
  
  function aclean(arr) {
    const map = new Map();
    for (let word of arr) {
      const sorted = word.toLowerCase().split('').sort().join('');
      map.set(sorted, word);
    }
    return Array.from(map.values());
  }
  
  // Приклад:
  console.log(aclean(["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"]));
  
  
  
  //Завдання 3: Підрахунок кількості входжень елементів у масиві
  
  function countOccurrences(arr) {
    const map = new Map();
    for (let item of arr) {
      map.set(item, (map.get(item) || 0) + 1);
    }
    return map;
  }
  
  // Приклад:
  console.log(countOccurrences([1, 2, 2, 3, 1, 1]));
  
  
  //Завдання 4: Перевірка на унікальність елементів
  
  function isUnique(arr) {
    return new Set(arr).size === arr.length;
  }
  
  // Приклад:
  console.log(isUnique([1, 2, 3]));     // ➜ true
  console.log(isUnique([1, 2, 2, 3]));  // ➜ false