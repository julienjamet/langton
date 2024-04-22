/****************************************************************IMPORTS*/
/****************************************NPM MODULES*/
import express, { Application } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import path from 'path';
/****************************************************/

/**************************************EMAILS ROUTER*/
import Router from './router';
/****************************************************/
/************************************************************************/


/********************************************************************APP*/
const app: Application = express();

/********************SECURITY BASICS AND JSON PARSER*/
app.use(cors());
app.use(helmet());
app.use(express.json());
/****************************************************/

// #################################
// REDIRECT TO FRONTEND
app.use('/*', (req, res) => {
    res.sendFile(path.resolve('../../frontend/build/index.html'));
});
// #################################

/*********************************ROUTER DECLARATION*/
Router(app);
/****************************************************/

/******************************************LISTENING*/
const port: string = process.env._port || '3000';

app.listen(port, (): void => console.log(`Server is listening on port ${port}`));
/****************************************************/
/************************************************************************/