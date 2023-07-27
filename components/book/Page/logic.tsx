"use client";
//== Hooks
import { useState } from "react";
//== Modules
import { Matching, SortDragging, TableDragging, WordDragging, ChooseLetter, FillThePlaces, ChooseWord, ChooseAdjective, ContinueTyping, ArrangeWords, Choosing, SignleChoose, ImageChoose, ImageTyping, FillFields, CompleteWords, Drawing, ImageColoring, ImageDragging } from "@/components";
//== Store
import { useAppSelector } from "@/store/hooks";

export default function useLogic({ quizzes }: any) {
  const [pageNum, setPageNum] = useState<number>(1);
  const { correctAnswer, wrongAnswer } = useAppSelector((state: any) => state.common);

  console.log(quizzes)

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
        onMatch={(matches) => { }}
        onUnMatch={(matches) => { }}
        questionData={quizzes[pageNum - 1]}
      />,
      'ordering': <SortDragging questionData={quizzes[pageNum - 1]} />,
      'matching_with_table_dragging': <TableDragging questionData={quizzes[pageNum - 1]} />,
      'group_fill_in_blank': <WordDragging questionData={quizzes[pageNum - 1]} />,
      'group_image_single_choice': <ChooseLetter questionData={quizzes[pageNum - 1]} />,
      '6': <FillThePlaces />,
      'odd_word': <ChooseWord />,
      'group_word_single_choice': <ChooseAdjective questionData={quizzes[pageNum - 1]} />,
      'group_short_answer': <ContinueTyping questionData={quizzes[pageNum - 1]} />,
      'group_ordering': <ArrangeWords questionData={quizzes[pageNum - 1]} />,
      'group_rounded_single_choice': <Choosing questionData={quizzes[pageNum - 1]} />,
      'group_radio_single_choice': <SignleChoose questionData={quizzes[pageNum - 1]} />,
      'single_choice': <ImageChoose questionData={quizzes[pageNum - 1]} />,
      'group_fill_in_blank_image_answer': <ImageTyping questionData={quizzes[pageNum - 1]} />,
      '15': <FillFields />,
      'group_fill_in_blank_complete_words': <CompleteWords questionData={quizzes[pageNum - 1]} />,
      'drawing': <Drawing questionData={quizzes[pageNum - 1]} />,
      'coloring': <ImageColoring questionData={quizzes[pageNum - 1]} />,
      'matching_with_position': <ImageDragging questionData={quizzes[pageNum - 1]} />
    }
    return ComponentRendered[quizzes[pageNum - 1]["question_type"]];
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