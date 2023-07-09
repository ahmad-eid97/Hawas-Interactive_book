"use client";
//== Hooks
import { useState } from "react";
//== Modules
import {
  arrayMove
} from "@dnd-kit/sortable";

export default function useLogic() {
  const [languages, setLanguages] = useState(["طير عادل بالونه ليجري وراءه", "حزن عادل علي البالون", "طار البالون بعيدا"]);

  function handleDragEnd(event: any) {
    const { active, over } = event;

    if (active.id !== over.id) {
      setLanguages((items) => {
        const activeIndex = items.indexOf(active.id);
        const overIndex = items.indexOf(over.id);
        console.log(arrayMove(items, activeIndex, overIndex));
        return arrayMove(items, activeIndex, overIndex);
      });

    }
  }

  return {
    languages,
    handleDragEnd
  }
}