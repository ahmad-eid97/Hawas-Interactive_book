//== Hooks
import { useState } from "react"
//= Types
import { IBlogDetails } from '@/types';

interface BlogDetailsProps {
  data: IBlogDetails | null;
}

export default function useLogic({ data }: BlogDetailsProps) {
  const [items] = useState(data?.gallery && data?.gallery.length > 0 ?
    data?.gallery.map(item => ({
      id: item.id,
      src: item.image
    })) : [])
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