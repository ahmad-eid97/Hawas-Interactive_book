'use client';
import React, { useState, createContext } from 'react';

type Props = {
  children: React.ReactNode;
}

type PagesContextType = {
  searchOpened: boolean;
  setSearchOpened: React.Dispatch<React.SetStateAction<boolean>>;
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  openDrawing: boolean;
  setOpenDrawing: React.Dispatch<React.SetStateAction<boolean>>;
};

export const PagesContext = createContext<PagesContextType>({
  searchOpened: false,
  setSearchOpened: () => { },
  searchTerm: '',
  setSearchTerm: () => { },
  openDrawing: false,
  setOpenDrawing: () => { },
});

export default function ContextProvider({ children }: Props) {
  const [searchOpened, setSearchOpened] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [openDrawing, setOpenDrawing] = useState(false);

  return (
    <PagesContext.Provider value={{ searchOpened, setSearchOpened, searchTerm, setSearchTerm, openDrawing, setOpenDrawing }}>
      {children}
    </PagesContext.Provider>
  )
}