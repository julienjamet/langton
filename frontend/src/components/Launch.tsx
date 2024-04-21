/****************************************************************IMPORTS*/
/****************************************NPM MODULES*/
import { FC } from "react";
/****************************************************/

/*****************************************INTERFACES*/
import { ILaunch } from "../interfaces";
/****************************************************/
/************************************************************************/


/************************************************************COORDINATES*/
export const Launch: FC<ILaunch> = ({ x, y, move }) => {
    /*****************************************RETURN TSX*/
    return (
        <button className="launch" onClick={() => move(x, y)}>Lancer simulation</button>
    );
    /****************************************************/
};
/************************************************************************/