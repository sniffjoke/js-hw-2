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

// let numbers = [5, 2, 8, 1, 4];
// const sortDescending = (arr) => {
//     return arr.sort((a, b) => b - a);
// }
// console.log(sortDescending(numbers))

// let data = [
//     { value: 1, name: 'Option 1' },
//     { value: 2, name: 'Option 2' },
//     { value: 3, name: 'Option 3' },
// ]
//
// const formattedData = data.map((item, i) => {
//     return item[i] = {value: item.value, label: item.name}
// })
//
// console.log(formattedData)

// let products = [
//     { id: 1, name: 'Apple', price: 1.99 },
//     { id: 2, name: 'Banana', price: 0.99 },
//     { id: 3, name: 'Orange', price: 2.49 },
// ];
//
// const productsWithDiscount = products.map((item, i) => {
//     return item[i] = {...item, discountPrice: item.price * 0.9}
// })
//
// console.log(productsWithDiscount)

// const word = 'level'
//
// console.log(word.split('').reverse().join(''))

// const isPalindrome = (word) => {
//     let returnWord = word.split('').reverse().join('')
//     return returnWord === word
// }
//
// console.log(isPalindrome('level'))
// console.log(isPalindrome('racecar'))
// console.log(isPalindrome('hello'))

// let arr = [1, 1, 5, 6, 7, 8, 9, 9, 3, 4, 0, 19];

// const removeDuplicates = arr => {
//     return arr.filter((item, index, array) => array.indexOf(item) !== index)
// }

// console.log(removeDuplicates(arr))

const persons = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 35 },
]

const sortByProperty = (arr, property) => {
    return arr.sort((a, b) => a[property] - b[property])
}

console.log(sortByProperty(persons))
