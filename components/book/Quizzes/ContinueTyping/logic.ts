"use client";
//== Hooks
import { useState } from "react";

export default function useLogic() {
  const [items, setItems] = useState([
    {
      id: 1,
      text: "مَدْرَسَةٌ لي",
      correct: 'مدرستي'
    },
    {
      id: 2,
      text: "بالونٌ لي",
      correct: 'بالوني'
    },
    {
      id: 3,
      text: "شَجَرَةٌ لي",
      correct: 'شجرتي'
    },
    {
      id: 4,
      text: "دارٌ لي",
      correct: 'داري'
    },
    {
      id: 5,
      text: "حِصانٌ لي",
      correct: 'حصاني'
    },
  ])

  return {
    items
  }
}