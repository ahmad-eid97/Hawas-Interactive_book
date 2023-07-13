"use client";
//== Hooks 
import { useState } from "react";

export default function useLogic() {
  const [draggableItem, setDraggableItem] = useState<HTMLParagraphElement | null>(null);

  const dragStart = (e: React.DragEvent<HTMLParagraphElement>) => {
    e.stopPropagation();
    setDraggableItem(e.currentTarget);
    e.dataTransfer.effectAllowed = 'move';
    e.currentTarget.style.opacity = "0.5"
  }

  const dragEnd = (e: React.DragEvent<HTMLParagraphElement>) => {
    // setDraggableItem(null)
    e.stopPropagation();
    e.currentTarget.style.opacity = "1"
  }

  const dragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.stopPropagation();
    e.preventDefault();
    e.currentTarget.style.backgroundColor = "#00b894";
    // drop(e);
  }

  const dragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.stopPropagation();
    e.currentTarget.style.backgroundColor = "var(--third-color)";
  }

  const drop = (e: React.DragEvent<HTMLDivElement>) => {
    e.stopPropagation();
    e.preventDefault();
    e.currentTarget.style.backgroundColor = "var(--third-color)";
    if (draggableItem) e.currentTarget.appendChild(draggableItem);
  }

  return {
    dragStart,
    dragEnd,
    dragOver,
    dragLeave,
    drop
  }
}