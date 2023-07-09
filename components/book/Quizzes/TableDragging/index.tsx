//== Components
import { Boxes } from '@/components';
//== Component Logic
import useLogic from './logic';
//== Styles
import styles from './dragging.module.scss';

const TableDragging = () => {
  const { dragStart, dragEnd, dragOver, dragLeave, drop } = useLogic();

  return (
    <div className={styles.dragging}>
      <div className={styles.words}>
        <h2>الكلمات</h2>
        <p
          className={`${styles.item} item`}
          draggable={true}
          onDragStart={(e) => dragStart(e)}
          onDragEnd={(e) => dragEnd(e)}
        >
          أسد
        </p>
        <p
          className={`${styles.item} item`}
          draggable={true}
          onDragStart={(e) => dragStart(e)}
          onDragEnd={(e) => dragEnd(e)}
        >
          ثعبان
        </p>
        <p
          className={`${styles.item} item`}
          draggable={true}
          onDragStart={(e) => dragStart(e)}
          onDragEnd={(e) => dragEnd(e)}
        >
          بومة
        </p>
        <p
          className={`${styles.item} item`}
          draggable={true}
          onDragStart={(e) => dragStart(e)}
          onDragEnd={(e) => dragEnd(e)}
        >
          تمساح
        </p>
        <p
          className={`${styles.item} item`}
          draggable={true}
          onDragStart={(e) => dragStart(e)}
          onDragEnd={(e) => dragEnd(e)}
        >
          عصفورة
        </p>
        <p
          className={`${styles.item} item`}
          draggable={true}
          onDragStart={(e) => dragStart(e)}
          onDragEnd={(e) => dragEnd(e)}
        >
          حصان
        </p>
      </div>
      <Boxes dragOver={dragOver} dragLeave={dragLeave} drop={drop} />
    </div>
  )
}

export default TableDragging;