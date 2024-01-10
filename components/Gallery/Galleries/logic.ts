//== Hooks
import { useState } from 'react'
//= Types
import type { GalleryItem, GalleryCategory } from '@/types';

interface GalleriesProps {
  data: GalleryItem[];
  categories: GalleryCategory[];
}

export default function useLogic({ data, categories }: GalleriesProps) {
  const [open, setOpen] = useState(false)
  const [filter, setFilter] = useState('all');
  const [imageIndex, setImageIndex] = useState(0);
  const images =
    data.length ?
      data.map(img => ({
        id: img.id,
        src: img.images[0],
        alt: '',
        category: img.category.name
      }))
      :
      [];

  const handleFilterClick = (newFilter: string) => {
    setFilter(newFilter);
  };

  const openImage = (index: number) => {
    setOpen(true)
    setImageIndex(index)
  }

  return {
    open,
    setOpen,
    openImage,
    imageIndex,
    filter,
    handleFilterClick,
    images
  }
}