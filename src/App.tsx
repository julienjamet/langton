/****************************************************************IMPORTS*/
/****************************************NPM MODULES*/
import { FC, useEffect, useState } from "react";
/****************************************************/

/*****************************************COMPONENTS*/
import { Speed } from "./components/Speed";
import { Launch } from "./components/Launch";
import { Matrice } from "./components/Matrice";
import { Count } from "./components/Count";
/****************************************************/
/************************************************************************/


/********************************************************************APP*/
export const App: FC = () => {
  /*********************************************STATES*/
  const [speed, setSpeed] = useState<number>(1000);
  const [black, setBlack] = useState<number[]>([]);
  const [active, setActive] = useState<number>(4949);
  const [launch, setLaunch] = useState<boolean>(false);
  const [count, setCount] = useState<number>(0);

  let moves: number = 0;
  /****************************************************/

  /****************************************MIDDLEWARES*/
  // CHECK SPEED
  useEffect((): void => {
    if (speed === 10) {
      setSpeed(1000);
    }
  }, [speed]);

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
    setCount(moves);

    // RECURSIVELY LAUNCH MOVE FUNCTION
    setTimeout((): void => {
      active < 10000 && move(updatedBlack, updatedActive, newDirection);
    }, 1000 / speed);
  };

  // LAUNCH MOVE FUNCTION
  useEffect((): void => {
    launch && move(black, active, 'up');
  }, [launch]);
  /****************************************************/

  /*****************************************RETURN TSX*/
  return (
    <>
      <Speed speed={speed} setSpeed={setSpeed} />

      <Count count={count} />

      <Launch setLaunch={setLaunch} />

      <Matrice active={active} setActive={setActive} black={black} />
    </>
  );
  /****************************************************/
};
/************************************************************************/