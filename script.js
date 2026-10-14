//ДЛЯ РЕШЕНИЯ ИСПОЛЬЗУЕМ ДВА СПОСОБА 1 - ЦИКЛЫ 2 - МЕТОДЫ МАССИВОВ
/**
 * Creates an array of integers from the specified start to end (inclusive).
 *
 * @param {number} start - The first number of an array.
 * @param {number} end - The last number of an array.
 * @return {number[]} - An array of integers.
 *
 * @example
 *    getIntervalArray(1, 5)  => [ 1, 2, 3, 4, 5 ]
 *    getIntervalArray(-2, 2)  => [ -2, -1, 0, 1, 2 ]
 *    getIntervalArray(0, 100) => [ 0, 1, 2, ..., 100 ]
 *    getIntervalArray(3, 3) => [ 3 ]
 */
function getIntervalArray1(num1, num2) {
    let list = []
    for (let i = 0; i <= num2 - num1; i++) {
        list.push(num1+i)
    }
    return list
}
function getIntervalArray2(num1, num2) {
    return Array.from({ length: num2 - num1 + 1 }, (_, index) => num1 + index);
}

/**
 * Returns a new array where each element is the sum of the corresponding elements
 * from two arrays. Arrays can have different lengths.
 *
 * @param {number[]} arr1 - The first array.
 * @param {number[]} arr2 - The second array.
 * @return {number[]} - An array containing the sum of corresponding elements.
 *
 * @example
 *    sumArrays([1, 2, 3], [4, 5, 6]) => [5, 7, 9]
 *    sumArrays([10, 20, 30], [5, 10, 15]) => [15, 30, 45]
 *    sumArrays([-1, 0, 1], [1, 2, 3, 4]) => [0, 2, 4, 4]
 */
function sumArrays1(list1, list2) {
    let list3 = []
    for (let i = 0; i < Math.max(list1.length, list2.length); i++) {
        list3.push((list1[i] || 0) + (list2[i] || 0))
    }
    return list3
}
function sumArrays2(list1, list2) {
    return Array.from({ length: Math.max(list1.length, list2.length) }, (_, index) => ((list1[index] || 0) + (list2[index] || 0)));
}

/**
 * Returns an index of the specified element in array or -1 if element is not found.
 *
 * @param {any[]} arr - The input array.
 * @param {any} value - Element to search.
 * @return {number} - An index of the specified element.
 *
 * @example
 *    findElement(['Ace', 10, true], 10) => 1
 *    findElement(['Array', 'Number', 'string'], 'Date') => -1
 *    findElement([0, 1, 2, 3, 4, 5], 5) => 5
 */
function findElement(array, element) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === element) {
            return i
    }}
    return -1
}
function findElement1(array, element) {
    return array.indexOf(element)
}

/**
 * Returns a number of all occurrences of the specified item in an array.
 *
 * @param {any[]} arr - The input array.
 * @param {any} item - Element to search.
 * @return {number} - Number of found items.
 *
 * @example
 *    findAllOccurrences([ 0, 0, 1, 1, 1, 2 ], 1) => 3
 *    findAllOccurrences([ 1, 2, 3, 4, 5 ], 0) => 0
 *    findAllOccurrences([ 'a','b','c','c' ], 'c') => 2
 *    findAllOccurrences([ null, undefined, null ], null) => 2
 *    findAllOccurrences([ true, 0, 1, 'true' ], true) => 1
 */
function findAllOccurrences(array, item) {
    let count = 0
    for (const element of array) {
        if (element === item) {
        count++
        }
    }
    return count
}
function findAllOccurrences1(array, item) {
    return array.reduce((count, current) => (current === item ? count + 1 : count), 0)
}

/**
 * Removes falsy values from the specified array.
 * Falsy values: false, null, 0, "", undefined, and NaN.
 *
 * @param {any[]} arr - The input array.
 * @return {any[]} - The array without falsy values.
 *
 * @example
 *    removeFalsyValues([ 0, false, 'cat', NaN, true, '' ]) => [ 'cat', true ]
 *    removeFalsyValues([ 1, 2, 3, 4, 5, 'false' ]) => [ 1, 2, 3, 4, 5, 'false' ]
 *    removeFalsyValues([ false, 0, NaN, '', undefined ]) => [ ]
 */
function removeFalsyValues(array) {
    const result = []
    for (const element of array) {
        if (element) {
        result.push(element)
        }
    }
    return result
}
function removeFalsyValues1(array) {
    return array.filter(Boolean)
}

/**
 * Returns an array containing the lengths of each string in a specified array of strings.
 *
 * @param {string[]} arr - The input array.
 * @return {number[]} - The array of string lengths.
 *
 * @example
 *    getStringsLength([ '', 'a', 'bc', 'def', 'ghij' ]) => [ 0, 1, 2, 3, 4 ]
 *    getStringsLength([ 'angular', 'react', 'ember' ]) => [ 7, 5, 5 ]
 */
function getStringsLength(array) {
    const lengths = []
    for (const str of array) {
        lengths.push(str.length)
    }
    return lengths
}
function getStringsLength1(array) {
    return array.map(str => str.length)
}
/**
 * Returns the average of all items in the specified array of numbers.
 * The result should be rounded to two decimal places.
 *
 * @param {number[]} arr - The input array
 * @return {number} - The average of all items
 *
 * @example
 *   getAverage([]) => 0
 *   getAverage([ 1, 2, 3 ]) => 2
 *   getAverage([ -1, 1, -1, 1 ]) => 0
 *   getAverage([ 1, 10, 100, 1000 ])  => 277,75
 *   getAverage([ 2, 3, 3 ])  => 2,67
 */
function getAverage(array) {
    let sum = 0
    for (const num of array) {
        sum += num
    }
    
    const average = sum / array.length
    return Number(average.toFixed(2))
}
function getAverage1(array) {
    const sum = array.reduce((acc, num) => acc + num, 0);
  
    return +(sum / array.length).toFixed(2);
}

/**
 * Checks if all strings in an array have the same length.
 *
 * @param {string[]} arr - The array of strings to be checked.
 * @return {boolean} - True if all strings have the same length, false otherwise.
 *
 * @example
 *    isSameLength(['orange', 'banana', 'cherry']) => true
 *    isSameLength(['cat', 'dog', 'elephant']) => false
 */
function isSameLength(array) {
    const targetLength = array[0].length

    for (let i = 1; i < array.length; i++) {
        if (array[i].length !== targetLength) {
        return false
        }
    }

    return true
}
function isSameLength1(array) {
    return array.every(str => str.length === array[0].length)
}
/**
 * Checks if there are elements in the array where the value is equal to its index.
 *
 * @param {number[]} arr - The array of elements to be checked.
 * @return {boolean} - True if there are elements with value equal to their index, false otherwise.
 *
 * @example
 *    isValueEqualsIndex([0, 1, 2, 3, 4]) => true
 *    isValueEqualsIndex([2, 1, 0, 4, 5]) => true
 *    isValueEqualsIndex([10, 20, 30, 40, 50]) => false
 */
function isValueEqualsIndex(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === i) {
        return true
        }
    }
    return false
}
function isValueEqualsIndex1(array) {
    return array.some((el, i) => el === i);
}
/**
 * Inserts the item into specified array at specified index.
 *
 * @param {any[]} arr - The input array.
 * @param {any} item - The item to insert.
 * @param {number} index - Specified index.
 * @return {any[]}
 *
 * @example
 *    insertItem([ 1, 3, 4, 5 ], 2, 1)  => [ 1, 2, 3, 4, 5 ]
 *    insertItem([ 1, 'b', 'c'], 'x', 0) => [ 'x', 1, 'b', 'c' ]
 */
function insertItem(array, item, index) {
    const targetIndex = index > array.length ? array.length : index;

    for (let i = array.length; i > targetIndex; i--) {
        array[i] = array[i - 1]
    }

    array[targetIndex] = item
    return array
}
function insertItem1(array, item, index) {
    array.splice(index, 0, item)
    return array
}
/**
 * Returns the n first items of the specified array.
 *
 * @param {any[]} arr - The input array.
 * @param {number} n - Number of items.
 * @return {any[]}
 *
 * @example
 *    getHead([ 1, 3, 4, 5 ], 2) => [ 1, 3 ]
 *    getHead([ 'a', 'b', 'c', 'd'], 3) => [ 'a', 'b', 'c' ]
 *    getHead([ 'a', 'b', 'c', 'd'], 0) => []
 */
function getHead(array, n) {
    const result = []
    
    for (let i = 0; i < n && i < array.length; i++) {
        result.push(array[i])
    }
    
    return result
}
function getHead1(array, n) {
    return array.slice(0, n)
}

/**
 * Returns the n last items of the specified array.
 *
 * @param {any[]} arr - The input array.
 * @param {number} n - Number of items.
 * @return {any[]}
 *
 * @example
 *    getTail([ 1, 3, 4, 5 ], 2) => [ 4, 5 ]
 *    getTail([ 'a', 'b', 'c', 'd'], 3) => [ 'b', 'c', 'd' ]
 *    getTail([ 'a', 'b', 'c', 'd'], 0) => []
 */
function getTail(array, n) {
    const result = []
    const startIndex = array.length - n < 0 ? 0 : array.length - n
    
    for (let i = startIndex; i < array.length; i++) {
        result.push(array[i])
    }
    
    return result
}
function getTail1(array, n) {
    return array.slice(-n)
}

/**
 * Returns the doubled array - elements of the specified array
 * are repeated twice using original order.
 *
 * @param {any[]} arr - The input array.
 * @return {any[]} - The doubled array.
 *
 * @example
 *    doubleArray(['Ace', 10, true])  => ['Ace', 10, true, 'Ace', 10, true]
 *    doubleArray([0, 1, 2, 3, 4, 5]) => [0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5]
 *    doubleArray([]) => []
 */
function doubleArray(array) {
    const result = []
    
    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < array.length; j++) {
        result.push(array[j])
        }
    }
    
    return result
}
function doubleArray1(array) {
    return array.concat(array)
}
/**
 * Concatenates all elements from specified array into single string with ',' delimiter.
 *
 * @param {any[]} arr - The input array.
 * @return {string} - The concatenated string.
 *
 * @example
 *    toStringList([0, false, 'cat', NaN, true, '']) => '0,false,cat,NaN,true,'
 *    toStringList([1, 2, 3, 4, 5]) => '1,2,3,4,5'
 *    toStringList(['rock', 'paper', 'scissors']) => 'rock,paper,scissors'
 */
function toStringList(array) {
    let result = ''
    
    for (let i = 0; i < array.length; i++) {
        result += array[i]
        if (i < array.length - 1) {
        result += ','
        }
    }
    
    return result
}

function toStringList1(array) {
    return array.join(',')
}
/**
 * Returns array containing only unique values from the specified array.
 *
 * @param {any[]} arr - The input array.
 * @return {any[]} - The array with unique values.
 *
 * @example
 *   distinct([ 1, 2, 3, 3, 2, 1 ]) => [ 1, 2, 3 ]
 *   distinct([ 'a', 'a', 'a', 'a' ])  => [ 'a' ]
 *   distinct([ 1, 1, 2, 2, 3, 3, 4, 4]) => [ 1, 2, 3, 4]
 *   distinct([]) => []
 */
function distinct(array) {
    const result = []
    
    for (const item of array) {
        if (!result.includes(item)) {
        result.push(item)
        }
    }
    
    return result
}
function distinct1(array) {
    return Array.from(new Set(array))
}
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
function createNDimensionalArray(depth, size) {
    function build(currentDepth) {
    if (currentDepth === 1) {
      const res = []
      for (let i = 0; i < size; i++) {
        res.push(0)
      }
      return res
    }
    
    const res = []
    for (let i = 0; i < size; i++) {
      res.push(build(currentDepth - 1))
    }
    return res
  }
  
  return build(depth)
}
function createNDimensionalArray1(depth, size) {
  function build(currentDepth) {
    if (currentDepth === 1) {
      return Array.from({ length: size }, () => 0)
    }
    
    return Array.from({ length: size }, () => build(currentDepth - 1))
  }
  
  return build(depth)
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
function flattenArray(nestedArray) {
    const result = []
  
    for (let i = 0; i < nestedArray.length; i++) {
        if (Array.isArray(nestedArray[i])) {
        result.push(...flattenArray(nestedArray[i]))
        } else {
        result.push(nestedArray[i])
        }
    }
  
    return result
}
function flattenArray1(nestedArray) {
    return nestedArray.flat(Infinity)
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
function selectMany(arr, childrenSelector) {
    const result = []
    
    for (const item of arr) {
        const children = childrenSelector(item)
        for (const child of children) {
        result.push(child)
        }
    }
    
    return result
}
function selectMany1(arr, childrenSelector) {
    return arr.flatMap(childrenSelector)
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
function calculateBalance(arr) {
    let balance = 0
    
    for (const month of arr) {
        balance += month[0] - month[1]
    }
    
    return balance
}
function calculateBalance1(arr) {
    return arr.reduce((balance, [income, expense]) => balance + (income - expense), 0)
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
function createChunks(arr, chunkSize) {
  if (chunkSize <= 0) return []
  
  const result = []
  
  for (let i = 0; i < arr.length; i += chunkSize) {
    result.push(arr.slice(i, i + chunkSize))
  }
  
  return result
}
function createChunks1(arr, chunkSize) {
    if (chunkSize <= 0) return []

    return Array.from(
        { length: Math.ceil(arr.length / chunkSize) },
        (_, index) => arr.slice(index * chunkSize, (index + 1) * chunkSize)
    )
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
function generateOdds(len) {
  if (len <= 0) return []

  const result = []

  for (let i = 0; i < len; i++) {
    result.push(i * 2 + 1)
  }

  return result
}
function generateOdds1(len) {
     return Array.from({ length: len }, (_, index) => index * 2 + 1)
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
function getElementByIndices(arr, indices) {
  let currentLevel = arr

  for (const index of indices) {
    if (currentLevel === undefined || currentLevel === null) return undefined
    currentLevel = currentLevel[index]
  }

  return currentLevel
}
function getElementByIndices1(arr, indices) {
    return indices.reduce((currentLevel, index) => currentLevel?.[index], arr)
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
function getFalsyValuesCount(arr) {
   let count = 0

  for (const item of arr) {
    if (!item) {
      count++
    }
  }

  return count
}
function getFalsyValuesCount1(arr) {
     return arr.filter(item => !item).length
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
function getIdentityMatrix(n) {
   if (n <= 0) return []

  const matrix = []

  for (let i = 0; i < n; i++) {
    const row = []
    for (let j = 0; j < n; j++) {
      row.push(i === j ? 1 : 0)
    }
    matrix.push(row)
  }

  return matrix
}
function getIdentityMatrix1(n) {
   if (n <= 0) return []

  return Array.from({ length: n }, (_, rowIndex) =>
    Array.from({ length: n }, (_, colIndex) => (rowIndex === colIndex ? 1 : 0))
  )
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
function getIndicesOfOddNumbers(numbers) {
  const result = []

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
      result.push(i)
    }
  }

  return result
}
function getIndicesOfOddNumbers1(numbers) {
  return numbers.reduce((acc, item, index) => {
    if (item % 2 !== 0) {
      acc.push(index)
    }
    return acc
  }, [])
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
function getHexRGBValues(arr) {
  const result = []

  for (const num of arr) {
    const hex = num.toString(16).toUpperCase().padStart(6, '0')
    result.push('#' + hex)
  }

  return result
}
function getHexRGBValues1(arr) {
  return arr.map(num => '#' + num.toString(16).toUpperCase().padStart(6, '0'))
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
function getMaxItems(arr, n) {
  const result = []
  const copy = [...arr]
  const limit = Math.min(n, arr.length)

  for (let i = 0; i < limit; i++) {
    let maxIndex = 0
    
    for (let j = 1; j < copy.length; j++) {
      if (copy[j] > copy[maxIndex]) {
        maxIndex = j
      }
    }
    
    result.push(copy[maxIndex])
    copy.splice(maxIndex, 1)
  }

  return result 
}
function getMaxItems1(arr, n) {
  return [...arr]
    .sort((a, b) => b - a)
    .slice(0, n)
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
function findCommonElements(arr1, arr2) {
  const result = []
  const set2 = new Set(arr2)

  for (const item of arr1) {
    if (set2.has(item) && !result.includes(item)) {
      result.push(item)
    }
  }

  return result
}
function findCommonElements1(arr1, arr2) {
  const set2 = new Set(arr2)
  
  return arr1.filter(item => set2.has(item))
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
function findLongestIncreasingSubsequence(nums) {
    if (nums.length === 0) return 0

    return nums.reduce((acc, current, index, array) => {
        if (index === 0) return acc

        if (current > array[index - 1]) {
        acc.count++
        acc.max = Math.max(acc.max, acc.count)
        } else {
        acc.count = 1
        }

        return acc
    }, { count: 1, max: 1 }).max
}
function findLongestIncreasingSubsequence1k(nums) {
    if (nums.length === 0) return 0

    let maxLen = 1
    let currentLen = 1

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) {
        currentLen++
        } else {
        maxLen = Math.max(maxLen, currentLen)
        currentLen = 1
        }
    }

    return Math.max(maxLen, currentLen)
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
function propagateItemsByPositionIndex(arr) {
    const result = []

    for (let i = 0; i < arr.length; i++) {
        const repeatCount = i + 1
        
        for (let j = 0; j < repeatCount; j++) {
        result.push(arr[i])
        }
    }

    return result
}

function propagateItemsByPositionIndex1(arr) {
    return arr.flatMap((item, index) => 
        Array.from({ length: index + 1 }, () => item)
    )
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
function shiftArray(arr, n) {
    if (arr.length === 0) return []
    const k = ((n % arr.length) + arr.length) % arr.length
    if (k === 0) return [...arr]
    return arr.slice(-k).concat(arr.slice(0, -k))
}
function shiftArray1(arr, n) {
    if (arr.length === 0) return []

    const result = [...arr]
    const k = ((n % arr.length) + arr.length) % arr.length

    for (let i = 0; i < k; i++) {
        const lastElement = result.pop()
        result.unshift(lastElement)
    }

    return result
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
function sortDigitNamesByNumericOrder(arr) {
    const digits = {
        zero: 0, one: 1, two: 2, three: 3, four: 4,
        five: 5, six: 6, seven: 7, eight: 8, nine: 9
    }

    return [...arr].sort((a, b) => digits[a] - digits[b])
}

function sortDigitNamesByNumericOrder1(arr) {
    const order = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    const result = []

    for (const digit of order) {
        for (const item of arr) {
        if (item === digit) {
            result.push(item)
        }
        }
    }

    return result
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
function swapHeadAndTail(arr) {
    const half = Math.floor(arr.length / 2)
    const isOdd = arr.length % 2 !== 0

    const head = arr.slice(0, half)
    const tail = arr.slice(isOdd ? half + 1 : half)
    const middle = isOdd ? [arr[half]] : []

    return tail.concat(middle, head)
}

function swapHeadAndTail1(arr) {
    const half = Math.floor(arr.length / 2)
    const isOdd = arr.length % 2 !== 0
    const result = []

    for (let i = isOdd ? half + 1 : half; i < arr.length; i++) {
        result.push(arr[i])
    }

    if (isOdd) {
        result.push(arr[half])
    }

    for (let i = 0; i < half; i++) {
        result.push(arr[i])
    }

    return result
    }