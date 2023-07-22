//== Components
import { Pagination } from '@/components';
//== Component Logic
import useLogic from './logic';
//== Styles
import styles from './lesson.module.scss';

interface CProps {
  content: any[]
}

const Lesson = ({ content }: CProps) => {
  const { pageNum, changePage, renderPageSection } = useLogic();

  return (
    <div className={styles.lesson}>
      <Pagination count={content.length} changePage={changePage} position="top" />
      <div className={styles.inside}>
        {content[pageNum - 1].map((item: any, index: number) => (
          <div key={index} className={styles.item}>
            {renderPageSection(item.type, item)}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Lesson