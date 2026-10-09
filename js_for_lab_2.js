function getRectangleArea(num1, num2) {
    return num1 * num2
}

function getCircleCircumference(num) {
    return Math.PI * num * 2
}

function getAverage(num1, num2) {
    return (num1 + num2) / 2
}

function getDistanceBetweenPoints(x, x1, y, y1) {
    return ((x1 - x)**2 + (y1 - y)**2)**0.5
}

function getLinearEquationRoot(a, b) {
    return b / (-a)
}

function getAngleBetweenVectors(x1, y1, x2, y2) {
    let top = x1 * x2 + y1 * y2
    let down = Math.sqrt(x1 * x1 + y1 * y1) * Math.sqrt(x2 * x2 + y2 * y2)
    return Math.acos(top / down)
}

function getLastDigit(num) {
    return Number(String(num).at(-1))
}

function parseNumberFromString(stri) {
    return Number(stri)
}

function getParallelepipedDiagonal(a, b, c) {
    return (a*a + b*b + c*c) ** 0.5
}

function roundToPowerOfTen(num1, num2) {
    return Number(String(num1).slice(0, String(num1).length - num2) + '0'.repeat(num2))
}

function isPrime(num) {
    check = true
    for (let i = 2; i <= Math.floor(num/2); i++){
        if (num % i === 0) {
            check = false
            break
        }
    }
    return check
}

function toNumber(num, basic) {
    if (Number.isFinite(Number(num))) {
        return Number(num)
    } else {
        return basic
    }
}

function getCube(num) {
    return num ** 3
}

function getFibonacciNumber(index) {
    let a = 1
    let b = 1
    let c = 0
    if (index == 0) {return 0}
    if (index == 1) {return 1}
    for (let i = 3; i <= index; i++){
        c = b
        b = a+b
        a = c
    }
    return b
}

function getSumToN(num) {
    let a = 0
    for (let i = 1; i <= num; i++) {
        a = a + i
    }
    return a
}

function getSumOfDigits(num) {
    let a = 0
    for (let i = 0; i <= String(num).length - 1; i++) {
        a = a + Number(String(num).at(i))
    }
    return a
}

function isPowerOfTwo(num) {
    if (num == 1) {return false}
    a = num
    for (let i = 0; i <= num; i++){
        a = a / 2
        if (a == 1) {return true}
        if (a <= 1) {return false}
    }
}

function getSine(angle) {
    return Math.sin(angle)
}

function numberToStringInBase(num, base) {
    return num.toString(base)
}

function toExponential(num, point) {
    a = num
    tens = 0
    for (let i = 1; i <= String(num).length - 1; i++){
        a = a / 10
        tens = tens + 1
    }
    return String(a.toFixed(point)) + 'e+' + String(tens)
}

function toFixed(num, point) {
    return num.toFixed(point)
}

function toPrecision(num, point) {
    a = point - Number(String(num).length)
    if (a >= 0){return num.toFixed(a)}
    if (a < 0) {return num.toFixed(-a)}
}

function getNumberValue(num) {
    return num.valueOf()
}

function isNumber(num) {
    return Number.isFinite(num)
}

function isInteger(num) {
    return Number.isInteger(num)
}

function getFloatOnString(num) {
    return Number.parseFloat(num)
}

function getIntegerOnString(num, base) {
    return Number.parseInt(num).toString(base)
}

function isSafeInteger(num) {
    return Number.isSafeInteger(num)
}

function roundToSmallestInteger(num) {
    return Math.floor(num)
}

function roundToLargestInteger(num) {
    return Math.ceil(num)
}

function roundToNearestInteger(num) {
    return Math.round(num)
}


function getIntegerPartNumber(num) {
    return Math.trunc(num)
}

function getSumOfNumbers(x1, x2, x3) {
    return x1 + x2 + x3
}


function getMaxNumber(a, b) {
    return Math.max(a, b)
}

function getRandomInteger(min, max) {
    Math.floor(Math.random() * (max - min + 1)) + min
}

function getHypotenuse(a, b) {
    return Math.hypot(a, b)
}

function getCountOfOddNumbers(num) {
    return Math.ceil(num / 2)
}