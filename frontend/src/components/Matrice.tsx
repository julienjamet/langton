/****************************************************************IMPORTS*/
/****************************************NPM MODULES*/
import { FC } from "react";
import { IMatrice } from "../interfaces";
/****************************************************/
/************************************************************************/


/****************************************************************MATRICE*/
export const Matrice: FC<IMatrice> = ({ matrice, handlePosition, active, black, hideGrid }) => {
    /*****************************************RETURN TSX*/
    return (
        <div className="matrice">
            <ul>
                {matrice.map((row: number[]) => (
                    <li className="line">
                        {row.map((number: number) => (
                            <div
                                className={`number ${active === number ? 'active' : ''} ${black.includes(number) ? 'black' : ''} ${hideGrid ? 'hide' : ''}`}
                                onClick={(): void => handlePosition(number)}
                            >
                                {number}
                            </div>
                        ))}
                    </li>
                ))}
            </ul>
        </div>
    );
    /****************************************************/
};
/************************************************************************/