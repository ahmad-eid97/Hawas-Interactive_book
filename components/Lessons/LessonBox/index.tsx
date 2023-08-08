"use client";
//== Utils
import Link from 'next/link';
//== Component Logic
import useLogic from "./logic";
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
        <h2>الدرس</h2>
        <p>{index + 1}</p>
      </div>
      <div className={styles.content}>
        <div className={styles.cardImgContainer}>
          <Link href="#" className={styles.cardImg}>
            <img src={lesson.photo_file} alt={lesson.title} />
          </Link>
        </div>
        <div className={styles.cardFooter}>
          {/* <Link href="#"><span className={styles.cat}>{lesson.title}</span></Link> */}
          <div className={styles.details}>
            <h4>{lesson.title}</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LessonBox;