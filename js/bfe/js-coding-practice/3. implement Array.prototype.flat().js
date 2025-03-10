
/**
 * 
 * @param {*} arr Input array to be flatten 
 * @param {*} depth level till which the array needs to be flattend
 * @returns flattend array
 * -------------------------------------
 * POINTS TO REMEMBER WHILE SOLVING THIS
 * -------------------------------------
 * Be extra carerful while handling empty slot cases
 * Empty slots should be skipped while doing the flatting - therefore use forEach to avoid itterating empty slots;
 * 
 */

function flat(arr, depth = 1) {
    const res = [];
    arr.forEach((el) => {
        if (Array.isArray(el) && depth > 0) {
            res.push(...flat(el, depth - 1))
        } else {
            res.push(el);
        }
    })
    return res;
}




// [1, 2, undefined, 3, 4, 5, 6, 7, 8, 9, 10]

// [1, 2, undefined, 3, 4, undefined, undefined, 5, 6, 7, 8, 9, 10]
const arr = [1, 2]
arr[4] = undefined,
    arr[5] = [3, 4]
arr[5][4] = [5, 6, [7, 8, [9, 10]]]
console.log(flat(arr, Infinity))
// expect(flat(arr, Infinity))
//     .toEqual([1, 2, undefined, 3, 4, 5, 6, 7, 8, 9, 10]);
/*
There is already Array.prototype.flat() in JavaScript (ES2019), which reduces the nesting of Array. Please implement your own.

const arr = [1, [2], [3, [4]]];
flat(arr)
// [1, 2, 3, [4]]
flat(arr, 1)
// [1, 2, 3, [4]]
flat(arr, 2)
// [1, 2, 3, 4]
follow up

Are you able to solve it both recursively and iteratively? How do you handle sparse array?
*/