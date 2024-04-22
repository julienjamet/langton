"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/****************************************************************IMPORTS*/
/****************************************NPM MODULES*/
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
/****************************************************/
/**************************************EMAILS ROUTER*/
const router_1 = __importDefault(require("./router"));
/****************************************************/
/************************************************************************/
/********************************************************************APP*/
const app = (0, express_1.default)();
/********************SECURITY BASICS AND JSON PARSER*/
app.use((0, cors_1.default)());
app.use((0, helmet_1.default)());
app.use(express_1.default.json());
/****************************************************/
/*********************************ROUTER DECLARATION*/
(0, router_1.default)(app);
/****************************************************/
/******************************************LISTENING*/
const port = process.env._port || '3000';
app.listen(port, () => console.log(`Server is listening on port ${port}`));
/****************************************************/
/************************************************************************/ 
