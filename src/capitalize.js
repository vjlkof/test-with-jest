export default function capitalize(varString) {
  const firstCharacter = varString.charAt(0).toUpperCase();
  return firstCharacter + varString.substring(1, Infinity);
}
