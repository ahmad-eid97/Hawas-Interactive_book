'use client';
import { useState } from "react";

export default function useLogic() {
  const [openViewNotesModal, setOpenViewNotesModal] = useState(false);
  const [openAddNoteModal, setOpenAddNoteModal] = useState(false);

  let interval: any;
  const startHoverHandler = () => {
    let timer = 0;
    interval = setInterval(() => {
      timer += 1
    }, 1000)
  }

  const endHoverHandler = async () => {
    clearInterval(interval)
  }

  return {
    startHoverHandler,
    endHoverHandler,
    openViewNotesModal,
    setOpenViewNotesModal,
    openAddNoteModal,
    setOpenAddNoteModal
  }
}