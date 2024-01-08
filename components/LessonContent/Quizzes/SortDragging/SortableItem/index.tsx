"use client";
//== Modules
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
//== Styles
import styles from './sortableItem.module.scss';

export default function SortableItem(props: any) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition
  } = useSortable({ id: props.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition
  }

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners} className={styles.item}>
      {props.id.image ?
        <img src={props.id.image} alt="choice_img" />
        : null
      }
      {props.id.title}
    </div>
  )
}