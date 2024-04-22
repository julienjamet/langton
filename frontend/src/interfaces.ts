export interface ICoordinates {
    x: number;
    y: number;
};

export interface IMatrice {
    matrice: number[][];
    handlePosition: Function;
    active: number;
    black: number[];
    hideGrid: boolean;
};

export interface ILaunch {
    move: Function;
    black: number[];
    active: number;
};

export interface IMatriceRange {
    setCols: (cols: number) => void;
};

export interface IBlackRange {
    count: number;
    setCount: (count: number) => void;
};

export interface IHideGrid {
    hideGrid: boolean;
    setHideGrid: (hideGrid: boolean) => void;
};

export interface IMovesCount {
    movesCount: number;
};