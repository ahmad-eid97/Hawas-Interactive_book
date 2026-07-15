"use client";
//== Utils
import Link from 'next/link';
import { Icon } from '@iconify/react';
//== Component Logic
import useLogic from "./logic";
//== Types
import { Game } from "../types";
//== Styles
import styles from './gameBox.module.scss';

interface CProps {
  game: Game
}

const GameBox = ({ game }: CProps) => {
  const { router } = useLogic();

  return (
    // @ts-ignore
    <div className={styles.card} onClick={() => router.push(`/games/${game.title}`)}>
      <div className={styles.content}>
        <div className={styles.cardImgContainer}>
          <Link href="#" className={styles.cardImg}>
            <img src={game.image} alt={game.title} />
          </Link>
        </div>
        <div className={styles.cardFooter}>
          <div className={styles.details}>
            <Icon icon="ion:dice" />
            <h4>{game.title}</h4>
            <Icon icon="icon-park-twotone:game-three" />
            <Icon icon="ic:twotone-videogame-asset" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default GameBox;