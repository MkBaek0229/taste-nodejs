    "use strict";


    import UserStorage from "./UserStorage.js";

    class User {
        constructor(body) {
            this.body = body;
        }

        login() {
            const body = this.body;
            const users = UserStorage();
            // 입력된 아이디를 getUserInfo 함수에 전달한뒤 리턴된값을 id password에담기
            const {id, password} = users.getUserInfo(body.id);

            
            // id존재하면 일치하는지확인
            if(id){
                if (id === body.id && password === body.password){
                    return { success : true};
                }
                return { success: false, msg: "비밀번호가 틀렸습니다."};

            }
            return { success: false, msg: "존재하지 않는 아이디입니다."};
        }
    }


    export default User