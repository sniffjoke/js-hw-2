// let fruits = ['apple', 'banana', 'orange'];
//
// let newFruits = fruits.push('peach')
//
// console.log(newFruits)
// console.log(fruits)

// const users = [
//     {
//         id: 1,
//         name: 'Bob',
//         isStudent: true,
//     },
//     {
//         id: 2,
//         name: 'Alex',
//         isStudent: true,
//     },
//     {
//         id: 3,
//         name: 'Ann',
//         isStudent: true,
//     },
//     {
//         id: 4,
//         name: 'Donald',
//         isStudent: false,
//     }
// ]
//
// const lastUser = users.pop()
//
// console.log(lastUser)
// console.log(users)

// const users = [
//     {
//         id: 1,
//         name: 'Bob',
//         isStudent: true,
//     },
//     {
//         id: 2,
//         name: 'Alex',
//         isStudent: true,
//     },
//     {
//         id: 3,
//         name: 'Ann',
//         isStudent: true,
//     },
//     {
//         id: 4,
//         name: 'Donald',
//         isStudent: false,
//     },
// ];
//
// const firstUser = users.shift()
// console.log(firstUser)
// console.log(users)

// const users = [
//     {
//         id: 1,
//         name: 'Bob',
//         isStudent: true,
//     },
//     {
//         id: 2,
//         name: 'Alex',
//         isStudent: true,
//     },
//     {
//         id: 3,
//         name: 'Ann',
//         isStudent: true,
//     },
//     {
//         id: 4,
//         name: 'Donald',
//         isStudent: false,
//     },
// ];
//
// users.unshift({
//     id: 0,
//     name: 'TestName',
//     isStudent: false,
// },)
//
// console.log(users)

// const str = 'JavaScript is awesome'
// console.log(str.split(' ').reverse().join(' '))

// const mergeArrays = (arrOne, arrTwo) => {
//     return arrOne.concat(arrTwo)
// }
// console.log(mergeArrays([1, 2, 3], [4, 5, 6]));
// console.log(mergeArrays(['apple', 'banana'], ['orange', 'kiwi']));
//
// const flattenArray = (arr) => {
//     return arr.flat(Infinity)
// }
// console.log(flattenArray([1, [2, 3], [[4], [5, 6]]]))
// console.log(flattenArray([1, [2, [3, [4, [5]]]]]))

// const arr = [10, 20, 30, 40, 50]
//
// function great25 (arr) {
//     return arr.find(x => x>25)
// }
//
// console.log(great25(arr))
//
// const fruits = ["яблоко", "банан", "апельсин", "киви"]
//
// function startsWith (arr) {
//     return arr.find(x => x[0] === 'а')
// }
//
// console.log(startsWith(fruits))

// const arr = [1, 2, 3, 4, 5];
// function incle(arr) {
//     return arr.includes(3)
// }
//
// console.log(incle(arr))

// const arr = ["яблоко", "банан", "апельсин", "киви"];
// function incle(arr) {
//     return arr.includes('Виноград')
// }
//
// console.log(incle(arr))

// const numbers = [1, 2, 3, 4, 5];
// const fruits = ['apple', 'banana', 'orange', 'kiwi'];
//
// function checkElement(arr, x) {
//     return arr.includes(x)
// }
// console.log(checkElement(numbers, 3));
// console.log(checkElement(fruits, 'grape'));

// const arrOne = [10, 20, 30, 40, 50];
// const arrTwo = [5, 15, 25, 35, 45];
//
// function filterGreaterThan (arr, x) {
//     return arr.filter(it => it > x);
// }
//
// console.log(filterGreaterThan(arrOne, 25))
// console.log(filterGreaterThan(arrTwo, 20))

// let people = [
//     { name: 'John', age: 30 },
//     { name: 'Alice', age: 25 },
//     { name: 'Bob', age: 35 },
// ];
//
// function sortAlphabeticallyByProperty (arr, x) {
//     return arr.sort((a, b) => a[x].localeCompare(b[x]));
// }
//
// console.log(sortAlphabeticallyByProperty(people, 'name'))
