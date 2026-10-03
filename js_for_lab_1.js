function getStringLength(str) {
  return str?.length
}

function isString(str) {
 return typeof str == 'string' || str instanceof String
}

function concatenateStrings(str1, str2) {
  return str1 + str2
}

function getFirstChar(str) {
  return str.at(0)
}

function removeLeadingAndTrailingWhitespaces(str) {
  return str.trim()
}

function removeLeadingWhitespaces(str) {
  return str.trimStart()
}

function removeTrailingWhitespaces(str) {
  return str.trimEnd()
}

function repeatString(str, num) {
    if (num >= 0) {return str.repeat(num)}
    else{return ''}
}

function removeFirstOccurrences(str1, str2) {
    return str1.replace(str2, '')
}

function removeLastOccurrences(str1, str2) {
  let index = str1.lastIndexOf(str2);
  if (index === -1) return str1; 
  return str1.slice(0, index) + str1.slice(index + str2.length);
}

function sumOfCodes(str) {
  if (typeof str !== 'string') return 0;
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    sum += str.charCodeAt(i);
  }
  return sum;
}

function startsWith(str1, str2) {
  return str1.startsWith(str2)
}

function endsWith(str1, str2) {
  return str1.endsWith(str2)
}

function formatTime(min, sec) {
  let totalSeconds = (min * 60) + sec;
  
  const finalMinutes = Math.floor(totalSeconds / 60);
  const finalSeconds = totalSeconds % 60;
  
  const mm = String(finalMinutes).padStart(2, '0');
  const ss = String(finalSeconds).padStart(2, '0');
  
  return `${mm}:${ss}`;
}

function reverseString(str) {
  return str.split('').reverse().join('');
}

function orderAlphabetically(str) {
  return str.split('').sort().join('');
}

function containsSubstring(str1, str2) {
  return str1.includes(str2)
}

function countVowels(str) {
  return str.match(/[aeouiy]/gi).length;
}

function isPalindrome(str) {
  let cleanStr = str.toLowerCase().replace(/[^a-zа-яё0-9]/gi, '');
  let abc = cleanStr.split('').reverse().join('')
  if (abc == cleanStr) { return true}
  else { return false}
}

function findLongestWord(str) {
  const words = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?"']/g, "").split(/\s+/);

  return words.reduce((longest, current) => {
    return current.length > longest.length ? current : longest;
  }, "");
}

function reverseWords(str1) {
  return str1.split(' ').map(word => word.split('').reverse().join('')).join(' ');
}

function invertCase(str1) {
 return  str1.split('').map(char => char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()).join('');
}

function getStringFromTemplate(str1, str2) {
  return `"Hello, ${str1} ${str2}!"`
}

function extractNameFromTemplate(str) {
  const match = str.match(/^Hello,\s+(.+)!$/)
  return match ? match[1] : ''
}

function unbracketTag(str) {
  str.slice(1, -1)
}

function extractEmails(str) {
  return str.split(';')
}

function encodeToRot13(str) {
  return str.split('').map(char => {
      const code = char.charCodeAt(0);

      if (code >= 65 && code <= 90) {
        return String.fromCharCode(((code - 65 + 13) % 26) + 65);
      }
      
      if (code >= 97 && code <= 122) {
        return String.fromCharCode(((code - 97 + 13) % 26) + 97);
      }
      return char;
    }).join('');
}

function getCardIdcard(card) {
  const deck = [
    'A♣','2♣','3♣','4♣','5♣','6♣','7♣','8♣','9♣','10♣','J♣','Q♣','K♣',
    'A♦','2♦','3♦','4♦','5♦','6♦','7♦','8♦','9♦','10♦','J♦','Q♦','K♦',
    'A♥','2♥','3♥','4♥','5♥','6♥','7♥','8♥','9♥','10♥','J♥','Q♥','K♥',
    'A♠','2♠','3♠','4♠','5♠','6♠','7♠','8♠','9♠','10♠','J♠','Q♠','K♠'
  ];
  return deck.indexOf(card)
}