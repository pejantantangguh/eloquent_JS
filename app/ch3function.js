//Code without parameters
var makeNoise = function() {
  console.log("Pling!");
};
makeNoise();

/* Code with parameter */
var power = function(base, exponent) {
  var result = 1;
  for (var count = 0; count < exponent; count++)
    result *= base;
  return result;
};

console.log(power(2, 10));


/************************************


Nested functions



************************************/

// Drawing a mountain with function
{
var count = 0;
const landscape = () => {
  let result = "";
  let flat = (size) => {
    for (count; count < size; count++){
      result = result + "_";
    };
  };
  let mountain = (size) => {
    result += "/";
    for(count = 0; count < size; count++){
      console.log(count);
      result += "'";
    };
    result +="\\";
  };
  flat(5);
  mountain(3);
  return result;
};
console.log(landscape());
};
// Karena variable count sudah di pake di looping yang awal. Kita Harus reset dia punya variable kembali ke "0" biar bisa looping mountain bosa di pakai


/********************

Things you should not do with nested function

*********************/

function example() {
  function a() {} // Okay
  if (something) {
    function b() {} // Danger!
  }
}
