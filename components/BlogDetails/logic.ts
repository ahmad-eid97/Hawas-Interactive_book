//== Hooks
import { useState } from "react"

export default function useLogic() {
  const [items] = useState([
    {
      id: 1,
      src: "/images/home/photo-23.jpg"
    },
    {
      id: 2,
      src: "/images/home/photo-24.jpg"
    },
    {
      id: 3,
      src: "/images/home/photo-25.jpg"
    },
  ])
  const [open, setOpen] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);

  const openImage = (index: number) => {
    setOpen(true)
    setImageIndex(index)
  }

  return {
    items,
    open,
    setOpen,
    imageIndex,
    openImage
  }
}