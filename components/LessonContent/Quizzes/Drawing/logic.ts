"use client";
//== Hooks
import { useEffect, useState, useRef } from "react";
//== Modules
import { useQuery } from "@tanstack/react-query";
//== API
import { getDrawingQuestion } from "@/API/quizzes";
//== Types
import { QuestionData } from "../types";

export default function useLogic({ questionData }: { questionData: QuestionData }) {
  const [colors, setColors] = useState<string[]>([
    "#2d3436",
    "#0984e3",
    "#00b894",
    "#e17055",
  ]);
  const [choosedColor, setChoosedColor] = useState<string>(colors[0]);
  const [dimensions, setDimensions] = useState({ width: 160, height: 30 });
  const drawingCanvas = useRef<any>(null);

  useEffect(() => {
    if (window.matchMedia(`(max-width: 400px)`).matches) {
      setDimensions({ width: 280, height: 300 });
    } else if (window.matchMedia(`(max-width: 750px)`).matches) {
      setDimensions({ width: 300, height: 350 });
    } else if (window.matchMedia(`(max-width: 992px)`).matches) {
      setDimensions({ width: 350, height: 380 });
    } else if (window.matchMedia(`(max-width: 1200px)`).matches) {
      setDimensions({ width: 500, height: 400 });
    }
  }, [])

  const getQuestion = async () => {
    return await getDrawingQuestion(questionData.id);
  }

  const { data, isLoading } = useQuery(['drawingQuestion'], getQuestion, {
    cacheTime: 0
  });

  const canvasStyles = {
    width: dimensions.width,
    height: dimensions.height,
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
    resetCanvas,
    isLoading,
    questionDetails: data
  }
}