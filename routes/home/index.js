"use strict"

import express from "express";
import ctrl from "./home.ctrl.js"

const router = express.Router();

router.get("/", ctrl.home)

router.get("/login", ctrl.login)

export default router;   