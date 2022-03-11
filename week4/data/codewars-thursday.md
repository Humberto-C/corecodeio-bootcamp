# Week 4 Thursday

## 1 Challenge

A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).
<br>
Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.




<details>
<summary>Solution</summary>
  
  ```ts
 let isPangram = (phrase: string): boolean => {
    for(let i=97; i < 123; i++){
        if(phrase.toLowerCase().indexOf(String.fromCharCode(i)) < 0) return false;
    }
    return true;
}
  
  ```  
</details>

## 2 Challenge

#Find the missing letter

Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.<br>
You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.<br>
The array will always contain letters in only one case.<br>
(Use the English alphabet with 26 letters!)

### Examples:

```ts
["a","b","c","d","f"] -> "e"
["O","Q","R","S"] -> "P"
```

<details>
<summary>Solution</summary>
  
  ```ts
 export let findMissingLetter = (arr: string[]):string => {
    let arrNum: number[] = toCharCode(arr);
    let missingLetter:string = '';
    for(let i:number = 0; i < arrNum.length; i++){
        if(arrNum[i + 1]-arrNum[i] == 2) missingLetter = String.fromCharCode(arrNum[i] + 1);
    }
    return missingLetter;
}

const toCharCode = (arr: string[]): number[] => arr.map((x:string): number => x.charCodeAt(0)); // convert my string[] to number[]
  
  ```  
</details>

  
## 3 Challenge

There is an array with some numbers. All numbers are equal except for one. Try to find it!
  
  >findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
  
  >findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
  
  It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance.

This is the first kata in series:

Find the unique number (this kata) <br>
[Find the unique string](https://www.codewars.com/kata/585d8c8a28bc7403ea0000c3)<br>
[Find The Unique](https://www.codewars.com/kata/5862e0db4f7ab47bed0000e5)<br>
  
<details>
<summary>Solution 1</summary>
  
  ```ts
 
 export const findUniq = (arr:number[]): number => {
  let uniqNum: number = 0;
  let repNum: number = 0;
  
  for(let i:number = 0; i < arr.length; i++){
      if(arr[i] != arr[i + 1]){
        uniqNum = arr[i];
        repNum = arr[i + 1];
        break;    
      }
 }
  
 return arr.filter((x:number): boolean => x == uniqNum).length == 1 ? uniqNum: repNum;
}
  
  ```  
</details>

  
  
  

