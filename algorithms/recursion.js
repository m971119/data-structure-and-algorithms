
// 5! = 5*4*3*2*1
function findFactorialByRecursion(number) { // O(n)
    if (number <= 2) {
        return number;
    }
    return number * findFactorialByRecursion(number - 1);
}

function findFactorialByIterative(number) { // O(n)
    let answer = 1;
    for (let i = number; i >= 2; i--) {
        answer *= i;
    }
    return answer;
}

console.log(findFactorialByIterative(5));
console.log(findFactorialByRecursion(5));

// 0, 1, 1, 2, 3, 5, 8
function fibonacciByIteration(n) { // O(n)
    let arr = [0, 1];
    for (let i = 2; i < n + 1; i++) {
        arr.push(arr[i-2] + arr[i-1]);
    }
    return arr[n];
}

function fibonacciByRecursion(n) { // O(2^n)
    if (n < 2) {
        return n;
    }
    return fibonacciByRecursion(n - 1) + fibonacciByRecursion(n - 2);
}

console.log(fibonacciByIteration(5));
console.log(fibonacciByRecursion(5));