//== Types
import { Choice } from '../../types';
//== Styles
import styles from './draggables.module.scss';
//== Component Interface
interface CProps {
  choices: Choice[]
  droppingArea: React.MutableRefObject<HTMLDivElement | null>
  dragStart: (e: React.DragEvent<HTMLParagraphElement>) => void
  dragEnd: (e: React.DragEvent<HTMLParagraphElement>) => void
  removeChoice: (e: React.MouseEvent<HTMLElement, MouseEvent>, idx: number) => void
}

const Draggables = ({ choices, droppingArea, dragStart, dragEnd, removeChoice }: CProps) => {
  return (
    <div className={styles.draggables} ref={droppingArea}>
      {choices.map((choice, idx) => (
        <p
          className={`${styles.item} item`}
          draggable={true}
          onDragStart={(e) => dragStart(e)}
          onDragEnd={(e) => dragEnd(e)}
          key={choice.id}
        >
          {choice.text}
          <i className="fa-duotone fa-ban" onClick={(e) => removeChoice(e, idx)}></i>
        </p>
      ))}
    </div>
  )
}

export default Draggables