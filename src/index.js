export function capitalize(varString) {
  const firstCharacter = varString.charAt(0).toUpperCase();
  return firstCharacter + varString.substring(1, Infinity);
}

export function reversed(varString) {
  return varString.split(" ").reverse().join(" ");
}

export function add(num1, num2) {
  return num1 + num2;
}

export function substract(num1, num2) {
  return num1 - num2;
}

export function multiply(num1, num2) {
  return num1 * num2;
}

export function divide(num1, num2) {
  return num1 / num2;
}

function createEncryptMap(shift) {
  const ALPHABETQTY = 26;
  const arrayToEncrypt = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const numToShift = shift % ALPHABETQTY;
  const newMap = new Map();
  for (let i = 0; i < arrayToEncrypt.length; i++) {
    let index = 1;
    if (numToShift >= 0) {
      index =
        i + numToShift >= arrayToEncrypt.length
          ? i + numToShift - ALPHABETQTY
          : i + numToShift;
    } else {
      index =
        i + numToShift < 0 ? ALPHABETQTY + i + numToShift : i + numToShift;
    }
    newMap.set(arrayToEncrypt[i], arrayToEncrypt[index]);
  }
  return newMap;
}

export function caesarCipher(varString, shift) {
  const mapForEncryt = createEncryptMap(shift);
  let newString = "";
  for (let i = 0; i < varString.length; i++) {
    newString =
      newString +
      (mapForEncryt.has(varString[i])
        ? mapForEncryt.get(varString[i])
        : varString[i]);
  }

  return newString;
}

export function analyzeArray(arrayNum) {
  if (!arrayNum.length)
    return { average: null, min: null, max: null, length: 0 };

  const resultObject = arrayNum.reduce(
    (result, item) => {
      result.average += item;
      if (item < result.min) result.min = item;
      if (item > result.max) result.max = item;
      return result;
    },
    { average: 0, min: Infinity, max: -Infinity, length: arrayNum.length }
  );
  resultObject.average = resultObject.average / arrayNum.length;

  return resultObject;
}
