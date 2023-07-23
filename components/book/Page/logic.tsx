"use client";
//== Hooks
import { useState } from "react";
//== Modules
import { Matching, SortDragging, TableDragging, WordDragging, ChooseLetter, FillThePlaces, ChooseWord, ChooseAdjective, ContinueTyping, ArrangeWords, Choosing, SignleChoose, ImageChoose, ImageTyping, FillFields, CompleteWords, Drawing, ImageColoring, DraggingParts, ImageDragging } from "@/components";
//== Store
import { useAppSelector } from "@/store/hooks";

export default function useLogic({ quizzes }: any) {
  const [pageNum, setPageNum] = useState<number>(1);
  const { correctAnswer, wrongAnswer } = useAppSelector((state: any) => state.common)

  const renderQuiz = () => {
    const ComponentRendered: { [type: string]: JSX.Element } = {
      'matching_with_two_titles': <Matching
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
        questionData={quizzes[pageNum - 1]}
      />,
      'ordering': <SortDragging questionData={quizzes[pageNum - 1]} />,
      'matching_with_table_dragging': <TableDragging />,
      'fill_in_the_blank': <WordDragging />,
      '5': <ChooseLetter />,
      '6': <FillThePlaces />,
      'odd_word': <ChooseWord />,
      '8': <ChooseAdjective />,
      '9': <ContinueTyping />,
      '10': <ArrangeWords />,
      '11': <Choosing />,
      '12': <SignleChoose />,
      '13': <ImageChoose />,
      '14': <ImageTyping />,
      '15': <FillFields />,
      '16': <CompleteWords />,
      '17': <Drawing />,
      '18': <ImageColoring />,
      '19': <DraggingParts />,
      'matching_with_position': <ImageDragging questionData={quizzes[pageNum - 1]} />
    }
    return ComponentRendered[quizzes[pageNum - 1]["question_type"]]
  }

  const changePage = async (event: any, pageNum: number) => {
    setPageNum(pageNum);
  };

  return {
    renderQuiz,
    pageNum,
    changePage,
    correctAnswer,
    wrongAnswer
  }
}