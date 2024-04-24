/****************************************************************IMPORTS*/
/****************************************NPM MODULES*/
import { FC, useEffect, useState } from "react";
/****************************************************/

/*****************************************COMPONENTS*/
import { Speed } from "./components/Speed";
import { Launch } from "./components/Launch";
import { Matrice } from "./components/Matrice";
import { MovesCount } from "./components/Count";
import { BlackCount } from "./components/BlackCount";
import { Over } from "./components/Over";
/****************************************************/
/************************************************************************/


/********************************************************************APP*/
export const App: FC = () => {
  /*********************************************STATES*/
  const [speed, setSpeed] = useState<number>(1000);
  const [black, setBlack] = useState<number[]>([]);
  const [blackCount, setBlackCount] = useState<number>(0);
  const [active, setActive] = useState<number>(4949);
  const [launch, setLaunch] = useState<boolean>(false);
  const [movesCount, setMovesCount] = useState<number>(0);
  const [over, setOver] = useState<boolean>(false);

  let moves: number = 0;
  /****************************************************/

  /****************************************MIDDLEWARES*/
  // CHECK SPEED
  useEffect((): void => {
    if (speed === 10) {
      setSpeed(1000);
    }
  }, [speed]);

  // SET BLACK
  useEffect((): void => {
    const min: number = 1;
    const max: number = 10000;
    let i: number = 0;
    const totalBlackCount: number = 100 * blackCount;
    const black: number[] = [];

    while (i < totalBlackCount) {
      const randomNumber: number = Math.floor(Math.random() * (max - min + 1)) + min;

      black.push(randomNumber);

      i++;
    }

    setBlack(black);
  }, [blackCount]);

  // MOVE
  const move = (black: number[], active: number, direction: string): void => {
    const isActiveBlack: boolean = black.includes(active) ? true : false;

    let newDirection: string = '';
    let updatedActive: number = active;
    let updatedBlack: number[] = black;

    moves++;

    // UPDATE BLACK ARRAY AND DETERMINE NEW DIRECTION
    if (isActiveBlack) {
      updatedBlack = black.filter(number => number !== active);

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
      updatedBlack = [...black, active];

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

    // DETERMINE NEW POSITION
    if (newDirection === 'up') {
      updatedActive = active - 100;
    }
    else if (newDirection === 'down') {
      updatedActive = active + 100;
    }
    else if (newDirection === 'left') {
      updatedActive = active - 1;
    }
    else if (newDirection === 'right') {
      updatedActive = active + 1;
    }

    // SET STATES
    setBlack(updatedBlack);
    setActive(updatedActive);
    setMovesCount(moves);

    // RECURSIVELY LAUNCH MOVE FUNCTION
    setTimeout((): void => {
      active > 0 && active < 10001 && move(updatedBlack, updatedActive, newDirection);
    }, 1000 / speed);
  };

  // LAUNCH MOVE FUNCTION
  useEffect((): void => {
    launch && move(black, active, 'up');
    // eslint-disable-next-line
  }, [launch]);

  // CHECK IF SIMULATION IS OVER
  useEffect((): void => {
    if (active < 1 || active > 10000) {
      setOver(true);
    }
  }, [active]);
  /****************************************************/

  /*****************************************RETURN TSX*/
  return (
    <>
      <Speed speed={speed} setSpeed={setSpeed} />

      <BlackCount blackCount={blackCount} setBlackCount={setBlackCount} />

      <MovesCount movesCount={movesCount} />

      <Launch setLaunch={setLaunch} />

      <Over
        over={over}
        setBlack={setBlack}
        setBlackCount={setBlackCount}
        setActive={setActive}
        setLaunch={setLaunch}
        setMovesCount={setMovesCount}
        setOver={setOver} />

      <Matrice active={active} setActive={setActive} black={black} />
    </>
  );
  /****************************************************/
};
/************************************************************************/