/****************************************************************IMPORTS*/
/****************************************NPM MODULES*/
import { FC, ReactNode, useEffect, useState } from "react";
/****************************************************/

/*****************************************INTERFACES*/
import { IMatrice } from "../interfaces";
/****************************************************/
/************************************************************************/


/****************************************************************MATRICE*/
export const Matrice: FC<IMatrice> = ({ active, setActive, black }) => {
    /*********************************************STATES*/
    const [matrice, setMatrice] = useState<number[][]>([]);
    /****************************************************/

    /****************************************MIDDLEWARES*/
    // CREATE MATRICE
    useEffect((): void => {
        let number: number = 1;

        const matrice: number[][] = [];

        for (let i = 0; i < 100; i++) {
            matrice[i] = [];

            for (let j = 0; j < 100; j++) {
                matrice[i][j] = number;

                number++;
            }
        }

        setMatrice(matrice);
    }, []);
    /****************************************************/

    /*****************************************RETURN TSX*/
    return (
        <div className="matrice">
            <ul>
                {matrice.map((line: number[]): ReactNode => (
                    <li className="line">
                        {line.map((div: number): ReactNode => (
                            <div
                                className={`number ${active === div ? 'active' : ''} ${black.includes(div) ? 'black' : ''}`}
                                onClick={(): void => setActive(div)}
                            >
                                {div}
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