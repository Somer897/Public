//ДЛЯ РЕШЕНИЯ ИСПОЛЬЗУЕМ ДВА СПОСОБА 1 - ЦИКЛЫ 2 - МЕТОДЫ МАССИВОВ

// task 1
// function getIntervalArray(start, end) {
//     let arr = []
//     for (let i = start; i <= end; i++) {
//         arr.push(i)
//     }
//     return arr
// }

// console.log(getIntervalArray(1, 5))
// console.log(getIntervalArray(-2, 2))
// console.log(getIntervalArray(0, 100))
// console.log(getIntervalArray(3, 3))

// function getIntervalArray2(start, end){
//     return Array.from({length: end - start + 1}, (val, index) => start + index)
// }

// console.log(getIntervalArray2(1, 5))
// console.log(getIntervalArray2(-2, 2))
// console.log(getIntervalArray2(0, 100))
// console.log(getIntervalArray2(3, 3))

// task 2
// function sumArrays(arr1, arr2) {
//     let arr = []
//     for (let i = 0; i < arr1.length || i < arr2.length; i++) {
//         if (arr1[i] == undefined) { 
//             arr.push(arr2[i])
//         }
//         else if (arr2[i] == undefined){
//             arr.push(arr1[i])
//         }
//         else{
//             let val5 = arr1[i] + arr2[i]
//             arr.push(val5)
//         }
//     }
//     return arr
// }


// console.log(sumArrays([1, 2, 3], [4, 5, 6]))
// console.log(sumArrays([10, 20, 30], [5, 10, 15]))
// console.log(sumArrays([-1, 0, 1], [1, 2, 3, 4]))

// function sumArrays2(arr1, arr2) {
//     let res = Array.from({length: Math.max(arr1.length, arr2.length)}, (val, index) => {
//         return (arr1[index] || 0) + (arr2[index] || 0)
//     })
//     return res
// }

// console.log(sumArrays2([1, 2, 3], [4, 5, 6]))
// console.log(sumArrays2([10, 20, 30], [5, 10, 15]))
// console.log(sumArrays2([-1, 0, 1], [1, 2, 3, 4]))

// task 3
// function findElement(arr, value) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] == value){
//             return i
//         }
//     }
//     return -1
// }

// console.log(findElement(['Ace', 10, true], 10))
// console.log(findElement(['Array', 'Number', 'string'], 'Date'))
// console.log(findElement([0, 1, 2, 3, 4, 5], 5))

// function findElement2(arr, value){
//     return arr.indexOf(value)
// }

// console.log(findElement2(['Ace', 10, true], 10))
// console.log(findElement2(['Array', 'Number', 'string'], 'Date'))
// console.log(findElement2([0, 1, 2, 3, 4, 5], 5))

// task 4
// function findAllOccurrences(arr, item) {
//     let num = 0
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === item){
//              num += 1
//         }
//     }
//     return num
// }

// console.log(findAllOccurrences([ 0, 0, 1, 1, 1, 2 ], 1))
// console.log(findAllOccurrences([ 1, 2, 3, 4, 5 ], 0))
// console.log(findAllOccurrences([ 'a','b','c','c' ], 'c'))
// console.log(findAllOccurrences([ null, undefined, null ], null))
// console.log(findAllOccurrences([ true, 0, 1, 'true' ], true))

// function findAllOccurrences2(arr, item){
//     return arr.filter((current) => current === item).length 
// }

// console.log(findAllOccurrences2([ 0, 0, 1, 1, 1, 2 ], 1))
// console.log(findAllOccurrences2([ 1, 2, 3, 4, 5 ], 0))
// console.log(findAllOccurrences2([ 'a','b','c','c' ], 'c'))
// console.log(findAllOccurrences2([ null, undefined, null ], null))
// console.log(findAllOccurrences2([ true, 0, 1, 'true' ], true))

// task 6
// function removeFalsyValues(arr) {
//     let falsy = [false, null, 0, "", undefined, NaN]
//     for (let i = arr.length - 1; i >= 0; i--) {
//         for (let j = 0; j < falsy.length; j++) {
//             if ((Number.isNaN(arr[i]) && Number.isNaN(falsy[j])) || arr[i] === falsy[j])  {
//                 arr.splice(i, 1)
//                 break
//             } 
//         }
//     }
//     return arr
// }

// console.log(removeFalsyValues([ 0, false, 'cat', NaN, true, '' ]))
// console.log(removeFalsyValues([ 1, 2, 3, 4, 5, 'false' ]))
// console.log(removeFalsyValues([ false, 0, NaN, '', undefined ]))

// function removeFalsyValues2(arr){
//     let falsy = [false, null, 0, "", undefined, NaN]
//     return arr.filter(current => !falsy.includes(current))
// }

// console.log(removeFalsyValues2([ 0, false, 'cat', NaN, true, '' ]))
// console.log(removeFalsyValues2([ 1, 2, 3, 4, 5, 'false' ]))
// console.log(removeFalsyValues2([ false, 0, NaN, '', undefined ]))

// task 7
// function getStringsLength(arr) {
//     let new_arr = []
//     for (let i = 0; i < arr.length; i++) {
//         new_arr.push(arr[i].length)
//     }
//     return new_arr
// }

// console.log(getStringsLength([ '', 'a', 'bc', 'def', 'ghij' ]))
// console.log(getStringsLength([ 'angular', 'react', 'ember' ]))

// function getStringLength2(arr){
//     return arr.map(current => current.length)
// }

// console.log(getStringLength2([ '', 'a', 'bc', 'def', 'ghij' ]))
// console.log(getStringLength2([ 'angular', 'react', 'ember' ]))


// task 8
// function getAverage(arr) {
//     if (arr.length == 0) {
//         return 0
//     }
//     let len = arr.length
//     let num = 0
//     for (let i = 0; i < len; i++) {
//         num += arr[i]
//     }
//     return num / len
// }

// console.log(getAverage([]))
// console.log(getAverage([ 1, 2, 3 ]))
// console.log(getAverage([ -1, 1, -1, 1 ]))
// console.log(getAverage([ 1, 10, 100, 1000 ]))
// console.log(getAverage([ 2, 3, 3 ]))

// function getAverage2(arr) {
//         if (arr.length == 0) {
//             return 0
//         }
//     let new_arr = arr.reduce((curr, num) => curr + num, 0)
//     return new_arr / arr.length
// }

// console.log(getAverage2([]))
// console.log(getAverage2([ 1, 2, 3 ]))
// console.log(getAverage2([ -1, 1, -1, 1 ]))
// console.log(getAverage2([ 1, 10, 100, 1000 ]))
// console.log(getAverage2([ 2, 3, 3 ]))

// task 9
// function isSameLength(arr) {
//     for (let i = 0; i < arr.length-1; i++) {
//         if (arr[i].length != arr[i+1].length){
//             return false
//         }
//     }
//     return true
// }

// console.log(isSameLength(['orange', 'banana', 'cherry']))
// console.log(isSameLength(['cat', 'dog', 'elephant']))

// function isSameLength2(arr){
//     return arr.every((curr) => curr.length == arr[0].length)
// }

// console.log(isSameLength2(['orange', 'banana', 'cherry']))
// console.log(isSameLength2(['cat', 'dog', 'elephant']))

// task 10
// function isValueEqualsIndex(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] == i) {
//             return true
//         }
//     }
//     return false
// }

// console.log(isValueEqualsIndex([0, 1, 2, 3, 4, 5]))
// console.log(isValueEqualsIndex([2, 1, 0, 4, 5]))
// console.log(isValueEqualsIndex([10, 20, 30, 40, 50]))

// function isValueEqualsIndex2(arr){
//     return arr.some((curr, i) => curr == i)
// }

// console.log(isValueEqualsIndex2([0, 1, 2, 3, 4, 5]))
// console.log(isValueEqualsIndex2([2, 1, 0, 4, 5]))
// console.log(isValueEqualsIndex2([10, 20, 30, 40, 50]))

// task 11
// function insertItem(arr, item, index) {
//     let res = []
//     for (let i = 0; i <= arr.length; i++) {
//         if (i < index){
//             res.push(arr[i])
//         }
//         else if (i == index){
//             res.push(item)
//         }
//         else{
//             res.push(arr[i - 1])
//         }
//     }
//     return res
// }

// console.log(insertItem([ 1, 3, 4, 5 ], 2, 1))
// console.log(insertItem([ 1, 'b', 'c'], 'x', 0))

// function insertItem2(arr, item, index){
//     arr.splice(index, 0, item)
//     return arr
// }

// console.log(insertItem2([ 1, 3, 4, 5 ], 2, 1))
// console.log(insertItem2([ 1, 'b', 'c'], 'x', 0))

// task 12
// function getHead(arr, n) {
//     let new_arr = []
//         for (let i = 0; i < n; i++) {
//             new_arr.push(arr[i])
//         }
//     return new_arr
// }

// console.log(getHead([ 1, 3, 4, 5 ], 2))
// console.log(getHead([ 'a', 'b', 'c', 'd'], 3))
// console.log(getHead([ 'a', 'b', 'c', 'd'], 0))

// function getHead2(arr, n){
//     if (n == 0) {
//         return '[]'
//     }
//     return arr.slice(0, n)
// }

// console.log(getHead2([ 1, 3, 4, 5 ], 2))
// console.log(getHead2([ 'a', 'b', 'c', 'd'], 3))
// console.log(getHead2([ 'a', 'b', 'c', 'd'], 0))

// task 13
// function getTail(arr, n) {
//     let new_arr = []
//     for (let i = arr.length - n; i <= arr.length-1; i++) {
//         new_arr.push(arr[i])
//     }
//     return new_arr
// }

// console.log(getTail([ 1, 3, 4, 5 ], 2))
// console.log(getTail([ 'a', 'b', 'c', 'd'], 3))
// console.log(getTail([ 'a', 'b', 'c', 'd'], 0))

// function getTail2(arr, n){
//     if (n == 0){
//         return '[]'
//     }
//     return arr.slice(-n)
// }

// console.log(getTail2([ 1, 3, 4, 5 ], 2))
// console.log(getTail2([ 'a', 'b', 'c', 'd'], 3))
// console.log(getTail2([ 'a', 'b', 'c', 'd'], 0))

// task 14
// function doubleArray(arr) {
//     let res = []
//     for (let i = 0; i < arr.length * 2; i++) {
//         res.push(arr[i % arr.length])
//     }
//     return res
// }

// console.log(doubleArray(['Ace', 10, true]))
// console.log(doubleArray([0, 1, 2, 3, 4, 5]))
// console.log(doubleArray([]))

// function doubleArray2(arr){
//     return arr.concat(arr)
// }

// console.log(doubleArray2(['Ace', 10, true]))
// console.log(doubleArray2([0, 1, 2, 3, 4, 5]))
// console.log(doubleArray2([]))

// task 15
// function toStringList(arr) {
//     let str = ''
//     for (let i = 0; i < arr.length; i++) {
//         if (i < arr.length - 1) {
//            str += arr[i] + ',' 
//         }
//         else {
//             str += arr[i]
//         }
//     }
//     return str
// }

// console.log(toStringList([0, false, 'cat', NaN, true, '']))
// console.log(toStringList([1, 2, 3, 4, 5]))
// console.log(toStringList(['rock', 'paper', 'scissors']))

// function toStringList2(arr){
//     return String(arr)
// }

// console.log(toStringList2([0, false, 'cat', NaN, true, '']))
// console.log(toStringList2([1, 2, 3, 4, 5]))
// console.log(toStringList2(['rock', 'paper', 'scissors']))

// task 16
// function distinct(arr) {
//     let new_arr = []
//     for (let i = 0; i < arr.length; i++) {
//         if (arr.indexOf(arr[i]) == i) {
//             new_arr.push(arr[i])
//         }
//     }
//     return new_arr
// }

// console.log(distinct([ 1, 2, 3, 3, 2, 1 ]))
// console.log(distinct([ 'a', 'a', 'a', 'a' ]))
// console.log(distinct([ 1, 1, 2, 2, 3, 3, 4, 4]))
// console.log(distinct([]))

// function distinct2(arr){
//     return arr.filter((item, index) => arr.indexOf(item) == index)
// }

// console.log(distinct2([ 1, 2, 3, 3, 2, 1 ]))
// console.log(distinct2([ 'a', 'a', 'a', 'a' ]))
// console.log(distinct2([ 1, 1, 2, 2, 3, 3, 4, 4]))
// console.log(distinct2([]))

/**
 * Creates an n-dimensional array and fills it with zeros.
 *
 * @param {number} n - Depth of outter array (n > 0).
 * @param {number} size - Length of all arrays (size > 0).
 * @return {any[]} - The n-dimensional array filled with zeros.
 *
 * @example
 *    createNDimensionalArray(2, 3) => [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
 *    createNDimensionalArray(3, 2) => [[[0, 0], [0, 0]], [[0, 0], [0, 0]]]
 *    createNDimensionalArray(4, 2) => [[[[0, 0], [0, 0]], [[0, 0], [0, 0]]], [[[0, 0], [0, 0]], [[0, 0], [0, 0]]]]
 *    createNDimensionalArray(1, 1) => [0]
 */
function createNDimensionalArray(n, size) {
    if (condition) {
        
    }
}

/**
 * Flattens a nested array into a single-level array.
 *
 * @param {any[]} nestedArray - The nested array to be flattened.
 * @return {any[]} - A single-level array.
 *
 * @example
 *    flattenArray([1, [2, [3, 4], 5], 6]) => [1, 2, 3, 4, 5, 6]
 *    flattenArray(['a', ['b', ['c', 'd'], 'e'], 'f']) => ['a', 'b', 'c', 'd', 'e', 'f']
 *    flattenArray([1, 2, 3, 4]) => [1, 2, 3, 4]
 */
function flattenArray() {
  
}

/**
 * Projects each element of the specified array to a sequence
 * and flattens the resulting sequences into one array.
 *
 * @param {any[]} arr - The input array
 * @param {Function} childrenSelector - A transform function to apply to each element
 *                                     that returns an array of children
 * @return {any[]} - The flatted array
 *
 * @example
 *   selectMany([[1, 2], [3, 4], [5, 6]], (x) => x) =>   [ 1, 2, 3, 4, 5, 6 ]
 *   selectMany(['one','two','three'], (x) => x.split('')) =>   ['o','n','e','t','w','o','t','h','r','e','e']
 */
function selectMany() {
  
}

/**
 * Every month, you record your income and expenses.
 * Expenses may be greater than income.
 * You need to calculate the final balance.
 *
 * @param {number[][]} arr - The input array [[income, expence], ...]
 * @return {number} - The final balance.
 *
 * @example
 *   calculateBalance([ [ 10, 8 ], [ 5, 1 ] ]) => (10 - 8) + (5 - 1) = 2 + 4 = 6
 *   calculateBalance([ [ 10, 8 ], [ 1, 5 ] ])  => (10 - 8) + (1 - 5) = 2 + -4 = -2
 *   calculateBalance([]) => 0
 */
function calculateBalance() {
  
}

/**
 * Breaks an array into chunks of the specified size.
 *
 * @param {any[]} arr - The array to be broken into chunks.
 * @param {number} chunkSize - The size of each chunk.
 * @return {any[]} - An array of chunks.
 *
 * @example
 *    createChunks([1, 2, 3, 4, 5, 6, 7], 3) => [[1, 2, 3], [4, 5, 6], [7]]
 *    createChunks(['a', 'b', 'c', 'd', 'e'], 2) => [['a', 'b'], ['c', 'd'], ['e']]
 *    createChunks([10, 20, 30, 40, 50], 1) => [[10], [20], [30], [40], [50]]
 */
function createChunks() {
  
}

/**
 * Generates an array of odd numbers of the specified length.
 *
 * @param {number} len - The length of an array.
 * @return {number[]} - An array of odd numbers.
 *
 * @example
 *    generateOdds(0) => []
 *    generateOdds(1) => [ 1 ]
 *    generateOdds(2) => [ 1, 3 ]
 *    generateOdds(5) => [ 1, 3, 5, 7, 9 ]
 */
function generateOdds() {
  
}

/**
 * Returns an element from the multidimensional array by the specified indices.
 *
 * @param {any[]} arr - The input multidimensional array
 * @param {number[]} indices - The array of indices
 * @return {any} - An element from the array
 *
 * @example
 *   getElementByIndices([[1, 2], [3, 4], [5, 6]], [0,0]) => 1        (arr[0][0])
 *   getElementByIndices(['one','two','three'], [2]) => 'three'  (arr[2])
 *   getElementByIndices([[[ 1, 2, 3]]], [ 0, 0, 1 ]) => 2        (arr[0][0][1])
 */
function getElementByIndices() {
  
}

/**
 * Returns the number of all falsy values in the specified array.
 *
 * @param {any[]} arr - The input array.
 * @return {number} - The number of all falsy values.
 *
 * @example
 *  getFalsyValuesCount([]) => 0
 *  getFalsyValuesCount([ 1, '', 3 ]) => 1
 *  getFalsyValuesCount([ -1, 'false', null, 0 ]) => 2
 *  getFalsyValuesCount([ null, undefined, NaN, false, 0, '' ]) => 6
 */
function getFalsyValuesCount() {
  
}

/**
 * Creates an identity matrix of the specified size.
 *
 * @param {number} n - A size of the matrix.
 * @return {number[][]} - An identity matrix.
 *
 * @example
 *     getIdentityMatrix(1)  => [[1]]
 *
 *     getIdentityMatrix(2) => [[1,0],
 *                             [0,1]]
 *
 *                              [[1,0,0,0,0],
 *                              [0,1,0,0,0],
 *     getIdentityMatrix(5) =>  [0,0,1,0,0],
 *                              [0,0,0,1,0],
 *                              [0,0,0,0,1]]
 */
function getIdentityMatrix() {
  
}

/**
 * Returns an array containing indices of odd elements in the input array.
 *
 * @param {number[]} numbers - The array of numbers.
 * @return {number[]} - An array containing indices of odd elements.
 *
 * @example
 *    getIndicesOfOddNumbers([1, 2, 3, 4, 5]) => [0, 2, 4]
 *    getIndicesOfOddNumbers([2, 4, 6, 8, 10]) => []
 *    getIndicesOfOddNumbers([11, 22, 33, 44, 55]) => [0, 2, 4]
 */
function getIndicesOfOddNumbers() {
  
}

/**
 * Returns the array of RGB Hex strings from the specified array of numbers.
 *
 * @param {number[]} arr - The input array.
 * @return {string[]} - The array of RGB Hex strings.
 *
 * @example
 *    getHexRGBValues([ 0, 255, 16777215]) => [ '#000000', '#0000FF', '#FFFFFF' ]
 *    getHexRGBValues([]) => []
 */
function getHexRGBValues() {
  
}

/**
 * Returns the n largest values from the specified array
 *
 * @param {number[]} arr - The input array
 * @param {number} n - Number of maximum values.
 * @return {number[]} - n largest values.
 *
 * @example
 *   getMaxItems([], 5) => []
 *   getMaxItems([ 1, 2 ], 1) => [ 2]
 *   getMaxItems([ 2, 3, 1 ], 2) => [ 3, 2]
 *   getMaxItems([ 10, 2, 7, 5, 3, -5 ], 3) => [ 10, 7, 5 ]
 *   getMaxItems([ 10, 10, 10, 10 ], 3) => [ 10, 10, 10 ]
 */
function getMaxItems() {
  
}

/**
 * Finds and returns an array containing only the common elements found in two arrays.
 *
 * @param {any[]} arr1 - The first array.
 * @param {any[]} arr2 - The second array.
 * @return {any[]} - An array containing common elements.
 *
 * @example
 *    findCommonElements([1, 2, 3], [2, 3, 4]) => [ 2, 3 ]
 *    findCommonElements(['a', 'b', 'c'], ['b', 'c', 'd']) => [ 'b', 'c' ]
 *    findCommonElements([1, 2, 3], ['a', 'b', 'c']) => []
 */
function findCommonElements() {
  
}

/**
 * Finds the length of the longest increasing and uninterrupted subsequence of a given array of integers.
 *
 * @param {number[]} nums - The array of integers.
 * @return {number} - The length of the longest increasing subsequence.
 *
 * @example
 *    findLongestIncreasingSubsequence([10, 22, 9, 33, 21, 50, 41, 60, 80]) => longest is [41, 60, 80] => 3
 *    findLongestIncreasingSubsequence([3, 10, 2, 1, 20]) => longest is [3, 10] and [1, 20] => 2
 *    findLongestIncreasingSubsequence([50, 3, 10, 7, 40, 80]) => longest is [7, 40, 80] => 3
 */
function findLongestIncreasingSubsequence() {
  
}

/**
 * Propagates every item in sequence its position times
 * Returns an array that consists of: one first item, two second items, three third items etc.
 *
 * @param {any[]} arr - The input array
 * @return {any[]}
 *
 * @example :
 *  propagateItemsByPositionIndex([]) => []
 *  propagateItemsByPositionIndex([ 1 ]) => [ 1 ]
 *  propagateItemsByPositionIndex([ 'a', 'b' ]) => [ 'a', 'b','b' ]
 *  propagateItemsByPositionIndex([ 'a', 'b', 'c', null ]) => [ 'a', 'b', 'b', 'c', 'c', 'c',  null, null, null, null ]
 *  propagateItemsByPositionIndex([ 1,2,3,4,5 ]) => [ 1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5 ]
 */
function propagateItemsByPositionIndex() {
  
}

/**
 * Shifts an array by n positions. If n is negative, the array is shifted to the left;
 * if positive, it is shifted to the right.
 *
 * @param {any[]} arr - The array to be shifted.
 * @param {number} n - The number of positions to shift the array elements.
 * @return {any[]} - The shifted array.
 *
 * @example
 *    shiftArray([1, 2, 3, 4, 5], 2) => [4, 5, 1, 2, 3]
 *    shiftArray(['a', 'b', 'c', 'd'], -1) => ['b', 'c', 'd', 'a']
 *    shiftArray([10, 20, 30, 40, 50], -3) => [40, 50, 10, 20, 30]
 */
function shiftArray() {
  
}

/**
 * Sorts digit names.
 *
 * @param {string[]} arr - The input array.
 * @return {string[]} - Sorted array.
 *
 * @example
 *   sortDigitNamesByNumericOrder([]) => []
 *   sortDigitNamesByNumericOrder([ 'nine','one' ]) => [ 'one', 'nine' ]
 *   sortDigitNamesByNumericOrder([ 'one','two','three' ]) => [ 'one','two', 'three' ]
 *   sortDigitNamesByNumericOrder([ 'nine','eight','nine','eight' ]) => [ 'eight','eight','nine','nine']
 *   sortDigitNamesByNumericOrder([ 'one','one','one','zero' ]) => [ 'zero','one','one','one' ]
 */
function sortDigitNamesByNumericOrder() {
  
}

/**
 * Swaps the head and tail of the specified array:
 * the head (first half) of array move to the end, the tail (last half) move to the start.
 * The middle element (if exists) leave on the same position. *
 *
 * @param {any[]} arr - The input array.
 * @return {any[]} - The swapped array.
 *
 * @example
 *   [ 1, 2, 3, 4, 5 ]   =>  [ 4, 5, 3, 1, 2 ]
 *    \----/   \----/
 *     head     tail
 *
 *   swapHeadAndTail([ 1, 2 ]) => [ 2, 1 ]
 *   swapHeadAndTail([ 1, 2, 3, 4, 5, 6, 7, 8 ]) =>  [ 5, 6, 7, 8, 1, 2, 3, 4 ]
 *   swapHeadAndTail([ 1 ]) => [ 1 ]
 *   swapHeadAndTail([]) => []
 *
 */
function swapHeadAndTail() {
  
}
