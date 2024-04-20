/****************************************************************IMPORTS*/
/****************************************NPM MODULES*/
import { Application, Request, Response } from 'express';
import _ from 'lodash';
/****************************************************/
/************************************************************************/


/*****************************************************************ROUTES*/
export default (app: Application): void => {
    /**
     * BUILD MATRICE
     * Used to create a matrice
     * @param {Request} req
     * @param {Response} res
    **/
    app.post('/matrice', (req: Request, res: Response): void => {
        const rows: number = req.body.rows;
        const cols: number = req.body.cols;

        let number: number = 1;

        const matrice: number[][] = [];

        for (let i = 0; i < rows; i++) {
            matrice[i] = [];

            for (let j = 0; j < cols; j++) {
                matrice[i][j] = number;

                number++;
            }
        }

        res.status(200).json({ matrice: matrice });
    });


    /**
     * GET COORDINATES
     * Used to get position
     * @param {Request} req
     * @param {Response} res
    **/
    app.post('/position', (req: Request, res: Response): void => {
        const matrice: number[][] = req.body.matrice;
        const position: number = req.body.position;

        console.log(position)

        let rowIndex: number = -1;
        let colIndex: number = -1;

        for (let i = 0; i < matrice.length; i++) {
            for (let j = 0; j < matrice[i].length; j++) {
                if (matrice[i][j] === position) {
                    rowIndex = i;
                    colIndex = j;

                    break;
                }
            }

            if (rowIndex !== -1 && colIndex !== -1) {
                break;
            }
        }

        if (rowIndex !== -1 && colIndex !== -1) {
            res.status(200).json({ coordinates: `[${rowIndex + 1}, ${colIndex + 1}]` });
        }
        else {
            res.status(404).json({ error: `Value out of the matrice` });
        }
    });
};
/************************************************************************/