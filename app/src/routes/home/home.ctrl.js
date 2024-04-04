"use strict";

import User from "../../models/User.js";



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
        // 클라이언트가 전달한 Request 데이터를 받아 인스턴스화시킴
        // 인스턴스 변수 user는 클라이언트가 요청한 데이터를 계속들고다님
    const user = new User(req.body);
    // 그 인스턴스 변수 user가 login이라는 메서드를 호출
    const response = user.login();
    console.log(response);
    return res.json(response);
 
    },
}
const ctrl = { output, process};

export default ctrl;