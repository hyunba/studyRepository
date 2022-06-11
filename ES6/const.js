// const es6 = 'javascript';
// es6 = 'ECMAScript 6';
// Uncaught TypeError: Assignment to constant variable. 출력
// 이는 프로그램에서 값을 변경하려고 시도하는 경우에 오류가 발생

var es6 = 'javascript';
if(es6) {
    var es6 = 'ECMASCript';
    console.log('블록 변수 :', es6);
}
console.log('글로벌 변수: ', es6);
// ----------- 출력 ----------
// 블록 변수 : ECMASCript
// 글로벌 변수:  ECMASCript
// 이는 var 키워드가 글로벌 변수를 덮어 씌웠기 때문에 발생한 현상이다.

var es6 = 'javascript';
if(es6) {
    let es6 = 'ECMASCript';
    console.log('블록 변수 :', es6);
}
console.log('글로벌 변수: ', es6);
// ----------- 출력 ----------
// 블록 변수 : ECMASCript
// 글로벌 변수:  javascript
// 이는 let 키워드를 사용 시 변수의 영역을 코드 블록 안으로 한정시키기 때문에 글로벌 변수를 보호한다.
