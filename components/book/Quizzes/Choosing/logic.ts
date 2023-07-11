"use client";
//== Hooks
import { useState } from "react";

export default function useLogic() {
  const [items, setItems] = useState([
    {
      id: 1,
      question: "ماذا يُوجَدُ عِنْدَ عادِلٍ؟",
      words: ["بالون قديم", "ألوان جميلة", "بالون جديد"],
      correct: 'بالون جديد'
    },
    {
      id: 2,
      question: "لِماذا طَيَّرَ عادِلٌ بالونَهُ؟",
      words: ["ليجري وراءه", "ليطير معه", "ليطير عاليا"],
      correct: 'ليجري وراءه'
    },
    {
      id: 3,
      question: "كَيْفَ رَكَضَ عادِلٌ وَراءَ الْبالونِ؟",
      words: ["بسرعة", "بفرحه", "بخوف"],
      correct: 'بسرعة'
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