let calcSlowFib = 0;
let calcFastFib = 0;

function slowFib(n) {
    calcSlowFib++;
    if (n < 2) {
        return n;
    }
    return slowFib(n - 1) + slowFib(n - 2);
}


function memoizedFibonacci() {
    let cache = {};
    return function fib(n) {
        calcFastFib++;
        if (n in cache) {
            return cache[n];
        }
        if (n < 2) {
            cache[n] = n;
        } else {
            cache[n] = fib(n - 1) + fib(n - 2);
        }
        return cache[n];
    }
}

const fasterFib = memoizedFibonacci();
console.log(slowFib(20));
console.log(fasterFib(20));
console.log('calcFastFib:', calcFastFib);
console.log('calcSlowFib:', calcSlowFib);