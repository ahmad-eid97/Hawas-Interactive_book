//== Hooks
import { useState } from "react";
//== Modules
import { useQuery } from "@tanstack/react-query";
//== Store
import { useAppDispatch } from "@/store/hooks";
import { checkAnswer, checkWrong } from "@/store/slices/common";
//== API 
import { getFillInBlankWithColor } from "@/API/quizzes";
//== Types
import { QuestionData } from "../types";

export default function useLogic({ questionData }: { questionData: QuestionData }) {
  const [draggableItem, setDraggableItem] = useState<HTMLParagraphElement | null>(null);
  const [choosedColor, setChoosedColor] = useState("");
  const [rendered, setRendered] = useState(true);
  const [showCorrection, setShowCorrection] = useState<{ correct: boolean, data: string[] } | null>(null);
  const [coloredLetters, setColoredLetters] = useState(0);
  const [studentAnswer, setStudentAnswer] = useState<any>({});
  const [clickedItem, setClickedItem] = useState<HTMLElement | null>(null);
  const dispatch = useAppDispatch();

  const getQuestion = async () => {
    return await getFillInBlankWithColor(questionData.id);
  }

  const { data, isLoading } = useQuery(['fill_in_the_blank_with_color'], getQuestion, {
    cacheTime: 0
  });

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

  const drop = (e: React.DragEvent<HTMLDivElement>, index: number) => {
    e.preventDefault();
    e.currentTarget.style.backgroundColor = "rgb(250, 250, 212)";
    if (draggableItem && !e.currentTarget.children.length) e.currentTarget.appendChild(draggableItem);
    setStudentAnswer({ ...studentAnswer, [index]: draggableItem?.innerText })
  }

  const dragByClick = (e: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => {
    if (clickedItem) return;
    e.currentTarget.classList.add('activeForDragging');
    setClickedItem(e.currentTarget);
  }

  const dropByClick = (e: React.MouseEvent<HTMLParagraphElement, MouseEvent>, index: number) => {
    if (e.currentTarget.children.length > 0) return;
    clickedItem?.classList.remove('activeForDragging');
    if (clickedItem) e.currentTarget.appendChild(clickedItem);
    setClickedItem(null);
    setStudentAnswer({ ...studentAnswer, [index]: clickedItem?.innerText });
  }

  const colorLetter = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    e.currentTarget.style.color = choosedColor;
    setColoredLetters(prev => prev + 1);
  }

  const compareObjects = (object1: any, object2: any) => {
    if (!object2) return false
    if (Object.keys(object1)?.length !== Object.keys(object2).length) return false
    for (let i = 0; i < Object.keys(object1).length; i++) {
      if (object1[i] !== object2[i]) return false
    }
    return true;
  }

  const correctAnswer = () => {
    if (clickedItem) setClickedItem(null);
    setColoredLetters(0)
    const correctLetters = compareObjects(data?.correctChoices, studentAnswer)
    if (correctLetters && coloredLetters >= 2 && data?.rightColor === choosedColor) {
      dispatch(checkAnswer(true))
      setTimeout(() => {
        dispatch(checkAnswer(false))
      }, 3500)
      setShowCorrection({
        correct: true,
        data: [
          "أحسنت",
          "لقد حصلت على العلامة الكاملة",
        ]
      })
    } else {
      dispatch(checkWrong(true))
      setTimeout(() => {
        dispatch(checkWrong(false))
      }, 3500)
      setShowCorrection({
        correct: false,
        data: [
          "حاول مرّة أخرى",
          "الإجابة غير صحيحة",
        ]
      })
    }
  }

  const retry = () => {
    if (clickedItem) setClickedItem(null);
    setRendered(false);
    setTimeout(() => {
      setRendered(true)
    }, 20)
  }

  return {
    questionDetails: data,
    dragStart,
    dragEnd,
    dragOver,
    dragLeave,
    drop,
    dragByClick,
    dropByClick,
    setChoosedColor,
    colorLetter,
    rendered,
    retry,
    correctAnswer,
    showCorrection,
    isLoading
  }
}