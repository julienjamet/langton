/****************************************************************IMPORTS*/
/****************************************NPM MODULES*/
import { FC, useState, useEffect } from "react";
import axios, { AxiosError } from "axios";
/****************************************************/

/*****************************************COMPONENTS*/
import { Matrice } from "./components/Matrice";
import { Launch } from "./components/Launch";
import { BlackRange } from "./components/BlackRange";
import { HideGrid } from "./components/HideGrid";
/****************************************************/
/************************************************************************/


/********************************************************************APP*/
export const App: FC = () => {
  /*********************************STATES & VARIABLES*/
  const [matrice, setMatrice] = useState<number[][]>([]);
  const [black, setBlack] = useState<number[]>([]);
  const [count, setCount] = useState<number>(0);
  const [active, setActive] = useState<number>(0);
  const [hideGrid, setHideGrid] = useState<boolean>(false);
  /****************************************************/

  /****************************************MIDDLEWARES*/
  // CREATE MATRICE
  useEffect((): void => {
    let number: number = 1;

    const matrice: number[][] = [];

    for (let i = 0; i < 100; i++) {
      matrice[i] = [];

      for (let j = 0; j < 100; j++) {
        matrice[i][j] = number;

        number++;
      }
    }

    setMatrice(matrice);
  }, []);

  // SET BLACK
  useEffect((): void => {
    const min = 1;
    const max = 100 * 100;
    const blackCount: number = 100 * count;
    const black = [];

    for (let i = 0; i < blackCount; i++) {
      const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      black.push(randomNumber);
    }

    setBlack(black);
  }, [count])

  // SET POSITION
  const handlePosition = (number: number): void => {
    setActive(number);
  };

  // MOVE
  const move = (black: number[], active: number, direction: string): void => {
    axios.post('http://localhost:3000/move', { black: black, active: active, direction: direction })

      .then((response: any): void => {
        const newDirection: string = response.data.direction;

        let updatedActive = active;

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

        const isActiveInBlack = black.includes(active);

        let updatedBlack = black;

        if (isActiveInBlack) {
          updatedBlack = black.filter(num => num !== active);
        }
        else {
          updatedBlack = [...black, active];
        }

        setBlack(updatedBlack);
        setActive(updatedActive);

        move(updatedBlack, updatedActive, newDirection);
      })

      .catch((error: AxiosError): void => console.error(error))
  };
  /****************************************************/

  /*****************************************RETURN TSX*/
  return (
    <>
      <BlackRange count={count} setCount={setCount} />

      <HideGrid hideGrid={hideGrid} setHideGrid={setHideGrid} />

      <Launch move={move} black={black} active={active} />

      <Matrice
        matrice={matrice}
        handlePosition={handlePosition}
        active={active}
        black={black}
        hideGrid={hideGrid}
      />
    </>
  );
  /****************************************************/
};
/************************************************************************/