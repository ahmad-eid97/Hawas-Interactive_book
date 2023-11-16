"use client";
//== Hooks
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function useLogic() {
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  const goToNextLesson = (lessonId: string) => {
    router.push(`/lessons/${lessonId}`);
  }

  const goToPreviousLesson = (lessonId: string) => {
    router.push(`/lessons/${lessonId}`);
  }

  return {
    mounted,
    goToNextLesson,
    goToPreviousLesson
  }
}