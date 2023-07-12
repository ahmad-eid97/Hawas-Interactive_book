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
  const [ComponentRendered, setComponentRendered] = useState([
    <Matching
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
    <SortDragging />,
    <TableDragging />,
    <WordDragging />,
    <ChooseLetter />,
    <FillThePlaces />,
    <ChooseWord />,
    <ChooseAdjective />,
    <ContinueTyping />,
    <ArrangeWords />,
    <Choosing />,
    <SignleChoose />,
    <ImageChoose />,
    <ImageTyping />,
    <FillFields />,
    <CompleteWords />
  ]);

  return {
    ComponentRendered
  }
}