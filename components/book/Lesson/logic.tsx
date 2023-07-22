"use client";
//== Hooks
import { useState } from "react";
//== Components
import { TextSection } from '@/components';

export default function useLogic() {
  const [pageNum, setPageNum] = useState(1);

  const renderPageSection = (type: string, data: any) => {
    const allSections: any = {
      text: <TextSection data={data} />,
    }
    return allSections[type];
  }

  const changePage = async (event: any, pageNum: number) => {
    setPageNum(pageNum);
  };

  return {
    pageNum,
    changePage,
    renderPageSection
  }
} 