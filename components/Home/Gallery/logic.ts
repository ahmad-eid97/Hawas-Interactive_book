//== Hooks
import { useState } from "react"

export default function useLogic() {
  const [items] = useState([
    {
      id: 1,
      image: "/images/home/photo-23.jpg"
    },
    {
      id: 2,
      image: "/images/home/photo-24.jpg"
    },
    {
      id: 3,
      image: "/images/home/photo-25.jpg"
    },
    {
      id: 4,
      image: "/images/home/photo-26.jpg"
    },
    {
      id: 5,
      image: "/images/home/photo-27.jpg"
    },
    {
      id: 6,
      image: "/images/home/photo-28.jpg"
    },
    {
      id: 7,
      image: "/images/home/photo-29.jpg"
    },
    {
      id: 8,
      image: "/images/home/photo-30.jpg"
    },
  ])
  const [open, setOpen] = useState(false);

  return {
    items,
    open,
    setOpen
  }
}