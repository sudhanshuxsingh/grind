const curry = (fn) => {
    return function curriedFn(...args) {
        if (args.length >= fn.length) {
            return fn.call(this, ...args);
        }
        return curriedFn.bind(this, ...args);
    }
}
const join = (a, b, c) => {
    return `${a}_${b}_${c}`
}
const curriedJoin = curry(join)
console.log(curriedJoin(1, 2, 3))
console.log(curriedJoin(1)(2, 3))
console.log(curriedJoin(1, 2)(3))


/**
 Currying is a useful technique used in JavaScript applications.

Please implement a curry() function, which accepts a function and return a curried one.

Here is an example

const join = (a, b, c) => {
   return `${a}_${b}_${c}`
}
const curriedJoin = curry(join)
curriedJoin(1, 2, 3) // '1_2_3'
curriedJoin(1)(2, 3) // '1_2_3'
curriedJoin(1, 2)(3) // '1_2_3'

more to read

https://javascript.info/currying-partials

https://lodash.com/docs/4.17.15#curry
 */