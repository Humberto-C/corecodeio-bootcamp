
Week3
Wednesday
[Code](https://www.codewars.com/kata/52774a314c2333f0a7000688/train/javascript)
```
function validParentheses(parens) {
  let acc = 0;
  for(let i = 0; i<parens.length ; i++){
    if(parens[i] == '(')
      acc++;
    else if(parens[i] == ')'){
      acc--;
      if(acc < 0)
        break;
      }
  }
  return acc !== 0 ? false : true; 
}
```

2. Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"
"The_Stealth_Warrior" gets converted to "TheStealthWarrior"

[Answers](https://www.codewars.com/kata/517abf86da9663f1d2000003/solutions/javascript)
```
function toCamelCase(str)
{  
  let finalArr = [];
  let arr = str.split(/_|-/g);
  
  for(let i=0 ; i< arr.length; i++)
  {
    if(i === 0)
    {
         finalArr.push(arr[0]);
    }
    else
    {
      arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
      finalArr.push(arr[i]);
    }
  }
  return finalArr.join('');
}
```
Look what a amazing solution for the previous challenge made by a peer:
```
function toCamelCase(str){
  return str.replace(/[-_](.?)/g, function(match, p1){
    return p1.toUpperCase(); 
  })
}
```


Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

For example:
```
uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]
```


