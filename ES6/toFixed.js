// toFixed가 함수가 string을 반환하는 이유?

/*

자바스크립트에서 0.1과 제곱들은 이진 부동소수점 시스템(binary floating-point system)에서 
정확하게 표현되지 않기 때문입니다. 따라서 string 타입만이 숫자를 정확하게 
표현할 수 있는 유일한 수단이기 때문에 toFixed 함수가 string형을 반환하게 됩니다.

*/

// --------- 예시 ---------

/*
let a = 123;
undefined
let price = a.toFixed(2);
undefined
console.log(price + typeof price);
123.00string
undefined

(toFixed의 경우 바로 사용할 경우 string이 출력되는 것을 확인할 수 있다.)
*/

// string이 아닌 number로 반환하는 방법 1

/* 

let a = 123;
undefined
let price = parseFloat(a.toFixed(2));
undefined
console.log(price + typeof price);
123number
undefined

*/

// string이 아닌 number로 반환하는 방법 2

/*

let a = 123;
undefined
let price = Number(a.toFixed(2));
undefined
console.log(price + typeof price);
123number
undefined

어째서 toFixed를 사용했을 때 결과 값이 문자열일 경우에는 소숫점이 출력이되지만
결과 값을 숫자로 강제로 변경하게되면 왜 소숫점이 출력되지 않을까?

*/

