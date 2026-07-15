import React from 'react';
import GamesList from './GamesList';
//== API
import { getAllGames } from "@/API/lessons";

async function GamesWrapper() {
  const gamesList = await getAllGames();

  return (
    <GamesList games={gamesList} />
  )
}

export default GamesWrapper