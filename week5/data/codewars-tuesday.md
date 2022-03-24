# Week 5 Tuesday


## 1 Challenge

From Wikipedia:

"A divisibility rule is a shorthand way of determining whether a given integer is divisible by a fixed divisor without performing the division, usually by examining its digits."

When you divide the successive powers of 10 by 13 you get the following remainders of the integer divisions:

1, 10, 9, 12, 3, 4 because:

```
  10 ^ 0 ->  1 (mod 13)
  10 ^ 1 -> 10 (mod 13)
  10 ^ 2 ->  9 (mod 13)
  10 ^ 3 -> 12 (mod 13)
  10 ^ 4 ->  3 (mod 13)
  10 ^ 5 ->  4 (mod 13)
```

Then the whole pattern repeats. Hence the following method:

Multiply

- the right most digit of the number with the left most number in the sequence shown above, 
- the second right most digit with the second left most digit of the number in the sequence.<br>

The cycle goes on and you sum all these products. Repeat this process until the sequence of sums is stationary.<br>

Example:
What is the remainder when 1234567 is divided by 13?

```
  7      6     5      4     3     2     1  (digits of 1234567 from the right)
  ×      ×     ×      ×     ×     ×     ×  (multiplication)
  1     10     9     12     3     4     1  (the repeating sequence)
```

Therefore following the method we get:

7×1 + 6×10 + 5×9 + 4×12 + 3×3 + 2×4 + 1×1 = 178

We repeat the process with the number 178:

8x1 + 7x10 + 1x9 = 87

and again with 87:

7x1 + 8x10 = 87

From now on the sequence is stationary (we always get 87) and the remainder of 1234567 by 13 is the same as the remainder of 87 by 13 ( i.e 9).

Task:
Call thirt the function which processes this sequence of operations on an integer n (>=0). thirt will return the stationary number.

thirt(1234567) calculates 178, then 87, then 87 and returns 87.

thirt(321) calculates 48, 48 and returns 48


<details>
<summary>Solution</summary>
  
  ```ts
 
 export function thirt(n:number): number {
    let pattern: number[] =  [1, 10, 9, 12, 3, 4]
    let cont:number = 0;
    let newN = n.toString().split('').map(x => parseInt(x)).reverse().reduce((acc, el) => {
        if(cont == pattern.length) cont = 0;
        acc += el * pattern[cont]
        cont++;
        return acc;
    },0)   

    return newN == n ? newN : thirt(newN);
}
  
  ```  
</details>


## 2 Challenge Playing with digits

Some numbers have funny properties. For example:

89 --> 8¹ + 9² = 89 * 1

695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2

46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

Given a positive integer n written as abcd... (a, b, c, d... being digits) and a positive integer p

we want to find a positive integer k, if it exists, such that the sum of the digits of n taken to the successive powers of p is equal to k * n.
In other words:

Is there an integer k such as : (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k

If it is the case we will return k, if not return -1.

Note: n and p will always be given as strictly positive integers.

### Examples:

```
  dig_pow(89, 1) should return 1 since 8¹ + 9² = 89 = 89 * 1
  dig_pow(92, 1) should return -1 since there is no k such as 9¹ + 2² equals 92 * k
  dig_pow(695, 2) should return 2 since 6² + 9³ + 5⁴= 1390 = 695 * 2
  dig_pow(46288, 3) should return 51 since 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51
```

<details>
<summary>Solution</summary>
  
  ```ts
 
 let digPow = (n: number, p: number):number => {
    let arrN: number = n.toString().split('').map((el, i):number => {
        return Math.pow(parseInt(el), p++)
    }).reduce((acc, el) => acc += el);
    
    return arrN/n == Math.floor(arrN/n) ? arrN/n : -1;
}
  
  ```  
</details>

## 3 Challenge Valid Braces

Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.

This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}. Thanks to @arnedag for the idea!

All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.

What is considered Valid?<br>
A string of braces is considered valid if all braces are matched with the correct brace.

## Examples 
 
 ```
 "(){}[]"   =>  True
"([{}])"   =>  True
"(}"       =>  False
"[(])"     =>  False
"[({})](]" =>  False 
 ```


<details>
<summary>Solution</summary>
  
  ```ts
 
 export function validBraces(braces: string): boolean {
    return braces.replace(/\(\)|\{\}|\[\]/g, '') == braces ? false :
     braces.replace(/\(\)|\{\}|\[\]/g, '') == '' ? true : 
     validBraces(braces.replace(/\(\)|\{\}|\[\]/g, ''));
}
  
  ```  
</details>

## 4 Challenge Tic-Tac-Toe

Implement a Tic-Tac-Toe (AKA: Noughts and crosses, Xs and Os) solver. The input to the solver function will be an array of length 9 representing the board. Output of the function will be the index of the desired move (0-8). You will always be X. You must make a valid move, and a winning move if available.

The board is represented as an array with the following indexes:

```
 0 | 1 | 2
---+---+---
 3 | 4 | 5
---+---+---
 6 | 7 | 8 
```

For example, the following board would be represented as

```
solveTTT(['', '', '', 'O', '', '', 'X', '', ''])

   |   |  
---+---+---
 O |   |  
---+---+---
 X |   |  
```

Valid outputs for the above input would be 0, 1, 2, 4, 5, 7 or 8.

The following board would only have 1 correct output (2) because it is the only move that connects 3 X's in a row:

> solveTTT(['O', '', '', 'O', 'X', '', 'X', 'O', 'X'])

<details>
<summary>Solution</summary>
  
  ```ts
 

  
  ```  
</details>





