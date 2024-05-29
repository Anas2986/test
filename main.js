function fibonacciWithDelay(n, delay = 1000) {
    if (n <= 0) return;

    setTimeout(() => {
        console.log(fibonacci(n));
        fibonacciWithDelay(n - 1);
    }, delay);
}

function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

fibonacciWithDelay(12);

function extractNumbers(str) {
    const regex = /\d+/g;
    return str.match(regex).map(Number);
}

console.log(extractNumbers("a1fg5hj6"));

