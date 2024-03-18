"use strict"

import express from "express";
const app = express();


// 라우팅
import home from "./routes/home/index.js";



// 앱 세팅
app.set("views", "./views");
app.set("view engine", "ejs");

app.use("/", home); // use -> 미들웨어 등록해주는 메서드


export default app;