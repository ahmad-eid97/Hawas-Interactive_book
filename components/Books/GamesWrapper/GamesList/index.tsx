'use client';
import React from 'react';
//= Components
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import GameBox from '@/components/Lessons/GameBox';
//= Utils
import { isDemo } from '@/utils/isDemo';
//= Types
import { Game } from '@/components/Lessons/types';
//= Styles
import cls from './styles.module.scss';

type Props = {
  games: Game[];
}

function GamesList({ games }: Props) {
  const renderedGames = isDemo() ? games.slice(0, 3) : games;

  return (
    // @ts-ignore
    <Container maxWidth="xxl" style={{ paddingBottom: '100px' }} className={cls.card}>
      <hr />
      <br />
      <h1>الالعاب التفاعلية</h1>
      <br />
      <br />
      <div className={cls.wrapper}>
        {renderedGames?.map((game: Game) => (
          <GameBox game={game} key={game.title} />
        ))}
      </div>
      {
        isDemo() ?
          <p className={cls.text}>هذا الحساب تجريبي ولا يعرض كل المحتوي. سجل معنا للحصول علي المحتوي كاملاَ</p>
          :
          null
      }
    </Container>
  )
}

export default GamesList