const letters = ['a', 'd', 'z', 'e', 'r', 'b'];
const basket = [2, 65, 34, 2, 1, 7, 8];

// js converts numbers to strings then sort
console.log(basket.sort());

console.log('2'.charCodeAt(0));
console.log('65'.charCodeAt(0));
console.log('34'.charCodeAt(0));
console.log('7'.charCodeAt(0));

// correct number sorts
console.log(basket.sort(function (a, b) {
    return a - b;
}));