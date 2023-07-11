"use client";
//== Hooks
import { useState } from "react";

export default function useLogic() {
  const [items, setItems] = useState([
    {
      id: 1,
      question: "أَيْنَ طارَ الْبالونُ؟",
      words: ["طار بعيدا", "طار فوق الشجرة", "طار فوق البيت"],
      correct: 'طار بعيدا'
    },
    {
      id: 2,
      question: "هَلْ حَزِنَ عادِلٌ عَلى الْبالونِ؟",
      words: ["نعم حزن عادل علي البالون", "لا لم يحز عادل علي البالون"],
      correct: 'نعم حزن عادل علي البالون'
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