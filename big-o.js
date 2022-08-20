// To calc the space complexity of a function, we don't care about the input size
// we care about what additional spaces will the function create?

function heyy(n) {
    for (let i = 0; i < n.length; i++) {
        console.log('hey');
    }
}

heyy([1, 2, 3, 4, 5]); // O(1)

function arrayOFHiNTimes(n) {
    let hiArray = [];
    for (let i = 0; i < n; i++) {
        hiArray[i] = 'hi';
    }
    return hiArray;
}

arrayOFHiNTimes(6); // O(n)