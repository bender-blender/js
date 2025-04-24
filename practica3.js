function random(min, max) {
    return Math.random() * (max - min) + min;
}

alert(random(1, 5)); // Наприклад: 2.738...

// Завдання 2
function isPrime(n) {
    if (n <= 1) return false;

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

console.log(isPrime(17)); // true


// Завдання 3
function recursiveSum(n) {
    if (n === 0) return 0;
    if (n > 0) return n + recursiveSum(n - 1);
    return n + recursiveSum(n + 1); // для від’ємних значень
}

console.log(recursiveSum(5));   // 15 (1+2+3+4+5)
console.log(recursiveSum(-3));  // -5 (0 + (-1) + (-2) + (-3))
