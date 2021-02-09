//aplanar un arreglo en un solo nivel
const flatten = arr => arr.reduce( ( acc, el ) => acc.concat(el), []);

const d = flatten( [[1,2], [[3,4]], [1, []]] );
console.log(d);