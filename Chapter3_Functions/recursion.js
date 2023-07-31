/* Define a Recursive function isEven corresponding to this description. 
 - Zero is even. 
 -One is odd. 
 -For any other number N, its evenness is the same as N - 2.
The function should accept a single parameter (a positive, whole number) and return a Boolean.*/

function isEven(num){
    if(num === 0) return true;
    if(num === 1) return false;
    if(num < 0) return isEven(-num);
    return isEven(num - 2);
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));