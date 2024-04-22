/****************************************************************IMPORTS*/
/****************************************NPM MODULES*/
import { FC } from "react";
/****************************************************/

/*****************************************INTERFACES*/
import { IBlackRange } from "../interfaces";
/****************************************************/
/************************************************************************/


/**********************************************************MATRICE RANGE*/
export const BlackRange: FC<IBlackRange> = ({ count, setCount }) => {
    const handleChangeRange = (e: any) => {
        setCount(e.target.value)
    };

    return (
        <div className='range'>
            <label htmlFor="range">Cases noires</label>
            <input onChange={(e): void => handleChangeRange(e)} type="range" id="range" min="0" max="10" value={count} />
        </div>
    );
};
/************************************************************************/