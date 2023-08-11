//== Hooks
import { useState } from "react";

export default function useLogic() {
  const [open, setOpen] = useState(false);

  return {
    open,
    setOpen
  }
}