"use client";
//== Hooks 
import { useState, useRef, useEffect } from "react";
//== Modules
import { useQuery } from "@tanstack/react-query";
//== Store
import { useAppDispatch } from "@/store/hooks";
import { checkAnswer, checkWrong } from "@/store/slices/common";
//== API
import { getQuestionRandomImageWithPosition } from "@/API/quizzes";

export default function useLogic({ questionData }: { questionData: any }) {
  const [draggableItem, setDraggableItem] = useState<HTMLParagraphElement | null>(null);
  const [studentAnswer, setStudentAnswer] = useState<any>([]);
  const [showCorrection, setShowCorrection] = useState<{ correct: boolean, data: string[] } | null>(null);
  const [rendered, setRendered] = useState(true);
  const droppingArea = useRef<HTMLDivElement | null>(null);
  const [newDataLoading, setNewDataLoading] = useState(true);
  const [clickedItem, setClickedItem] = useState<HTMLElement | null>(null);
  const dispatch = useAppDispatch();

  const getQuestionData = () => {
    return getQuestionRandomImageWithPosition(questionData.id);
  }

  const { data, isLoading } = useQuery(['imageDraggingQuestion'], getQuestionData, {
    cacheTime: 0
  });

  useEffect(() => {
    setTimeout(() => {
      setNewDataLoading(false)
    }, 500)
  }, [])

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
    // e.currentTarget.style.backgroundColor = "#00b894";
  }

  const dragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    // e.currentTarget.style.backgroundColor = "rgb(250, 250, 212)";
  }

  const drop = (e: React.DragEvent<HTMLDivElement>, index: number) => {
    e.preventDefault();
    // e.currentTarget.style.backgroundColor = "rgb(250, 250, 212)";
    if (draggableItem && !e.currentTarget?.children?.length) e.currentTarget.appendChild(draggableItem);
    setStudentAnswer([...studentAnswer, draggableItem?.innerText])
  }

  const dragByClick = (e: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => {
    if (clickedItem) return;
    //@ts-ignore
    if (e.target.tagName !== 'I') {
      e.currentTarget.classList.add('activeBGForDragging');
      setClickedItem(e.currentTarget);
    };
  }

  const dropByClick = (e: React.MouseEvent<HTMLParagraphElement, MouseEvent>, index: number) => {
    if (e.currentTarget?.children?.length > 0) return;
    clickedItem?.classList.remove('activeBGForDragging');
    if (clickedItem) e.currentTarget.appendChild(clickedItem);
    setClickedItem(null);
    setStudentAnswer([...studentAnswer, clickedItem?.innerText])
  }

  const removeChoice = (e: React.MouseEvent<HTMLElement, MouseEvent>, idx: number) => {
    if (e.currentTarget.parentElement) droppingArea.current?.insertBefore(e.currentTarget.parentElement, droppingArea?.current.children[idx]);
    const answers = [...studentAnswer];
    answers.filter((item) => item !== e.currentTarget.parentElement?.innerText);
    setStudentAnswer([...answers])
    setClickedItem(null);
  }

  const compareArrays = (array1: any, array2: any) => {
    // Step 1
    if (array1?.length !== array2?.length) {
      return false
    } else {
      // Step 2
      const sortedArray1 = [...array1].sort();
      const sortedArray2 = [...array2].sort();
      // Step 3
      let equal = true;
      for (let i = 0; i < sortedArray1?.length; i++) {
        if (sortedArray1[i] !== sortedArray2[i]) {
          equal = false;
          break;
        }
      }
      // Step 4
      if (equal) {
        return true;
      } else {
        return false;
      }
    }
  }

  const correctAnswer = () => {
    if (clickedItem) setClickedItem(null);
    if (compareArrays(data?.correctAnswer, studentAnswer)) {
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
    setShowCorrection(null);
    setStudentAnswer([]);
    setTimeout(() => {
      setRendered(true)
    }, 20)
  }

  return {
    droppingArea,
    dragStart,
    dragEnd,
    dragOver,
    dragLeave,
    drop,
    dragByClick,
    dropByClick,
    removeChoice,
    showCorrection,
    correctAnswer,
    retry,
    rendered,
    questionDetails: data,
    isLoading,
    newDataLoading
  }
}