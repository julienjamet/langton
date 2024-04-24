/****************************************************************IMPORTS*/
/****************************************NPM MODULES*/
import { FC } from "react";
/****************************************************/

/*****************************************INTERFACES*/
import { IOver } from "../interfaces";
/****************************************************/
/************************************************************************/


/************************************************************COORDINATES*/
export const Over: FC<IOver> = ({ over, setBlack, setBlackCount, setActive, setLaunch, setMovesCount, setOver }) => {
    /****************************************MIDDLEWARES*/
    const reset: Function = (): void => {
        setBlack([]);
        setBlackCount(0);
        setActive(4949);
        setLaunch(false);
        setMovesCount(0);
        setOver(false);
    };
    /****************************************************/

    /*****************************************RETURN TSX*/
    return (
        over ? (
            <div className="over">
                <div>Simulation terminée</div>

                <div className="icon">
                    <i className="fa-solid fa-rotate" title='Réinitialiser' onClick={(): void => reset()}></i>
                </div>
            </div>
        ) : null
    );
    /****************************************************/
};
/************************************************************************/