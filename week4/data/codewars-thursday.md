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

