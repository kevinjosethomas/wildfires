"use client";

import { useEffect, useRef, useState } from "react";

import Tile from "./components/Tile";

export default function Game() {
  const [game, setGame] = useState<number[]>(new Array(50).fill(0));

  function changeRandom() {
    let index = Math.floor(Math.random() * 50);
    game[index] = 1;
    setGame(game);
    setTimeout(() => {
      changeRandom();
    }, 1000);
  }

  useEffect(() => {
    setTimeout(() => {
      changeRandom();
    }, 1000);
  }, []);

  return (
    <div className="grid h-screen w-screen grid-cols-10">
      {game.map((x: number, i: number) => (
        <Tile
          key={i}
          state={x}
          extinguish={() => (game[i] = 0 && setGame(game))}
        />
      ))}
    </div>
  );
}
