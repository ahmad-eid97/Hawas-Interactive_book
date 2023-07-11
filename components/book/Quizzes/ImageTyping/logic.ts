"use client";
//== Hooks
import { useState } from "react";

export default function useLogic() {
  const [items, setItems] = useState([
    {
      id: 1,
      text: "عند عادل",
      image: "/images/quizzes/6.png",
      correct: 'بالون'
    },
    {
      id: 2,
      text: "أكل يزيد",
      image: "/images/quizzes/7.png",
      correct: 'البيضة'
    },
    {
      id: 3,
      text: "لعب مثني ب",
      image: "/images/quizzes/8.png",
      correct: 'الكرة'
    },
    {
      id: 4,
      text: "رسم رامي",
      image: "/images/quizzes/14.png",
      correct: 'سيارة'
    },
  ])

  return {
    items
  }
}