// JavaScript is synchronous. (JS는 동기적인 아이)
// JS는 호이스팅이 된 이후부터 코드가 작성한 순서에 맞춰 하나하나씩 동기적으로 실행된다.
// 호이스팅 ? var 변수와 함수 선언들이 제일 위로 올라가는 것
console.log('1');
setTimeout(() => console.log('2'), 1000);
console.log('3');

// Synchronous(동기) callback
function printImmediately(print) {
    print();
}
printImmediately(() => console.log('hello'));

// Asynchronous(비동기) callback
function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
}
printWithDelay(() => console.log('async callback'), 2000);

// Callback example 
// Callback Chain의 문제점
// 가독성이 떨어진다. 디버깅의 경우에도 어렵다. 방법자체가 좋지않다.
// 이를 해결하기위해 promise와 async를 사용하게된다.
class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        setTimeout(() => {
            if (
                (id === 'hyunba' && password === '1234')
            ) {
                onSuccess(id);
            } else {
                onError(new Error('not found'));
            }
        }, 2000);
    }

    getRoles(user, onSuccess, onError){
        setTimeout(() => {
            if (user === 'hyunba') {
                onSuccess({ name: 'hyunba', role: 'admin'});
            } else {
                onError(new Error('no access'));
            }
        }, 1000);
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
    id,
    password,
    user => {
        userStorage.getRoles(
            user,
            userWithRole => {
                alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
            },
            error => {console.log(error)},
        );
    },
    error => {console.log(error)},
)
