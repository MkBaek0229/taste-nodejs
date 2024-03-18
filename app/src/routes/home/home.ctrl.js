"use strict";

import UserStorage from "../../models/UserStorage.js";

const output = {
    home: (req, res) => {
        res.render("home/index");
    },
    login: (req, res) => {
        res.render("home/login");
    },
};


const process = {
    login: (req, res) => {
        const id = req.body.id,
        password = req.body.password;
        
         // UserStorage 모듈에서 getUsers 메서드를 호출하여 users 객체에 접근
         const users = UserStorage().getUsers("id", "password");
         console.log(users); // users 객체 출력
   
         const response = {};
     if (users.id.includes(id)) {
       const idx = users.id.indexOf(id);
        if (users.password[idx] === password) {
           response.success = true;
           return res.json(response);
        }
    }
    
    response.success = false;
    response.msg = "로그인에 실패하셨습니다."
    return res.json(response);    
    },
}
const ctrl = { output, process};

export default ctrl;