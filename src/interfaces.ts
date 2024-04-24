export interface ISpeed {
    speed: number;
    setSpeed: (speed: number) => void;
};

export interface IBlackCount {
    blackCount: number;
    setBlackCount: (blackCount: number) => void;
};

export interface IMovesCount {
    movesCount: number;
};

export interface ILaunch {
    setLaunch: (launch: boolean) => void;
};

export interface IOver {
    over: boolean;
    setBlack: (black: number[]) => void;
    setBlackCount: (blackCount: number) => void;
    setActive: (active: number) => void;
    setLaunch: (launch: boolean) => void;
    setMovesCount: (movesCount: number) => void;
    setOver: (over: boolean) => void;
};

export interface IMatrice {
    active: number;
    setActive: (active: number) => void;
    black: number[];
};