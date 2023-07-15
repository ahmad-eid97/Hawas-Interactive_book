"use client";
//== Hooks
import { useState, useRef } from "react"

export default function useLogic() {
  const [colors, setColors] = useState<string[]>([
    "#2d3436",
    "#0984e3",
    "#00b894",
    "#e17055",
  ]);
  const [choosedColor, setChoosedColor] = useState<string>(colors[0]);
  const drawingCanvas = useRef<any>(null);

  const canvasStyles = {
    width: 280,
    height: 400,
    borderRadius: 10,
    backgroundColor: 'transparent',
  };

  const changeCanvasColor = (color: string) => {
    setChoosedColor(color)
  }

  const undoDrawing = () => {
    drawingCanvas.current.undo()
  }

  const resetCanvas = () => {
    drawingCanvas.current.resetCanvas()
  }

  return {
    colors,
    canvasStyles,
    choosedColor,
    changeCanvasColor,
    drawingCanvas,
    undoDrawing,
    resetCanvas
  }
}