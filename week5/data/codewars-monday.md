# Week 5 Monday

## 1 Challenge

Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example:
> for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.


<details>
<summary>Solution</summary>
  
  ```ts
 
  export function squareSum(numbers: number[]): number {
    return numbers.reduce((acc:number, el:number):number => acc += el * el,0);
}
  
  ```  
</details>


## 2 Challenge

In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater or equal to p = 1200 inhabitants?

### Example

```

  At the end of the first year there will be: 
  1000 + 1000 * 0.02 + 50 => 1070 inhabitants

  At the end of the 2nd year there will be: 
  1070 + 1070 * 0.02 + 50 => 1141 inhabitants (** number of inhabitants is an integer **)

  At the end of the 3rd year there will be:
  1141 + 1141 * 0.02 + 50 => 1213

  It will need 3 entire years.

```

<details>
<summary>Solution</summary>
  
  ```ts
  
  let nbYear = (p0:number, percent:number, aug:number, p:number):number => {
    let years: number = 0;  
    while(p0 < p){
        p0 = Math.floor(p0 * (1 + percent/100) + aug);
        cont++;
    }
    return years;
  }

  ```  
</details>

## 3 Challenge

This time no story, no theory. The examples below show you how to write function accum:

### Example

```
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"  
```

<details>
<summary>Solution</summary>
  
  ```ts
  
 function accum(s: string): string {
    let str:string = '';
    s = s.toLocaleLowerCase();
    for(let i:number = 0; i < s.length; i++){
        for(let j:number = 0; j <= i; j++){
            if(j == 0) str += s[i].toUpperCase();
            else str += s[i];
        }
        if(i != s.length -1) str += '-';
    }
    return str;
}

  ```  
</details>
  
  
  ## 4 Challenge A wolf in sheep's clothing

  Wolves have been reintroduced to Great Britain. You are a sheep farmer, and are now plagued by wolves which pretend to be sheep. Fortunately, you are good at spotting them.<br>
  Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing at the front of the queue which is at the end of the array:

```

 [sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]      (YOU ARE HERE AT THE FRONT OF THE QUEUE)
   7      6      5      4      3            2      1 

```
  
  If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N is the sheep's position in the queue.<br>
Note: there will always be exactly one wolf in the array.
  
  ### Examples
  
  Input: ["sheep", "sheep", "sheep", "wolf", "sheep"] <br>
Output: "Oi! Sheep number 1! You are about to be eaten by a wolf!"

Input: ["sheep", "sheep", "wolf"] <br>
Output: "Pls go away and stop eating my sheep"

<details>
<summary>Solution</summary>
  
  ```ts
  
      function warnTheSheep(queue: string[]): string {
       return queue[queue.length - 1] == 'wolf' ? 
       'Pls go away and stop eating my sheep':
       `Oi! Sheep number ${queue.length - (queue.indexOf('wolf') + 1)}! You are about to be eaten by a wolf!`
    }

  ```  
</details>


