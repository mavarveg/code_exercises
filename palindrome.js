// validar si un strin es un palindromo
const isPalindrome = (str) => {
  str = str.replace(/\s/g,'');
  const lowered = str.toLowerCase();
  const splitted = lowered.split('');
  const reversed = splitted.reverse();
  const joined = reversed.join('');
  return lowered == joined;
}

const result = isPalindrome('My gym');
console.log(result);