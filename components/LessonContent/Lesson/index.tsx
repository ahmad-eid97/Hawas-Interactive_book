//== Components
import { Pagination } from '@/components';
//== Component Logic
import useLogic from './logic';
//== Styles
import styles from './lesson.module.scss';

interface CProps {
  lessonTitle: string,
  content: any[]
}

const Lesson = ({ lessonTitle, content }: CProps) => {
  const { pageNum, changePage, renderPageSection } = useLogic();

  return (
    <div className={styles.lesson}>
      <Pagination count={content.length} changePage={changePage} position="top" />
      <h2>{lessonTitle}</h2>
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