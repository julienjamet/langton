/****************************************************************IMPORTS*/
/****************************************NPM MODULES*/
import { FC, useEffect } from "react";
import axios, { AxiosError } from "axios";
import { IMatrice } from "../interfaces";
/****************************************************/
/************************************************************************/


/****************************************************************MATRICE*/
export const Matrice: FC<IMatrice> = ({ rows, cols, matrice, setMatrice, x, setX, y, setY, handlePosition, active, black }) => {
    /****************************************MIDDLEWARES*/
    // CREATE MATRICE
    useEffect((): void => {
        axios.post('http://localhost:3000/matrice', { rows: rows, cols: cols })

            .then((response: any): void => setMatrice(response.data.matrice))

            .catch((error: AxiosError): void => console.error(error))
        // eslint-disable-next-line
    }, [rows, cols]);

    // GET COORDINATES
    const getCoordinates = (number: number): void => {
        axios.post('http://localhost:3000/position', { matrice: matrice, position: number })

            .then((response: any): void => {
                setX(response.data.x);
                setY(response.data.y);
            })

            .catch((error: AxiosError): void => console.error(error))
    };
    /****************************************************/

    /*****************************************RETURN TSX*/
    return (
        <div className="matrice">
            <ul>
                {matrice.map((row: number[]) => (
                    <li className="line" style={{ height: `20px` }}>
                        {row.map((number: number) => (
                            <div
                                className={`number ${active === number ? 'active' : ''} ${black.includes(number) ? 'black' : ''}`}
                                style={{ width: `20px` }}
                                onMouseEnter={(): void => getCoordinates(number)}
                                onClick={(): void => handlePosition(number, x, y)}
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