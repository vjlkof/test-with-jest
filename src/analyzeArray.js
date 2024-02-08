export default function analyzeArray(arrayNum) {
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
