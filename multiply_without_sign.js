
//hacer una funcion de multiplicacion sin usar el simbolo de multiplicar
const multiply = ( a,b ) => {
  let result = 0;
  const positive = Math.abs(b) == b;
  for( i=0; i < Math.abs(b); i++ ){
    result = positive ? result + a : result -a;
  }

  return result;

}

const a = multiply( 3, -4 );
console.log(a); 