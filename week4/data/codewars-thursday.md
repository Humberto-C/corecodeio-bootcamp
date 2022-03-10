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

