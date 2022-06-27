// promise ? 비동기를 간편하게 처리할 수 있도록 도와주는 오브젝트
// 정해진 기능을 수행하고 나서 정상적으로 기능이 수행된다면 처리된 결과 값을 전달함
// JS 내부에 내장되어져있는 오브젝트이다.
const promise = new Promise((resolve, reject) => {
    // promise는 class이기 때문에 new라는 키워드를 이용해서 object를 생성할 수 있다.
    // Promise의 생성자를 보면 두 가지의 callback 함수를 받는데 
    // 1. resolve : 기능을 정상적으로 수행해서 마지막에 최종데이터를 전달
    // 2. reject : 기능을 수행하다가 중간에 문제가 생기면 호출함
    /*-----------------------------------------------------------------------------*/
    // 우리가 네트워크에서 헤비한 데이터들을 받아올 때 시간이 꽤 걸리는데 이러한 데이터를 받아오는 과정에서 Synchronous(동기)로 처리하게되면
    //우리가 파일을 읽어오고 네트워크에서 데이터를 받아오는동안 다음 라인의 코드가 실행되지않기 때문에 시간이 걸리는 데이터들은 
    // Asynchronous(비동기)로 처리하는 것이 좋다.
    /*-----------------------------------------------------------------------------*/
    // 새로운 promise가 만들어질 때는 우리가 전달한 executor라는 함수가 바로 실행된다.
    setTimeout(()=> {
        resolve('hyunba'); // 일이 잘 처리되면 hyunba라는 값을 전달해준다.
        // reject(new Error('no network')); reject는 보통 Error라는 오브젝트를 통해 값을 전달하는데 이 Error라는 클래스는 JS에서 제공하는 오브젝트중 하나다.
    }, 2000);
});

promise
    .then((value) => {
        console.log(value); // value는 resolve라는 callback함수에서 전달된 hyunba 값이 2초뒤에 전달된다.
    // then은 promise가 정상적으로 잘 수행이되어서 마지막에 최종적으로 resolve라는 callback 함수를 통해 전달한 이 값이 value의 파라미터로 전달되어진다.
    })
    .catch(error => {
        console.log(error);
    }); // chaining 중에 finally도 있는데 이것은 성공이든 실패든 무조건 실행한다.

// Promise chainging
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000); // 1초 뒤에 숫자 1 출력
});

fetchNumber
    .then(num => num*2) // 1 * 2 = 2
    .then(num => num*3) // 2 * 3 = 6
    .then(num => { // 6
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(num - 1), 1000); // 6 - 1 = 5
        });
    })
    .then(num => console.log(num)); // 5
// 23:00