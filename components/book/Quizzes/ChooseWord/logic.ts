"use client";
//== Hooks
import { useState } from "react";

export default function useLogic() {
  const [items, setItems] = useState([
    {
      id: 1,
      words: ["حمام", "صوص", "أسد", "دجاج"],
      correct: 'صوص'
    },
    {
      id: 1,
      words: ["حمام", "حرام", "حماس", "جمل"],
      correct: 'جمل'
    },
    {
      id: 1,
      words: ["شجرة", "سيارة", "باص", "قطار"],
      correct: 'شجرة'
    },
    {
      id: 1,
      words: ["مدرسة", "بيت", "تفاح", "ملعب"],
      correct: 'تفاح'
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