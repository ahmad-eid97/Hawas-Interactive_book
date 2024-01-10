"use client";
import { Fragment } from 'react';
//== Styles
import styles from './droppables.module.scss';
//== Component Interface
interface CProps {
  items: any;
  idx: number
  dragOver: (e: React.DragEvent<HTMLParagraphElement>) => void
  dragLeave: (e: React.DragEvent<HTMLParagraphElement>) => void
  drop: (e: React.DragEvent<HTMLParagraphElement>, index: number, droppableIndex: number) => void
}

const Droppables = ({ items, idx, dragOver, dragLeave, drop }: CProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.dropables}>
        <span>{idx + 1}-</span>
        {items.map((item: any, index: number) => (
          <div className={styles.item} key={index}>
            {item === '-'
              ?
              <div className={styles.dropable} onDragOver={(e) => dragOver(e)} onDragLeave={(e) => dragLeave(e)} onDrop={(e) => drop(e, idx, index)}></div>
              :
              " " + item + " "
            }
          </div>
        ))}
      </div>
    </div>
  )
}

export default Droppables