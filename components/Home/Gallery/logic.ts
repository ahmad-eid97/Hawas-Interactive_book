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
    {
      id: 4,
      src: "/images/home/photo-26.jpg"
    },
    {
      id: 5,
      src: "/images/home/photo-27.jpg"
    },
    {
      id: 6,
      src: "/images/home/photo-28.jpg"
    },
    {
      id: 7,
      src: "/images/home/photo-29.jpg"
    },
    {
      id: 8,
      src: "/images/home/photo-30.jpg"
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
    openImage,
    imageIndex
  }
}