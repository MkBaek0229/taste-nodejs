"use strict"

import express from "express";
import path from "path";
import { fileURLToPath } from "url";

// Express 애플리케이션을 생성합니다.
const app = express();

//1. import.meta.url : 현재 모듈의 URL을 얻습니다
//2. fileURLToPath 함수를 사용하여 URL을 파일 경로로 변환합니다.
//3. path.dirname 함수를 사용하여 파일 경로에서 디렉토리 경로를 추출합니다.
const __dirname = path.dirname(fileURLToPath(import.meta.url));


// 정적 파일을 제공할 디렉토리를 설정합니다. 
//path.join() 함수를 사용하여 __dirname과 src/public 경로를 올바르게 연결
app.use(express.static(path.join(__dirname, "src", "public")));



// 라우팅
import home from "./src/routes/home/index.js";



// 앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use("/", home); // use -> 미들웨어 등록해주는 메서드


export default app;