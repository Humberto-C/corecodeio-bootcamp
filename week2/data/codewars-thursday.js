// CODEWARS CHALLENGES THURSDAY

/*
1. Description:
Remove all exclamation marks from the end of sentence.

Examples
remove("Hi!") === "Hi"
remove("Hi!!!") === "Hi"
remove("!Hi") === "!Hi"
remove("!Hi!") === "!Hi"
remove("Hi! Hi!") === "Hi! Hi"
remove("Hi") === "Hi"
*/

let remove = (str) => {
  let result = str.split('');
  while(result[result.length -1] == '!'){
    result = result.splice(0, result.length -1)
    }
  return result.join('');
};


/*
2. Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

Examples
"hello"     -->  "hll"
"codewars"  -->  "cdwrs"
"goodbye"   -->  "gdby"
"HELLO"     -->  "HELLO"
*/

let shortcut = (s) => s.replace(/[aeiou]/g, ''); 


/*
3. Rock Paper Scissors
Let's play! You have to return which player won! In case of a draw return Draw!.

Examples:

rps('scissors','paper') // Player 1 won!
rps('scissors','rock') // Player 2 won!
rps('paper','paper') // Draw!
*/

const rps = (p1, p2) => {
  if(p1 == p2) return 'Draw!';
  if(p1 == 'scissors' && p2 == 'paper') return 'Player 1 won!';
  if(p1 == 'paper' && p2 == 'rock') return 'Player 1 won!';
  if(p1 == 'rock' && p2 == 'scissors') return 'Player 1 won!';
  else return 'Player 2 won!'
};



/*
4. Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

For example (Input --> Output):

39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
4 --> 0 (because 4 is already a one-digit number)
*/

let persistence = (n) => {
    let str = n
    let cont = 0;
    while(str > 9){
    str = str.toString(10).split('').map((x) => parseInt(x)).reduce((acc, el) => acc * el, 1);
      cont++;
    }
    return cont;
  }













