// async와 await은 promise를 더 간편하고 간결하게 동기적으로 실행되는 것처럼 보이게 만들어주는 것이다.
// 무조건 promise 대신 async와 await을 사용해야하는 것은 아님. promise를 유지해서 사용해야 맞는게 있고 async, await으로 변환해야 깔끔해지는 경우가 있다.
// 무언가 오래걸리는 코드를 비동기적인 처리를 전혀하지 않으면 자바스크립트 엔진은 동기적으로(한줄한줄) 수행하기 때문에
// 우리가 비동기적인 처리를 전혀하지않으면 사용자의 데이터를 받아오는데 10초가 걸리기 때문에 만약 뒤에서 웹페이지의 기능을 수행하는 코드들이 있다면
// 위의 호출이 끝나는 동안 데이터가 웹페이지에 표시되지 않기 때문에 사용자들은 10초정도 비어있는 웹페이지를 보게될 것이다.
// 그렇기 때문에 이렇게 오래걸리는 일들은 비동기적으로 처리해주어야한다.

// 1. async

//------------------- 그냥 함수 ----------------------
// function fetchUser() {
//     // 10초 이상 걸리는 데이터 호출
//     return 'hyunba';
// }

//------------------- promise ------------------------
// function fetchUser() {
//     return new Promise((resolve, reject) => {
//          10초 이상 걸리는 데이터 호출...
//          resolve('hyunba');
//  });
// }

//------------------- async --------------------------
async function fetchUser(){ // 함수 앞에 async라는 키워드를 붙여주면 번거롭게 promise를 사용하지않아도 자동적으로 함수안에있는 코드 블록들이 promise로 변환이 되어진다.
    // 10초 이상 걸리는 데이터 호출
    return 'hyunba';
}

const user = fetchUser();
user.then(console.log);
console.log(user); 

// 2. await 
// await은 async가 붙은 함수 안에서만 사용할 수 있다.

function delay(ms) {
    return new Promise(resolve => setTimeout(reslve, ms));
}

async function getApple() {
    await delay(1300);
    return '🍎';
}

async function getBanana() {
    await delay(1200);
    return '🍌';
}

function pickFruits() {
    const apple = await getApple();
    const banana = await getBanana();
    return `${apple} + ${banana}`;
}

pickFruits().then(console.log);

// async, await와 같이 promise 사용
// 1. Promise.all
function pickAllFruits() {
    return Promise.all([getApple(), getBanana()]) // promise 배열을 전달하게되면 모든 promise들이 병렬적으로 다 받을 때까지 모아주는 역할
    .then(fruits => fruits.join(' + ')) // then = 함수가 다 받아지면, 과일의 배열이 전달받아서 배열을 string으로 묶을 수 있는 join을 사용해서 묶어준다.
}
pickAllFruits().then(console.log);

// 2. Promise.race
function pickOnlyOne() {
    return Promise.race([getApple(), getBanana()]); // race라는 api를 사용하게되면 배열에 전달된 promise 중 가장 먼저 값을 return하는 함수만 절달됨
}

pickOnlyOne().then(console.log); // 바나나 출력 (why? 현재 사과는 1.3초 뒤에 출력되고 바나나는 1.2초뒤에 출력되기 때문 race를 사용함에 따라 바나나만 출력)