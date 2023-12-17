"use client";
//== Hooks 
import { useState, useRef, useEffect, use } from "react";
//== Modules
import { useQuery } from "@tanstack/react-query";
//== Store
import { useAppDispatch } from "@/store/hooks";
import { checkAnswer, checkWrong } from "@/store/slices/common";
//== API
import { getQuestionImageWithPosition } from "@/API/quizzes";

export default function useLogic({ questionData }: { questionData: any }) {
  const [draggableItem, setDraggableItem] = useState<HTMLParagraphElement | null>(null);
  const [studentAnswer, setStudentAnswer] = useState<any>({});
  const [showCorrection, setShowCorrection] = useState<{ correct: boolean, data: string[] } | null>(null);
  const [rendered, setRendered] = useState(true);
  const droppingArea = useRef<HTMLDivElement | null>(null);
  const [newDataLoading, setNewDataLoading] = useState(true);
  const dispatch = useAppDispatch();
  //== Audio part
  const [audioOpened, setAudioOpened] = useState(false);
  const Audio = useRef<HTMLAudioElement | null>(null);

  const getQuestionData = () => {
    return getQuestionImageWithPosition(questionData.id)
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
    if (draggableItem && !e.currentTarget.children.length) e.currentTarget.appendChild(draggableItem);
    setStudentAnswer({ ...studentAnswer, [index]: draggableItem?.innerText })
  }

  const openAudio = async (status: boolean) => {
    switch (status) {
      case true:
        setAudioOpened(status);
        setTimeout(() => {
          Audio?.current?.play();
        }, 100)
      case false:
        setAudioOpened(status);
        Audio?.current?.pause();
    }
  };

  const removeChoice = (e: React.MouseEvent<HTMLElement, MouseEvent>, idx: number) => {
    if (e.currentTarget.parentElement) droppingArea.current?.insertBefore(e.currentTarget.parentElement, droppingArea?.current.children[idx]);
    const answers = { ...studentAnswer };
    for (const key in answers) {
      if (answers[key] === e.currentTarget.parentElement?.innerText) {
        delete answers[key];
        break;
      }
    }
    setStudentAnswer({ ...answers })
  }

  const compareObjects = (obj1: any, obj2: any) => {
    for (const key in obj1) {
      if (obj1[key] !== obj2[key]) {
        return false;
      }
    }
    return true;
  }

  const correctAnswer = () => {
    if (compareObjects(data?.correctAnswer, studentAnswer)) {
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
    setRendered(false);
    setShowCorrection(null);
    setStudentAnswer({});
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
    removeChoice,
    showCorrection,
    correctAnswer,
    retry,
    rendered,
    questionDetails: data,
    isLoading,
    newDataLoading,
    openAudio,
    audioOpened,
    setAudioOpened,
    Audio
  }
}