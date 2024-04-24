export interface ISpeed {
    speed: number;
    setSpeed: (speed: number) => void;
};

export interface ICount {
    count: number;
};

export interface ILaunch {
    setLaunch: (launch: boolean) => void;
};

export interface IMatrice {
    active: number;
    setActive: (active: number) => void;
    black: number[];
};

export interface IMovesCount {
    movesCount: number;
};