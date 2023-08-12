//== Hooks
import { useState } from 'react'

export default function useLogic() {
  const [open, setOpen] = useState(false)
  const [filter, setFilter] = useState('all');
  const images = [
    { id: 1, src: './images/home/photo-23.jpg', alt: 'Nature 1', category: 'business' },
    { id: 2, src: './images/home/photo-24.jpg', alt: 'City 1', category: 'design' },
    { id: 3, src: './images/home/photo-25.jpg', alt: 'Nature 2', category: 'business' },
    { id: 4, src: './images/home/photo-26.jpg', alt: 'City 2', category: 'design' },
    { id: 5, src: './images/home/photo-27.jpg', alt: 'Nature 1', category: 'business' },
    { id: 6, src: './images/home/photo-28.jpg', alt: 'City 1', category: 'design' },
    { id: 7, src: './images/home/photo-29.jpg', alt: 'Nature 2', category: 'business' },
    { id: 8, src: './images/home/photo-30.jpg', alt: 'City 2', category: 'design' },
  ];

  const handleFilterClick = (newFilter: string) => {
    setFilter(newFilter);
  };

  return {
    open,
    setOpen,
    filter,
    handleFilterClick,
    images
  }
}