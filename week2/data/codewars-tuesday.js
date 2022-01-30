// CODEWARS CHALLENGES TUESDAY

/* 1. This code does not execute properly. Try to figure out why. 

function multiply(a, b){
  a * b
}

*/

function multiply(a, b){
  return a * b;
}


/*
2. You'll be given a string, and have to return the sum of all characters as an int. The function should be able to handle all ASCII characters.

examples:

uniTotal("a") == 97 uniTotal("aaa") == 291
*/

function uniTotal (string) {
// total up dem unicodes!
 let result = Array.from(string).reduce((acc, el) => {
   acc += el.charCodeAt();
   return acc;
 }, 0)
 return string ? result : 0 ;
}

/*
3. Write a function get_char() / getChar() which takes a number and returns the corresponding ASCII char for that value.
*/

function get_char(number) {
  return String.fromCharCode(number);
}
















