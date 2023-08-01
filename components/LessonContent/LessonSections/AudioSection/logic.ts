"use client";
//== Hooks
import { useState, useRef } from "react";

export default function useLogic() {
  const [audioOpened, setAudioOpened] = useState(false);
  const Audio = useRef<HTMLAudioElement | null>(null);

  const openAudio = async (status: boolean) => {
    switch (status) {
      case true:
        setAudioOpened(status);
        Audio?.current?.play();
      case false:
        setAudioOpened(status);
        Audio?.current?.pause();
    }
  };

  return {
    Audio,
    openAudio,
    audioOpened,
    setAudioOpened
  }
}