"use client";
//== Hooks
import { useState } from "react";

export default function useLogic() {
  const [items, setItems] = useState([
    {
      image: '/images/quizzes/1.png',
      letters: ["ح", "خ"],
      correct: 'ح'
    },
    {
      image: '/images/quizzes/2.png',
      letters: ["غ", "ع"],
      correct: 'ع'
    },
    {
      image: '/images/quizzes/3.png',
      letters: ["ت", "ب"],
      correct: 'ب'
    },
    {
      image: '/images/quizzes/4.png',
      letters: ["ش", "س"],
      correct: 'ش'
    },
  ])
  const [choices, setChoices] = useState<{ [index: number]: string }>({});

  const addToChoices = (index: number, letter: string) => {
    setChoices(prev => ({ ...prev, [index]: letter }));
  }

  return {
    items,
    choices,
    addToChoices
  }
}