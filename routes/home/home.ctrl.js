"use strict";


const home = (req, res) => {
    res.render("home/index");
}

const login = (req, res) => {
    res.render("home/login");
}


const ctrl = { home, login };

export default ctrl;