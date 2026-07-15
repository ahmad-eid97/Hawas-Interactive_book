import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
//== Styles
import styles from './sortableItem.module.scss';

const SortableItem = ({ id }: any) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({
    id: id.id,
  });

  const style = {
    transform: CSS.Translate.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef} style={style} {...attributes} {...listeners}
      className={`${styles.item}`}
      id={id}
    >
      {id.image && <img src={id.image} alt="choice_img" />}
      {id.title}
    </div>
  )
}

export default SortableItem;