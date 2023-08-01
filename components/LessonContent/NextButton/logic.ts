"use client";
//== Hooks
import { useEffect, useState } from "react";

export default function useLogic() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return {
    mounted
  }
}