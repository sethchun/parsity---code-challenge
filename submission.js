const findSum = function(array) {
    let sum = array.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    });
    console.log(sum);
};
  
const findFrequency = function(array) {
    // DNF
};
  
const isPalindrome = function(str) {
    let length = str.length - 1;
    let palindrome = '';
    for (let i = length; i >= 0; i--) {
        palindrome += str[i];
    }
    if (palindrome === str) {
        return true;
    } else {
        return false;
    }
};
  
const largestPair = function(array) {
    let products = [];
    for (i = 0; i < array.length; i++) {
        let num1 = array[i];
        let num2 = array[i + 1];
        let product = num1 * num2;
        if (product) {
            products.push(product);
        }
    }
    let largestProduct = Math.max(...products);
    return largestProduct;
};
  
const removeParenth = function(str) {
    let startIn = 0;
    let endIn = 1;
    let toBeRemoved = '';
    for (let i = 0; i < str.length; i++) {
       if (str[i] === '(') {
           startIn += i;
       }
       if (str[i] === ')') {
           endIn += i;
       }
    }
    toBeRemoved += str.substring(startIn, endIn);
    console.log(str.replace(toBeRemoved, ''));
};
  
const scoreScrabble = function(str) {
    const scoreTable = {
        a: 1,
        b: 3,
        c: 3,
        d: 2,
        e: 1,
        f: 4,
        g: 2,
        h: 4,
        i: 1,
        j: 8,
        k: 5,
        l: 1,
        m: 3,
        n: 1,
        o: 1,
        p: 3,
        q: 10,
        r: 1,
        s: 1,
        t: 1,
        u: 1,
        v: 4,
        w: 4,
        x: 8,
        y: 4,
        z: 10
    };
    let score = 0;
    for (let i = 0; i < str.length; i++) {
        for (var key in scoreTable) {
            if (key === str[i]){
                score += scoreTable[key];
            }
        }
    }
    console.log(score);
};
