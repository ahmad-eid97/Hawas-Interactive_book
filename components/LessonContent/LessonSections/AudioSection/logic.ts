"use client";
//== Hooks
import { useState, useRef } from "react";

export default function useLogic() {
  const [openViewNotesModal, setOpenViewNotesModal] = useState(false);
  const [openAddNoteModal, setOpenAddNoteModal] = useState(false);
  const [audioOpened, setAudioOpened] = useState(false);
  const Audio = useRef<HTMLAudioElement | null>(null);

  const openAudio = async (status: boolean) => {
    switch (status) {
      case true:
        setAudioOpened(status);
        setTimeout(() => {
          Audio.current?.play();
        }, 100)
      case false:
        setAudioOpened(status);
        Audio?.current?.pause();
    }
  };

  return {
    Audio,
    openAudio,
    audioOpened,
    setAudioOpened,
    openViewNotesModal,
    setOpenViewNotesModal,
    openAddNoteModal,
    setOpenAddNoteModal
  }
}