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
    return find(1,1);
  }
  console.log(findSolution(13));

  //This is how it works :
  // To better understand how this function produces the effect we’re looking for, let’s look at all the calls to find that are made when searching for a solution for the number 13.
  //
  // find(1, "1")
  //   find(6, "(1 + 5)")
  //     find(11, "((1 + 5) + 5)")
  //       find(16, "(((1 + 5) + 5) + 5)")
  //         too big
  //       find(33, "(((1 + 5) + 5) * 3)")
  //         too big
  //     find(18, "((1 + 5) * 3)")
  //       too big
  //   find(3, "(1 * 3)")
  //     find(8, "((1 * 3) + 5)")
  //       find(13, "(((1 * 3) + 5) + 5)")
  //         found!
  // The indentation suggests the depth of the call stack. The first time find is called it calls itself twice to explore the solutions that start with (1 + 5) and (1 * 3). The first call tries to find a solution that starts with (1 + 5) and, using recursion, explores every solution that yields a number less than or equal to the target number. Since it doesn’t find a solution that hits the target, it returns null back to the first call. There the || operator causes the call that explores (1 * 3) to happen. This search has more luck because its first recursive call, through yet another recursive call, hits upon the target number, 13. This innermost recursive call returns a string, and each of the || operators in the intermediate calls pass that string along, ultimately returning our solution.
}

{
  //Growing functions
  //http://eloquentjavascript.net/03_functions.html#h_eVDWIAuyBK

  function printFarmInventory(cows,chickens){
    //Cow digits counter
    var cowString = String(cows);
    while(cowString.length < 3)
      cowString = "0" + cowString;
    console.log(cowString + " Cows");
    //Chicken Digits counter :
    var chickenString = String(chickens)
    while(chickenString.length < 3)
      chickenString = "0" + chickenString;
    console.log(chickenString + " Chickens");
  }
  printFarmInventory(10,5);

}

{
    //Function to make it clean
    function zeroPad(number, width) {
    var string = String(number);
    while (string.length < width)
      string = "0" + string;
    return string;
  }

  function printFarmInventory(cows, chickens, pigs) {
    console.log(zeroPad(cows, 3) + " Cows");
    console.log(zeroPad(chickens, 3) + " Chickens");
    console.log(zeroPad(pigs, 3) + " Pigs");
  }

  printFarmInventory(7, 16, 3);
}

{
  function min(a,b){
  if(a < b)
    return a;
  else
    return b;
}

console.log(min(0,10));
console.log(min(0, -10));
}

{
function isEven(a){
  if(a%2 == 0)
    return true;
  else
    return false;
}

console.log(isEven(51));
}

{
  function isEven(n) {
  if (n == 0)
    return true;
  else if (n == 1)
    return false;
  else if (n < 0)
    return isEven(-n);
  else
    return isEven(n - 2);
}

console.log(isEven(-1));

}

{
// Bean Counting
function countBs(b){
  var a = b.toLowerCase();
  return a.match(/b/g).length;
}

console.log(countBs("BBC"));

// function charAt(x,y){
//   var y = y.toLowerCase();
//   return y.match(/y/g).length;
// }
//
// console.log(charAt("GGGG","G"));
}

//Joining array objects
{
  let mack = [];
  mack.push("Mack");// Push adding value on array
  mack.push("The","Knife");

  console.log(mack);
  console.log(mack.join(" "));
  console.log(mack.pop()); // Pop remove value dari array terakhir
  console.log(mack);
}

{
  // objects
  let day1 = {
    squirrel : false,
    events : ["work","touched tree","pizza","running","television"]
  };

  console.log(day1.squirrel);
  console.log(day1.wolf);
  day1.wolf = false;
  console.log(day1.wolf);
}

{
  //Array of objects
  let journal = [
    {events : ["work",""]}
  ];
}
