//eliminar de un arreglo los null, undefine, o y false
const clean = ( arr ) => arr.reduce( ( acc,el ) => {
  if( el ){
    acc.push( el );
  }

  return acc;
}, [] )

const c = clean( [ undefined, 1, 0, null, 2, 3, false] );
console.log( c );