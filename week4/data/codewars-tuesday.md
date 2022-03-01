# Week 4 Tuesday

1. Challenge

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

