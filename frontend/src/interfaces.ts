export interface ICoordinates {
    x: number;
    y: number;
};

export interface IMatrice {
    rows: number;
    cols: number;
    matrice: number[][];
    setMatrice: (matrice: number[][]) => void;
    x: number;
    setX: (x: number) => void;
    y: number;
    setY: (y: number) => void;
    handlePosition: Function;
    active: number;
    black: number[];
};

export interface ILaunch {
    x: number;
    y: number;
    move: Function;
};