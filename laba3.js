/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

function isPositive(num) {
    console.log(num >= 0)
}

function getMaxNumber(a, b, c) {
    let max = a
    if (max < b) {max = b}
    if (max < c) {max = c}
    console.log(max)
}

function canQueenCaptureKing(x1, y1, x2, y2) {
    if (x1 === x2 || y1 === y2) {return true}
    if (Math.abs(x1 - x2) === Math.abs(y1 - y2)) {return true}
    return false
}

function isIsoscelesTriangle(a, b, c) {
    if (a == b) {return true}
    if (a == c) {return true}
    if (b == c) {return true}
    return false
}

function convertToRomanNumerals(num ) {
    let result = '';
    while (num >= 10) {
        result += 'X';
        num -= 10;
    }
    if (num === 9) {
        result += 'IX';
        num -= 9;
    }
    if (num >= 5) {
        result += 'V';
        num -= 5;
    }
    if (num === 4) {
        result += 'IV';
        num -= 4;
    }
    while (num >= 1) {
        result += 'I';
        num -= 1;
    }
    return result;
}

function convertNumberToString(str) {
    let result = '';

    for (let i = 0; i < str.length; i++) {
        if (i > 0) {
            result += ' ';
        }
        switch (str[i]) {
            case '0': result += 'ноль'; break
            case '1': result += 'один'; break
            case '2': result += 'два'; break
            case '3': result += 'три'; break
            case '4': result += 'четыре'; break
            case '5': result += 'пять'; break
            case '6': result += 'шесть'; break
            case '7': result += 'семь'; break
            case '8': result += 'восемь'; break
            case '9': result += 'девять'; break
            case '-': result += 'минус'; break
            case '.': result += 'точка'; break
            case ',': result += 'девять'; break
        }
    }

    return result;
}

function isPalindrome(str) {
    let left = 0;
    let right = str.length - 1;

    while (left < right) {
        if (str[left] !== str[right]) {
            return false;
        }
        left++;
        right--;
    }

    return true;
}

function getIndexOf(str, letter) {
    for (let i = 0; i < str.length; i++)
        if (str[i] == letter) {return i}
    return -1
}

function isContainNumber(num, digit) {
    if (num < 0) {
        num = -num;
    }
    if (num === 0 && digit === 0) {
        return true;
    }
    while (num > 0) {
        let currentDigit = num % 10;
        if (currentDigit === digit) {
            return true;
        }
        num = (num - currentDigit) / 10;
    }

    return false;
}

function getBalanceIndex(arr) {
        let totalSum = 0
    for (let i = 0; i < arr.length; i++) {
        totalSum += arr[i]
    
    let leftSum = 0;
    for (let i = 0; i < arr.length; i++) {
        let rightSum = totalSum - leftSum - arr[i]
        if (leftSum === rightSum) {
            return i
        }
        leftSum += arr[i]
    }
    return -1
    }
}

function getSpiralMatrix(size) {
    let matrix = []
    for (let i = 0; i < size; i++) {
        matrix[i] = []
    }

    let value = 1
    let top = 0
    let bottom = size - 1
    let left = 0
    let right = size - 1;

    while (top <= bottom && left <= right) {
        for (let i = left; i <= right; i++) {
            matrix[top][i] = value
            value++
        }
        top++

        for (let i = top; i <= bottom; i++) {
            matrix[i][right] = value
            value++
        }
        right--

        if (top <= bottom) {
            for (let i = right; i >= left; i--) {
                matrix[bottom][i] = value
                value++
            }
            bottom--
        }

        if (left <= right) {
            for (let i = bottom; i >= top; i--) {
                matrix[i][left] = value
                value++
            }
            left++
        }
    }
    return matrix
}

function rotateMatrix(matrix) {
        let n = matrix.length

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            let temp = matrix[i][j]
            matrix[i][j] = matrix[j][i]
            matrix[j][i] = temp
        }
    }

    for (let i = 0; i < n; i++) {
        let left = 0
        let right = n - 1
        
        while (left < right) {
            let temp = matrix[i][left]
            matrix[i][left] = matrix[i][right]
            matrix[i][right] = temp
            
            left++
            right--
        }
    }
    return matrix
}

function quickSort(arr, left, right) {
    if (left >= right) {return arr}

    let midIndex = left + ((right - left) >> 1)
    let pivot = arr[midIndex]

    let i = left
    let j = right

    while (i <= j) {

        while (arr[i] < pivot) {
            i++
        }

        while (arr[j] > pivot) {
            j--
        }

        if (i <= j) {
            let temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp
            i++
            j--
        }
    }

    quickSort(arr, left, j)
    quickSort(arr, i, right)
}
function sortByAsc(arr) {
    quickSort(arr, 0, arr.length - 1)
    return arr
}
/**
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iter) {
    stroka = str
    for (let j = 1; j <= iter; j++) {
        a = ''
        b = ''
        for (let i = 0; i < Math.floor(str.length); i++) {
            a += stroka[i]
            b += stroka[i+1]
            i++
            }
            stroka = a+b
        }
    return stroka
}
/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 */
function getNearestBigger(num) {
    let digits = []
    let temp = num
    let length = 0
    
    while (temp > 0) {
        let lastDigit = temp % 10
        digits[length] = lastDigit
        length++
        temp = (temp - lastDigit) / 10
    }
    
    let l = 0
    let r = length - 1
    while (l < r) {
        let t = digits[l]
        digits[l] = digits[r]
        digits[r] = t
        l++
        r--
    }

    let pivot = -1;
    for (let i = length - 2; i >= 0; i--) {
        if (digits[i] < digits[i + 1]) {
            pivot = i
            break
        }
    }

    if (pivot === -1) {
        return num
    }

    let successor = -1
    for (let i = length - 1; i > pivot; i--) {
        if (digits[i] > digits[pivot]) {
            successor = i
            break
        }
    }

    let t = digits[pivot]
    digits[pivot] = digits[successor]
    digits[successor] = t

    let start = pivot + 1
    let end = length - 1
    while (start < end) {
        let t2 = digits[start]
        digits[start] = digits[end]
        digits[end] = t2
        start++
        end--
    }

    let result = 0
    for (let i = 0; i < length; i++) {
        result = result * 10 + digits[i]
    }

    return result
}
