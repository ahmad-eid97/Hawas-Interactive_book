"use client";
import { Fragment } from 'react';
//== Styles
import styles from './droppables.module.scss';
//== Component Interface
interface CProps {
  items: []
  dragOver: (e: React.DragEvent<HTMLParagraphElement>) => void
  dragLeave: (e: React.DragEvent<HTMLParagraphElement>) => void
  drop: (e: React.DragEvent<HTMLParagraphElement>, index: number) => void
}

const Droppables = ({ items, dragOver, dragLeave, drop }: CProps) => {
  return (
    <div className={styles.wrapper}>
      {items.map((item: string[], idx) => (
        <div className={styles.dropables} key={idx}>
          {item.map((part: string, index: number) => (
            <Fragment key={index}>
              {part === '-' ?
                <div className={styles.dropable} onDragOver={(e) => dragOver(e)} onDragLeave={(e) => dragLeave(e)} onDrop={(e) => drop(e, idx)}></div>
                :
                <>
                  {part}
                </>
              }
            </Fragment>
          ))}
        </div>
      ))}
    </div>
  )
}

export default Droppables