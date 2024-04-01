"use strict";

function UserStorage() {
     // 외부에서 접근할 수 없는 변수 users 선언
    const users = {
        id: ["alsrl6678", "백개발", "백팀장"],
        password: ["1234", "1234", "123456"],
        name: ["백민기", "백개발", "백팀장"],
    }
 // users 객체를 반환하는 getter 함수

 // ...fileds 인자로넘어온 값들 배열화 ex [ 'id', 'password' ]
 function getUsers(...fileds) {
    const newUsers = fileds.reduce((newUsers,field)=> {
        if (users.hasOwnProperty(field)) {
            newUsers[field] = users[field];
        }
        return newUsers;
    }, {});
    return newUsers;
}
// getUsers 함수를 외부로 공개
return {
    getUsers: getUsers
};
}

export default UserStorage;