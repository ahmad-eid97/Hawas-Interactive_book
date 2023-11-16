"use client";
//== Hooks
import { useEffect, useState } from "react";

export default function useLogic({ data }: any) {
  const [rendered, setRendered] = useState(true);

  useEffect(() => {
    setRendered(false);
    setTimeout(() => {
      setRendered(true);
    }, 10)
  }, [data])

  return {
    rendered
  }
}