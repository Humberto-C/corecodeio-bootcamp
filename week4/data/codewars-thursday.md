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


### Examples:

```ts


```
