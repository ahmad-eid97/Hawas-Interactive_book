//== Component Logic
import useLogic from "./logic";
//== Types
import { Lesson } from "../types";
//== Styles
import styles from './lessonBox.module.scss';

interface CProps {
  lesson: Lesson
}

const LessonBox = ({ lesson }: CProps) => {
  const { router } = useLogic()

  return (
    <div className={styles.lessonBox} onClick={() => router.push(`/lessons/${lesson.id}`)}>
      <div className={styles.image}>
        <img src={lesson.photo_file} alt={lesson.title} />
      </div>
      <h3>{lesson.title}</h3>
    </div>
  )
}

export default LessonBox