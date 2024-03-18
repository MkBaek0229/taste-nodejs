"use strict"

import express from "express";
import ctrl from "./home.ctrl.js"

const router = express.Router();

router.get("/", ctrl.output.home)

router.get("/login", ctrl.output.login)

router.post("/login", ctrl.process.login)


export default router;   