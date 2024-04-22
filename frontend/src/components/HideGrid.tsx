/****************************************************************IMPORTS*/
/****************************************NPM MODULES*/
import { FC } from "react";
/****************************************************/

/*****************************************INTERFACES*/
import { IHideGrid } from "../interfaces";
/****************************************************/
/************************************************************************/


/**********************************************************MATRICE RANGE*/
export const HideGrid: FC<IHideGrid> = ({ hideGrid, setHideGrid }) => {
    return (
        !hideGrid ? (
            <button className="showHideButton" onClick={(): void => setHideGrid(true)}>Cacher grille</button>
        ) : (
            <button className="showHideButton" onClick={(): void => setHideGrid(false)}>Afficher grille</button>
        )
    );
};
/************************************************************************/