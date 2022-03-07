# Week 4 Tuesday

- Read [this](https://blog.logrocket.com/types-vs-interfaces-in-typescript/) ✔️
<details>
  <summary>Summary</summary>
  
  String, boolean, and number are the basic types of TypeScript. Also, in TypeScript, we have advanced types and in these advanced types, we have something called type aliases. With type aliases, we can create a new name for a type but we don’t define a new type.
  <br>
  We use the **type** keyword to create a new type alias, that’s why some people might get confused and think that it’s creating a new type.
  <br>
  ### Types vs. interfaces
  
  **Interfaces** are basically a way to describe data shapes, for example, an object.
  <br>
  **Type** is a definition of a type of data, for example, a union, primitive, intersection, tuple, or any other type.  
  
</details>




## 1 Challenge

Given an array of integers, find the one that appears an odd number of times.<br>
There will always be only one integer that appears an odd number of times.

### Examples:

```ts
[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

```

<details>
<summary>Solution</summary>
  
  ```ts
    function findOdd(arr: number[]):number {
      let odd:number = 0;
      let subStr:number[] = [];

      if(arr.length == 1) return arr[0];
      else{
          for(let i = 0; i < arr.length ; i++){
              let first: number = arr[i];
              subStr = arr.filter((el:number) => el == first)
              if(subStr.length % 2 != 0) {
              odd = subStr[0];
              return odd;
              }
          }
      }
  }
  
  ```  
</details>
  
## 2 Challenge
  
Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata).<br> Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.<br>

### Examples: 
  
```
  spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw"
  spinWords( "This is a test") => returns "This si a tset" 
  spinWords( "This is another test" )=> returns "This is rehtona test"
```
  
<details>
  <summary>Solution</summary>
  
  ```ts
  
  export let spinWords = (words: string): string => words.split(' ')
    .map((el: string) => el.length > 4 ? el.split('').reverse().join(''): el)
    .join(' ');  
  ```
  
</details>
  
  
  

