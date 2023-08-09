//== Hooks
import { useState } from "react"

export default function useLogic() {
  const [lightBox, setLightBox] = useState(false);

  return {
    lightBox,
    setLightBox
  }
}