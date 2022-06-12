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

const first = '홍';
const middle = '길';
const last = '동';

const introduce = `저의 이름은 ${first}${middle}${last} 입니다. 감사합니다.`

console.log(first+middle+last);
console.log(`${first} ${middle} ${last}`);
console.log(introduce);
// 템플릿 문자열
// 백틱으로 감싼 템플릿 문자열은 ${} 내부에 값을 만들어낸다.
// 그 안에는 자바스크립트 식과 변수가 들어갈 수 있다.

const user = {
    name : 'Hong',
    age : 20,
    //favorite : {number:20},
};
console.log(user.name, user.age);
// Object
// 여러 문자, 숫자를 한 변수에 저장하기 위해 쓰임
console.log(user?.name, user?.age);
// optional chaining 연산자
// 왼쪽의 user의 자료가 텅 비었다면 오른쪽을 해주지 않는다는 내용이다.
// object 자료들이 중첩이 되어있을 때 그 자료들을 안전하게 쓰고싶을때 이 문법을 사용하면 좋다.
// 실무로 예를들면 
console.log(user.favorite?.number); // 일반적으로 사용하게되면 20이 출력되겠지만 favorite이 없어진다면
// error가 나면서 이 부분에서 코드실행이 중단이 된다. 즉 밑에 있는 코드들은 실행이 되지 않는다.
// 이런 에러를 미리 예방하기위해 if문으로 예외처리를 해주면되지만 ?를 사용해서도 에러를 처리해줄수있다.
// 이 문법은 ?를 기준으로 왼쪽의 자료가 undefined거나 null이면 오른쪽을 실행해주지않고 자리에 undefined를 남겨준다.
// tip 중첩된 object 자료들일때만 사용한다. 하나의 object는 알아서 undefined가 출력되므로 사용하나마나이다.
console.log(user.favorite?.number ?? 'loading'); // 추가로 신 문법 ?? 이 생겼는데
// 이는 왼쪽의 자료가 undefined일 경우 오른쪽의 내용을 보여주는 식이다.