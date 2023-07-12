"use client";
//== Hooks
import { useState } from "react";
//== Modules
import { Matching, SortDragging, TableDragging, WordDragging, ChooseLetter, FillThePlaces, ChooseWord, ChooseAdjective, ContinueTyping, ArrangeWords, Choosing, SignleChoose, ImageChoose, ImageTyping, FillFields, CompleteWords } from "@/components";

export default function useLogic() {
  const dataRtl = {
    righthand: {
      title: 'الكلمة',
      items: [
        { content: 'بيت' },
        { content: 'قلم' },
        { content: 'باب' },
        { content: 'ولد' },
        { content: 'بنت' },
        { content: 'جبل' }
      ]
    },
    lefthand: {
      title: 'جمعها',
      items: [
        { content: 'أولاد' },
        { content: 'بنات' },
        { content: 'بيوت' },
        { content: 'أقلام' },
        { content: 'جبال' },
        { content: 'أبواب' }
      ]
    }
  }
  const dataLtr = {
    righthand: {
      title: 'Word',
      items: [
        { content: 'House' },
        { content: 'Pen' },
        { content: 'Door' },
        { content: 'Boy' },
        { content: 'Girl' },
        { content: 'Mountain' }
      ]
    },
    lefthand: {
      title: 'Plural',
      items: [
        { content: 'Boys' },
        { content: 'Girls' },
        { content: 'Houses' },
        { content: 'Pens' },
        { content: 'Mountains' },
        { content: 'Doors' }
      ]
    }
  }
  const [ComponentRendered, setComponentRendered] = useState<{ [index: number]: JSX.Element }>({
    1: < Matching
      matchingData={dataRtl}
      options={{
        linesColor: '#ffffff',
        lineHoverColor: '#ff0000',
        itemsClassName: "edit",
        randomizeLineColor: true,
        enableElementsColorEffects: true,
      }}
      keyWord="content"
      dir="rtl"
      className="container"
      onMatch={(matches) => console.log(matches)}
      onUnMatch={(matches) => console.log(matches)}
    />,
    2: < SortDragging />,
    3: <TableDragging />,
    4: <WordDragging />,
    5: <ChooseLetter />,
    6: <FillThePlaces />,
    7: <ChooseWord />,
    8: <ChooseAdjective />,
    9: <ContinueTyping />,
    10: <ArrangeWords />,
    11: <Choosing />,
    12: <SignleChoose />,
    13: <ImageChoose />,
    14: <ImageTyping />,
    15: <FillFields />,
    16: <CompleteWords />
  });

  return {
    ComponentRendered
  }
}