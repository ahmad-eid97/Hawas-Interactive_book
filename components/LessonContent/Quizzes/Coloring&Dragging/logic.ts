//== Hooks
import { useState } from "react";
//== Types
import { QuestionData } from "../types";

export default function useLogic({ questionData }: { questionData: QuestionData }) {
  const [draggableItem, setDraggableItem] = useState<HTMLParagraphElement | null>(null);
  const [items] = useState([
    "ع",
    "ر",
  ])
  const [items2] = useState([
    "ل",
    "م",
    "ا",
  ])
  const [items3] = useState([
    "ا",
    "ش",
    "ا",
    "ر",
  ])
  const [colors] = useState([
    "#d63031",
    "#00b894",
    "#0984e3",
    "#fdcb6e"
  ])
  const [choosedColor, setChoosedColor] = useState("");
  const [rendered, setRendered] = useState(true);

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
    e.currentTarget.style.backgroundColor = "#00b894";
  }

  const dragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.currentTarget.style.backgroundColor = "rgb(250, 250, 212)";
  }

  const drop = (e: React.DragEvent<HTMLDivElement>, index: number, droppapleIndex: number) => {
    e.preventDefault();
    e.currentTarget.style.backgroundColor = "rgb(250, 250, 212)";
    if (draggableItem && !e.currentTarget.children.length) e.currentTarget.appendChild(draggableItem);
  }

  const colorLetter = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    e.currentTarget.style.color = choosedColor;
  }

  const retry = () => {
    setRendered(false);
    setTimeout(() => {
      setRendered(true)
    }, 20)
  }

  return {
    items,
    items2,
    items3,
    dragStart,
    dragEnd,
    dragOver,
    dragLeave,
    drop,
    colors,
    setChoosedColor,
    colorLetter,
    rendered,
    retry
  }
}