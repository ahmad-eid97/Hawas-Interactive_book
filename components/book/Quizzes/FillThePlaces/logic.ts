"use client";
//== Hooks 
import { useState, useRef } from "react";

export default function useLogic() {
  const [draggableItem, setDraggableItem] = useState<HTMLParagraphElement | null>(null);
  const droppingArea = useRef<HTMLDivElement | null>(null);

  const choices = [
    {
      id: 1,
      text: "حرام"
    },
    {
      id: 2,
      text: "المدرسة"
    },
    {
      id: 3,
      text: "عثمان"
    },
    {
      id: 4,
      text: "يأخذ"
    },
    {
      id: 5,
      text: "الحديقة"
    },
    {
      id: 6,
      text: "عمر"
    },
    {
      id: 7,
      text: "البيت"
    },
    {
      id: 8,
      text: "يبني"
    },
    {
      id: 9,
      text: "أحسنت"
    }
  ]

  const dragStart = (e: React.DragEvent<HTMLParagraphElement>) => {
    setDraggableItem(e.currentTarget);
    e.dataTransfer.effectAllowed = 'move';
    e.currentTarget.style.opacity = "0.5"
  }

  const dragEnd = (e: React.DragEvent<HTMLParagraphElement>) => {
    // setDraggableItem(null)
    e.currentTarget.style.opacity = "1"
  }

  const dragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.currentTarget.style.backgroundColor = "green";
  }

  const dragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.currentTarget.style.backgroundColor = "rgb(250, 250, 212)";
  }

  const drop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.currentTarget.style.backgroundColor = "rgb(250, 250, 212)";
    if (draggableItem && !e.currentTarget.children.length) e.currentTarget.appendChild(draggableItem);
  }

  const removeChoice = (e: React.MouseEvent<HTMLElement, MouseEvent>, idx: number) => {
    if (e.currentTarget.parentElement) droppingArea.current?.insertBefore(e.currentTarget.parentElement, droppingArea?.current.children[idx]);
  }

  return {
    droppingArea,
    choices,
    dragStart,
    dragEnd,
    dragOver,
    dragLeave,
    drop,
    removeChoice
  }
}