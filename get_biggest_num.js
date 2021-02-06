//obtener el numero mas grande dentro de un array pero iterand una unica vez
const getBiggest = ( arr ) => arr.reduce( ( acc, el ) => acc > el ? acc : el );

const b = getBiggest([50,-1500, 1000, 0, 1001, 54]);

console.log(b);