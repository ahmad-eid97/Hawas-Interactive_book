"use client";
//== Hooks 
import { useState, useRef } from "react";

export default function useLogic() {
  const [draggableItem, setDraggableItem] = useState<HTMLParagraphElement | null>(null);
  const droppingArea = useRef<HTMLDivElement | null>(null);

  const choices = [
    {
      id: 1,
      text: "ر"
    },
    {
      id: 2,
      text: "ا"
    },
    {
      id: 3,
      text: "با"
    },
    {
      id: 4,
      text: "د"
    },
    {
      id: 5,
      text: "ن"
    },
    {
      id: 6,
      text: "دل"
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