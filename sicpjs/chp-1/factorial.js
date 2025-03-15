function factorial(n) {
    return n === 1 ? 1 : n * factorial(n - 1);
}

let num = 10;
console.log("num: " + num + "   factorial: " + factorial(num));
