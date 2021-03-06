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


/*
4. Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

The binary number returned should be a string.

Examples:(Input1, Input2 --> Output (explanation)))

1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)
*/

const addBinary = (a, b) => (a + b).toString(2);

/*
5. Create a function finalGrade, which calculates the final grade of a student depending on two parameters: a grade for the exam and a number of completed projects.

This function should take two arguments: exam - grade for exam (from 0 to 100); projects - number of completed projects (from 0 and above);

This function should return a number (final grade). There are four types of final grades:

100, if a grade for the exam is more than 90 or if a number of completed projects more than 10.
90, if a grade for the exam is more than 75 and if a number of completed projects is minimum 5.
75, if a grade for the exam is more than 50 and if a number of completed projects is minimum 2.
0, in other cases
Examples(Inputs-->Output):

100, 12 --> 100
99, 0 --> 100
10, 15 --> 100

85, 5 --> 90

55, 3 --> 75

55, 0 --> 0
20, 2 --> 0
*/

function finalGrade (exam, projects) {
  if(exam > 90 || projects > 10)
    return 100
  else if(exam > 75 && projects > 4)
    return 90
  else if(exam > 50 && projects > 1)
    return 75
  else
    return 0// final grade
}












