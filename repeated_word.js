//valdiar cuantas veces se repite una palabra
const repeated = str => {
  const lowered = str.toLowerCase();
  const splitted = lowered.split(' ');
  const reduced = splitted.reduce((acc, el) => {
    if (acc[el]){
      acc[el]++
    } else {
      acc[el] = 1;
    }
    return acc
  }, {})
  return Object.entries(reduced).reduce((acc, el) => acc[1] > el[1] ? acc : el);
}

const result = repeated('this is a word test this repeated word word test');
console.log(result);