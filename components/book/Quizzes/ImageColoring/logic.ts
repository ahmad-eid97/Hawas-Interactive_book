"use client";
//== Hooks
import { useState } from "react";

export default function useLogic() {
  const [colors, setColors] = useState<string[]>([
    "#2d3436",
    "#FDEA96",
    "#0984e3",
    "#F79257",
    "#00b894",
    "#4F6D7A"
  ]);
  const [choosedColor, setChoosedColor] = useState<string | null>(null);

  const changeColor = (color: string) => {
    setChoosedColor(color)
  }

  const fillElement = (e: React.MouseEvent) => {
    e.currentTarget.setAttribute('fill', choosedColor ? choosedColor : '#fff')
  }

  return {
    colors,
    choosedColor,
    changeColor,
    fillElement
  }
}