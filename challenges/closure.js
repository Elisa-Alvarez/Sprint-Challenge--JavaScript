// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 

//A function is like a reverse Russian nesting doll you can only go outwards. nestedFunction is in the innermost portion so it can move outward to find the varible 
/* Task 2: Counter */

/* Create a function called `sumation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */


function sumation(a){
  function adder(){
    let num1=1;
    let num2=2;
    let num3=3;
    return  a+num1+num2+num3
  }
  return adder ();
  }

console.log(sumation(4))