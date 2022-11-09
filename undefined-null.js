/*
1. variable value not assigned
2. function but don't write return anything
3. just wrot return but didn't return anything
4. parameter that isn't passed
5. property that doesn't exist in an object
6. accessing array element out of range
7. accessing delete array elements
8. explicitly set value to undefined
*/

let first;
// console.log(first);

function second(x, y) {
    const sum = x + y;
}
const result = second(3, 13);
// console.log(result);


function add(a, b) {
    const sum = a + b;

    if (b < 10) {
        return;
    }
    const fun = a * b;
    return sum;
}

const fourth = add(2, 7);
// console.log(fourth);

function double(a, b) {
    const result = a * b;
    // console.log(b);
    return result;
}
double(81);

const fifth = { name: 'nizam', age: '14', location: 'Noakhali' };
// console.log(fifth.phone);

const sexth = [52, 33, 34, 35];
// console.log(sexth[4])
delete sexth[2];
// console.log(sexth[2]);


const secenth = undefined;
// console.log(secenth);


const myObj = { name: 'samad', profession: null, }