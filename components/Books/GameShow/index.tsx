import React from 'react';
//= Components
import { Game } from '@/components/Lessons/types';
//== Styles
import styles from './styles.module.scss';

type Props = {
  game: any;
  title: string;
}

function GameShow({ game, title }: Props) {
  const gameData = game.find((game: Game) => game.title === decodeURIComponent(title))

  return (
    <div className={styles.wrapper}>
      <div className={`${styles.card}`}>
        <h1>{gameData?.title}</h1>
        <div className={styles.container}>
          <iframe src={gameData?.link}></iframe>
        </div>
      </div>
    </div>
  )
}

export default GameShow