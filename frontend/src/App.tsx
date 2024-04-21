/****************************************************************IMPORTS*/
/****************************************NPM MODULES*/
import { FC, useEffect, useState } from "react";
/****************************************************/

/*****************************************COMPONENTS*/
import { Matrice } from "./components/Matrice";
import { Coordinates } from "./components/Coordinates";
import { Launch } from "./components/Launch";
import axios, { AxiosError } from "axios";
/****************************************************/
/************************************************************************/


/********************************************************************APP*/
export const App: FC = () => {
  /*********************************STATES & VARIABLES*/
  const rows: number = 40;
  const cols: number = 40;
  const [matrice, setMatrice] = useState<number[][]>([]);
  const [black, setBlack] = useState<number[]>([]);

  const [x, setX] = useState<number>(0);
  const [y, setY] = useState<number>(0);

  const [selectedX, setSelectedX] = useState<number>(0);
  const [selectedY, setSelectedY] = useState<number>(0);

  const [active, setActive] = useState<number>(0);
  /****************************************************/

  /****************************************MIDDLEWARES*/
  // SET BLACK
  useEffect((): void => {
    const min = 1;
    const max = rows * cols;
    const count: number = 100;
    const black = [];

    for (let i = 0; i < count; i++) {
      const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      black.push(randomNumber);
    }

    setBlack(black);
  }, [])

  // SET POSITION
  const handlePosition = (number: number, x: number, y: number): void => {
    setSelectedX(x);
    setSelectedY(y);
    setActive(number);
  };

  // MOVE
  const move = (x: number, y: number): void => {
    axios.post('http://localhost:3000/move', { x: x, y: y, rows: rows, cols: cols })

      .then((response: any): void => {
        setSelectedX(response.data.x);
        setSelectedY(response.data.y);

        setActive(number => number + 1);

        if (response.data.x < cols) {
          move(response.data.x, response.data.y);
        }
      })

      .catch((error: AxiosError): void => console.error(error))
  };
  /****************************************************/

  /*****************************************RETURN TSX*/
  return (
    <>
      <Coordinates x={x} y={y} />

      <Launch x={selectedX} y={selectedY} move={move} />

      <Matrice
        rows={rows}
        cols={cols}
        matrice={matrice} setMatrice={setMatrice}
        x={x} setX={setX}
        y={y} setY={setY}
        handlePosition={handlePosition}
        active={active}
        black={black}
      />
    </>
  );
  /****************************************************/
};
/************************************************************************/