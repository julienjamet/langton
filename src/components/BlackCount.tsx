/****************************************************************IMPORTS*/
/****************************************NPM MODULES*/
import { FC } from "react";
/****************************************************/

/*****************************************INTERFACES*/
import { IBlackCount } from "../interfaces";
/****************************************************/
/************************************************************************/


/**********************************************************MATRICE RANGE*/
export const BlackCount: FC<IBlackCount> = ({ blackCount, setBlackCount }) => {
    /*****************************************RETURN TSX*/
    return (
        <div className='range blackCount'>
            <label htmlFor="range">Cases noires</label>
            <input onChange={(e): void => setBlackCount(Number(e.target.value))} type="range" id="range" min="0" max="3" value={blackCount} />
        </div>
    );
    /****************************************************/
};
/************************************************************************/