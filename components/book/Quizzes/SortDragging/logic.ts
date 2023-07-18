"use client";
//== Hooks
import { useState } from "react";
//== Modules
import {
  arrayMove
} from "@dnd-kit/sortable";
//== Store
import { useAppDispatch } from "@/store/hooks";
import { checkAnswer, checkWrong } from "@/store/slices/common";

export default function useLogic() {
  const [items, setItems] = useState(["طير عادل بالونه ليجري وراءه", "حزن عادل علي البالون", "طار البالون بعيدا"]);
  const [correctData, setCorrectData] = useState<string[] | null>(["طير عادل بالونه ليجري وراءه", "طار البالون بعيدا", "حزن عادل علي البالون",]);
  const [showCorrection, setShowCorrection] = useState<{ correct: boolean, data: string[] } | null>(null);
  const [rendered, setRendered] = useState(true);
  const dispatch = useAppDispatch();

  function handleDragEnd(event: any) {
    const { active, over } = event;
    if (active.id !== over.id) {
      setItems((items) => {
        const activeIndex = items.indexOf(active.id);
        const overIndex = items.indexOf(over.id);
        return arrayMove(items, activeIndex, overIndex);
      });
    }
  }

  const correctAnswer = () => {
    if (!correctData) return;
    for (let i = 0; i < items.length; i++) {
      if (items[i] !== correctData[i]) {
        dispatch(checkWrong(true))
        setTimeout(() => {
          dispatch(checkWrong(false))
        }, 3500)
        setShowCorrection({
          correct: false,
          data: [
            "حاول مرّة أخرى",
            "بعض الإجابات غير صحيحة",
            "العلامة المُستحقّة هي : 5"
          ]
        })
        return;
      }
    }

    dispatch(checkAnswer(true))
    setTimeout(() => {
      dispatch(checkAnswer(false))
    }, 3500)
    setShowCorrection({
      correct: true,
      data: [
        "أحسنت",
        "لقد حصلت على علامة كاملة",
        "العلامة المُستحقّة هي : 10"
      ]
    })
  }

  const retry = () => {
    setRendered(false);
    setShowCorrection(null);
    setTimeout(() => {
      setRendered(true)
    }, 20)
  }

  return {
    items,
    handleDragEnd,
    correctAnswer,
    showCorrection,
    retry,
    rendered
  }
}