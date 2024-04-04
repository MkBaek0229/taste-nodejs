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

function getUserInfo(id) {
    // 사용자가 입력한 아이디값이 users객체에 존재하는지 존재하면 몇번째 인덱스에 존재하는지 확인후 idx 변수에 인덱스번호저장
    //  id == "alsrl6678" idx == 0
    const idx = users.id.indexOf(id);
    const usersKeys = Object.keys(users) // => [id, password , name]
    const userInfo = usersKeys.reduce((newUser, info) => {
        // users[id][0] == "alsrl6678" users[password][0] = "1234" users[name][0] = "백민기"
        newUser[info] = users[info][idx];
        return newUser;
    }, {});

    return userInfo;
}


// getUsers 함수를 외부로 공개
return {
    getUsers: getUsers,
    getUserInfo: getUserInfo,
};
}

export default UserStorage;