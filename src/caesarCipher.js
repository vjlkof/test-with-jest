function createEncryptMap(shift) {
  const ALPHABETQTY = 26;
  const arrayToEncrypt = "abcdefghijklmnopqrstuvwxyz";
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

export default function caesarCipher(varString, shift) {
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
