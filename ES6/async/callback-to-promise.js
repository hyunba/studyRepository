class UserStorage {
    loginUser(id, password) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (
                    (id === 'hyunba' && password === '1234')
                ) {
                    resolve(id);
                } else {
                    reject(new Error('not found'));
                }
            }, 2000);
        });
    }

    getRoles(user){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (user === 'hyunba') {
                    resolve({ name: 'hyunba', role: 'admin'});
                } else {
                    reject(new Error('no access'));
                }
            }, 1000);
        });
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
// userStorage에 loginUser를 호출해서 여기에 id와 password를 전달한다음에 이것이 잘 작동되면 .then로 user를 받아와서 userStorage안에 있는 getRoles를 호출한다.
// 사용자의 역할을 잘 받아오면 다음 .then으로 alert을 작동하게 할거다 라는 내용!
userStorage
    .loginUser(id, password)
    .then(userStorage.getRoles)
    .then(user => alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`))
    .catch(console.log); // 오류 시 console.log에 남겨준다.

// userStorage.loginUser(
//     id,
//     password,
//     user => {
//         userStorage.getRoles(
//             user,
//             userWithRole => {
//                 alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
//             },
//             error => {console.log(error)},
//         );
//     },
//     error => {console.log(error)},
// )
