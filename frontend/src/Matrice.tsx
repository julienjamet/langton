/****************************************************************IMPORTS*/
/****************************************NPM MODULES*/
import { FC, useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
/****************************************************/
/************************************************************************/


/****************************************************************MATRICE*/
export const Matrice: FC = () => {
    /*********************************STATES & VARIABLES*/
    const [matrice, setMatrice] = useState<number[][]>([]);
    const [position, setPosition] = useState<string>('');

    const rows: number = 40;
    const cols: number = 40;
    /****************************************************/

    useEffect((): void => {
        axios.post('http://localhost:3000/matrice', { rows: rows, cols: cols })

            .then((response: any): void => setMatrice(response.data.matrice))

            .catch((error: AxiosError): void => console.log(error))
    }, [rows, cols]);


    const getPosition = (number: number): void => {
        axios.post('http://localhost:3000/position', { matrice: matrice, position: number })

            .then((response: any): void => setPosition(response.data.coordinates))

            .catch((error: AxiosError): void => console.log(error))
    };

    console.log(position);
    /*****************************************RETURN TSX*/
    return (
        <div className="matrice">
            <ul>
                {matrice.map((row: number[]) => (
                    <li className="line">
                        {row.map((number: number) => (
                            <div className="number" onClick={(): void => getPosition(number)}>{number}</div>
                        ))}
                    </li>
                ))}
            </ul>
        </div>
    );
    /****************************************************/
};
/************************************************************************/