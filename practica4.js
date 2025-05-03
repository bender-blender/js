function ucFirst(str) {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1);
  }
  
  // Приклад:
  console.log(ucFirst("привіт")); // "Привіт"

// 2

function checkSpam(str) {
    const lowerStr = str.toLowerCase();
    return lowerStr.includes('росі') || lowerStr.includes('xxx');
  }
  
  // Приклад:
  console.log(checkSpam("Це містить росі")); // true
  console.log(checkSpam("Hello XXX")); // true
  console.log(checkSpam("Привіт світ")); // false

  
// 3

function truncate(str, maxlength) {
    return str.length > maxlength ? str.slice(0, maxlength - 1) + "…" : str;
  }

  // Приклад:
  console.log(truncate("Це дуже довгий рядок тексту", 10)); // "Це дуже…"


// 4

function strikeStr(str) {
    const words = str.trim().split(/\s+/);
    if (words.length <= 3) return str;
    const half = Math.ceil(words.length / 2);
    return words.slice(0, half).join(" ") + "\n" + words.slice(half).join(" ");
  }
  
  // Приклад:
  console.log(strikeStr("Це тестовий приклад рядка з багатьма словами"));
  /*
  Вивід:
  Це тестовий приклад
  рядка з багатьма словами
  */
  