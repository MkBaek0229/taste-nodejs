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
    
      
 
        const response = {};
         // UserStorage 모듈에서 getUsers 메서드를 호출하여 users 객체에 접근
         const users = UserStorage();
        const user =  users.getUsers("id", "password",); // users 객체 출력
   
         
     if (user.id.includes(id)) {
       const idx = user.id.indexOf(id);
        if (user.password[idx] === password) {
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