// 1. object를 json으로 변환
// stringfy(obj)
let json = JSON.stringify(true);
console.log(json); // true 출력

json = JSON.stringify(['apple', 'banana']);
console.log(json); // ["apple", "banana"] 출력 

const rabbit = { // 토끼라는 object를 json으로 변경
    name: 'hyunba',
    color: 'white',
    size: null,
    birthDate: new Date(),
    jump: () => { 
        // 함수는 json에 포함되지 않는데 이런 이유는 함수는 object에 있는 데이터가 아니기 때문에 함수는 제외된다.
        console.log(`{$name} can jump!`);
    },
};

json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ['name']); // 콤마를 하게되면 replacer라는 것이 있는데 배열에 원하는 프로퍼티만 골라서 정의할 수 있다.
console.log(json);

// 2. json을 object로 변환
// parse(json)
console.clear();
json = JSON.stringify(rabbit);
const obj = JSON.parse(json); // json에 있는 parse라는 api를 이용해서 변환하고 싶은 json을 전달해주기만 하면된다.
console.log(obj);
rabbit.jump();