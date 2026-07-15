"use client";
//== Hooks
import { useEffect, useState } from "react";

export default function useLogic({ data }: any) {
  const [rendered, setRendered] = useState(true);
  const [openViewNotesModal, setOpenViewNotesModal] = useState(false);
  const [openAddNoteModal, setOpenAddNoteModal] = useState(false);

  useEffect(() => {
    setRendered(false);
    setTimeout(() => {
      setRendered(true);
    }, 10)
  }, [data])

  return {
    rendered,
    openViewNotesModal,
    setOpenViewNotesModal,
    openAddNoteModal,
    setOpenAddNoteModal
  }
}