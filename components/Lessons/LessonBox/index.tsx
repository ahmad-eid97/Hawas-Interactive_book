"use client";
//== Utils
import Link from 'next/link';
//== Component Logic
import useLogic from "./logic";
//== Components
import { Icon } from '@iconify/react';
//== Types
import { Lesson } from "../types";
//== Styles
import styles from './lessonBox.module.scss';

interface CProps {
  index: number,
  lesson: Lesson
}

const LessonBox = ({ index, lesson }: CProps) => {
  const { router } = useLogic();

  return (
    <div className={styles.card} onClick={() => router.push(`/lessons/${lesson.id}`)}>
      <div className={styles.badge}>
        <h2>الفصل</h2>
        <p>{index + 1}</p>
      </div>
      <div className={styles.content}>
        <div className={styles.cardImgContainer}>
          <Link href="#" className={styles.cardImg}>
            <img src={lesson.photo_file} alt={lesson.title} />
          </Link>
        </div>
        <div className={styles.cardFooter}>
          <div className={styles.details}>
            <Icon icon="basil:book-solid" />
            <h4>{lesson.title}</h4>
            {/* <Icon icon="icon-park-twotone:game-three" /> */}
            <Icon icon="game-icons:burning-book" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default LessonBox;