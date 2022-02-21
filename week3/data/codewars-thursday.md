# Week3 Thursday


## Challenge #1

In this kata you have to write a method that folds a given array of integers by the middle x-times.
<br>An example says more than thousand words:


```
Fold 1-times:
[1,2,3,4,5] -> [6,6,3]

A little visualization (NOT for the algorithm but for the idea of folding):

 Step 1         Step 2        Step 3       Step 4       Step5
                     5/           5|         5\          
                    4/            4|          4\      
1 2 3 4 5      1 2 3/         1 2 3|       1 2 3\       6 6 3
----*----      ----*          ----*        ----*        ----*


Fold 2-times:
[1,2,3,4,5] -> [9,6]

```
As you see, if the count of numbers is odd, the middle number will stay. Otherwise the fold-point is between the middle-numbers, so all numbers would be added in a way.
<br>The array will always contain numbers and will never be null. The parameter runs will always be a positive integer greater than 0 and says how many runs of folding your method has to do. 
<br>If an array with one element is folded, it stays as the same array.
<br>The input array should not be modified!
<br>Have fun coding it and please don't forget to vote and rank this kata! :-)
<br>I have created other katas. Have a look if you like coding and challenges.

<details>
  <summary>Solution</summary>
  
```js

  const foldArray = (arr, runs) => {
 if(arr.length == 1){
   return arr;
 }else{
    for(let i=0; i < runs; i++){
    let arrL = arr.length - 1;

    arr = arr.reduce((acc, el, index) => {
      if(index < arrL){
        acc.push(el+arr[arrL]);
        arrL--;
      }else if(index == arrL){
        acc.push(el)
      }
      return acc;
      
    }, [])
  }
 }
   return arr;
};
  
```
  
</details>

## Challenge #2

Encrypt this!

You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:
<br>
1. Your message is a string containing space separated words.<br>
2. You need to encrypt each word in the message using the following rules:<br>
<br>
- The first letter must be converted to its ASCII code.
  <br>
- The second letter must be switched with the last letter
  <br>
Keepin' it simple: There are no special characters in the input.


### Examples
```
encryptThis("Hello") === "72olle"
encryptThis("good") === "103doo"
encryptThis("hello world") === "104olle 119drlo"
  
```

  
  

<details>
  <summary> Solution </summary>
  
```js
const encryptThis = (text) => {
  
  text = text.split(' ')
  text = text.reduce((acc, el) => {
    if(el.length < 3){
      el = el.charCodeAt(0) + el.slice(1);
    }else{
      el = el.charCodeAt(0) + el[el.length - 1] + el.slice(2, el.length - 1) + el[1];
    }
      acc.push(el);
      return acc;
    }, []);

  text = text.join(' ');
  return text;
};
  
```
</details>

## Challenge #3

Given: an array containing hashes of names <br>
Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

### Example

```
list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// returns 'Bart, Lisa & Maggie'

list([ {name: 'Bart'}, {name: 'Lisa'} ])
// returns 'Bart & Lisa'

list([ {name: 'Bart'} ])
// returns 'Bart'

list([])
// returns ''
  
```

<details>
  <summary>Solution</summary>
  
  ```js
  
  const list = (names) => names.reduce((acc, el, index) => {
  if(index == names.length - 2) acc += el.name + ' & ';
  else if(index == names.length - 1) acc += el.name;
  else acc += el.name + ', ';
  return acc;
},'')
  
  ```
</details>
