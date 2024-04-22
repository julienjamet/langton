"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/****************************************************/
/************************************************************************/
/*****************************************************************ROUTES*/
exports.default = (app) => {
    /**
     * BUILD MATRICE
     * Used to create a matrice
     * @param {Request} req
     * @param {Response} res
    **/
    app.post('/matrice', (req, res) => {
        const rows = req.body.rows;
        const cols = req.body.cols;
        let number = 1;
        const matrice = [];
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
    app.post('/position', (req, res) => {
        const matrice = req.body.matrice;
        const position = req.body.position;
        let rowIndex = -1;
        let colIndex = -1;
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
            res.status(200).json({ x: colIndex + 1, y: rowIndex + 1 });
        }
        else {
            res.status(404).json({ error: `Value out of the matrice` });
        }
    });
    /**
     * MOVE
     * Used to make the ant move
     * @param {Request} req
     * @param {Response} res
    **/
    app.post('/move', (req, res) => {
        let black = req.body.black;
        let active = req.body.active;
        let direction = req.body.direction;
        // Détermine la couleur de la case actuelle
        const isBlack = black.includes(active); // Utilisation d'un nombre unique pour identifier chaque case
        let newDirection;
        // Logique pour déterminer la prochaine direction en fonction de la couleur et de la direction actuelle
        if (isBlack) {
            // Si la case est noire
            if (direction === 'up') {
                newDirection = 'left';
            }
            else if (direction === 'down') {
                newDirection = 'right';
            }
            else if (direction === 'left') {
                newDirection = 'down';
            }
            else if (direction === 'right') {
                newDirection = 'up';
            }
        }
        else {
            // Si la case est blanche
            if (direction === 'up') {
                newDirection = 'right';
            }
            else if (direction === 'down') {
                newDirection = 'left';
            }
            else if (direction === 'left') {
                newDirection = 'up';
            }
            else if (direction === 'right') {
                newDirection = 'down';
            }
        }
        res.status(200).json({ direction: newDirection });
    });
};
/************************************************************************/ 
