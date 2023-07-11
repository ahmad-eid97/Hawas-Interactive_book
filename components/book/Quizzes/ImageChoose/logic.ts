"use client";
//== Hooks
import { useState } from "react";

export default function useLogic() {
  const [items, setItems] = useState([
    {
      id: 1,
      image: "/images/quizzes/boy1.png",
      correct: false
    },
    {
      id: 2,
      image: "/images/quizzes/boy2.png",
      correct: true
    },
  ])
  const [choosedAnswer, setChoosedAnswer] = useState<number>();

  return {
    items,
    choosedAnswer,
    setChoosedAnswer
  }
}