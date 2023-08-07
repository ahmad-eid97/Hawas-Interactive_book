//== Hooks
import { useState } from "react";

export default function useLogic() {
  const [navDropdown, setNavDropdown] = useState(0);

  return {
    navDropdown,
    setNavDropdown
  }
}