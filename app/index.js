console.log("Hello World From Webpack");

// Making a triangle showing up
for (var x = "#"; x.length < 8; x += "#") {
  console.log(x);
  if(x.lenght == 8 ){
    console.log("lenght is 8");
  }
}



// FizzBuzz
// Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.
//
// When you have that working, modify your program to print "FizzBuzz", for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).
//
// (This is actually an interview question that has been claimed to weed out a significant percentage of programmer candidates. So if you solved it, you’re now allowed to feel good about yourself.)

let numbers = 1;
for (numbers ; numbers <= 100; numbers++){
  if(numbers % 3 == 0 && numbers % 5 == 0 ){
    console.log("Fizz Buzz");
  }else if (numbers % 5 == 0) {
    console.log("Buzz");
  }else if (numbers % 3 == 0 ){
    console.log("Fizz")
  }else {
    console.log(numbers);
  }
}

//Chess Board
// Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a “#” character. The characters should form a chess board.
//
// Passing this string to console.log should show something like this:
//
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
// When you have a program that generates this pattern, define a variable size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.

// my Solution
{
let size = 8;
let odd   = " # # # #";
let even  = "# # # # "
  for (var x = 1; x < size; x++ ){
    if(x % 2 == 0 ){
      console.log(even);
    }else{
      console.log(odd);
    }
  }
}

// Book Solution
{
let size = 8;
let board = "";

for (var y = 0; y < size; y++ ){
  for (var x = 0; x< size; x++ ){
      if((x + y) % 2 == 0)
        board += " ";
      else
        board += "#";
    }
    board += "\n";
  }

  console.log(board);
}

//Defining a function
var power = (base,exponent) => {
  let result = 1;
  for(let count = 0; count < exponent; count++){
    result = result * base;
    //1 loop = result 2 , base 2
    //2 loop = result 4 , base 2
    console.log(result,base);
  };
  return result;
}

console.log(power(2,10));
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

//Solution from Book
{
let landscape = function() {
  let result = "";
  let flat = (size) => {
    for (var count = 0; count < size; count++)
      result += "_";
  };
  let mountain = (size) => {
    result += "/";
    for (var count = 0; count < size; count++)
      result += "'";
    result += "\\";
  };

  flat(3);
  mountain(4);
  flat(6);
  mountain(1);
  flat(1);
  return result;
};

console.log(landscape());
};

//Return function example
{
  console.log("The future says:",future());
  function future() {
    return " We still has no flying cars";
    // Return means valuenya di kembalikan ke name of the function
    };
}

//Optional argument function if value does not exist
{
  function power(base, exponent) {
  if (exponent == undefined)
    exponent = 2;
  var result = 1;
  for (var count = 0; count < exponent; count++)
    result *= base;
  return result;
}

console.log(power(4));
// → 16
console.log(power(4, 3));
// → 64
}

// Recursion function =  A function that calls itself is called recursive.

//Recursion Sample
//Simple recursion
{
  function power(base,exponent){
    if(exponent == 0)
      return 1;
    else
      return base * power(base,exponent - 1);
  }
    console.log(power(2,3));
}

{
  function findSolution(target){
    function find(current,history) {
      if(current == target)
        return history;
      else if(current > target)
        return null;
      else
        return find(current + 5,"(" + history + "+ 5)") ||
               find(current * 3,"(" + history + "* 3)");
    }
    return find(1,"1");
  }
  console.log(findSolution(13));
}
