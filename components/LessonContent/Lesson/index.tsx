//== Components
import { Pagination } from '@/components';
//== Component Logic
import useLogic from './logic';
//== Styles
import styles from './lesson.module.scss';

interface CProps {
  lessonNumber: number,
  lessonTitle: string,
  content: any[]
}

const Lesson = ({ lessonNumber, lessonTitle, content }: CProps) => {
  const { pageNum, changePage, renderPageSection, lessonsLabel } = useLogic();

  return (
    <div className={styles.lesson}>
      <div className={styles.badge}>
        <p>ﭐلفَصْلُ</p>
        <span className={lessonNumber > 10 ? styles.small : ''}>{lessonsLabel[lessonNumber]}</span>
      </div>
      <Pagination count={content.length} changePage={changePage} position="top" />
      <div className={styles.frame}>
        <div className={styles.right}></div>
        <div className={styles.left}></div>
        <h2>{lessonTitle}</h2>
      </div>
      <div className={styles.inside}>
        {content.length ? content[pageNum - 1].map((item: any, index: number) => (
          <div key={index} className={styles.item}>
            {renderPageSection(item.type, item)}
          </div>
        )) : null}
      </div>
    </div>
  )
}

export default Lesson