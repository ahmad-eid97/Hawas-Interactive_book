"use client";
//== Hooks
import { useState } from "react";
//== Modules
import { Matching, SortDragging, TableDragging, ImageWordSingleChoice, WordDragging, ChooseLetter, FillThePlaces, ChooseWord, ChooseAdjective, ContinueTyping, ArrangeWords, Choosing, SignleChoose, ImageChoose, ImageTyping, FillFields, CompleteWords, Drawing, ImageColoring, ImageDragging, ImageWithQuestion, AudioWithQuestion, VideoWithQuestion, RandomImageWithPosition, GroupTrueAndFalse, ShortAnswerWithImage, ImagesPuzzle, MultipleChoose, ListSingleChoice, ColoringAndDragging, OpenEnded, GroupOpenEnded, GroupShortAnswer2 } from "@/components";
//== Store
import { useAppSelector } from "@/store/hooks";

export default function useLogic({ quizzes, bookId }: any) {
  const [pageNum, setPageNum] = useState<number>(1);
  const { correctAnswer, wrongAnswer } = useAppSelector((state: any) => state.common);

  const renderQuiz = () => {
    if (quizzes?.length === 0) return null;
    const ComponentRendered: { [type: string]: JSX.Element } = {
      'matching_with_two_titles': <Matching
        key={pageNum - 1}
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
      'ordering': <SortDragging questionData={quizzes[pageNum - 1]} key={pageNum - 1} />,
      'matching_with_table_dragging': <TableDragging questionData={quizzes[pageNum - 1]} key={pageNum - 1} />,
      'group_rounded_fill_in_blank': <WordDragging questionData={quizzes[pageNum - 1]} key={pageNum - 1} />,
      'group_image_single_choice': <ChooseLetter questionData={quizzes[pageNum - 1]} key={pageNum - 1} />,
      'group_fill_in_blank': <FillThePlaces questionData={quizzes[pageNum - 1]} key={pageNum - 1} />,
      'group_odd_word': <ChooseWord questionData={quizzes[pageNum - 1]} key={pageNum - 1} />,
      'group_word_single_choice': <ChooseAdjective questionData={quizzes[pageNum - 1]} key={pageNum - 1} />,
      'group_image_word_single_choice': <ImageWordSingleChoice questionData={quizzes[pageNum - 1]} key={pageNum - 1} />,
      'group_short_answer': <ContinueTyping questionData={quizzes[pageNum - 1]} key={pageNum - 1} />,
      'group_ordering': <ArrangeWords questionData={quizzes[pageNum - 1]} key={pageNum - 1} />,
      'group_rounded_single_choice': <Choosing questionData={quizzes[pageNum - 1]} key={pageNum - 1} />,
      'group_radio_single_choice': <SignleChoose questionData={quizzes[pageNum - 1]} key={pageNum - 1} />,
      'single_choice': <ImageChoose questionData={quizzes[pageNum - 1]} key={pageNum - 1} />,
      'group_fill_in_blank_image_answer': <ImageTyping questionData={quizzes[pageNum - 1]} key={pageNum - 1} />,
      'group_raw_fill_in_blank': <FillFields questionData={quizzes[pageNum - 1]} key={pageNum - 1} />,
      'group_fill_in_blank_complete_words': <CompleteWords questionData={quizzes[pageNum - 1]} key={pageNum - 1} />,
      'drawing': <Drawing questionData={quizzes[pageNum - 1]} key={pageNum - 1} />,
      'coloring': <ImageColoring questionData={quizzes[pageNum - 1]} key={pageNum - 1} />,
      'matching_with_position': <ImageDragging questionData={quizzes[pageNum - 1]} key={pageNum - 1} />,
      "group_image_questions": <ImageWithQuestion questionData={quizzes[pageNum - 1]} key={pageNum - 1} />,
      "group_audio_questions": <AudioWithQuestion questionData={quizzes[pageNum - 1]} key={pageNum - 1} />,
      "group_video_questions": <VideoWithQuestion questionData={quizzes[pageNum - 1]} key={pageNum - 1} />,
      "random_image_with_position": <RandomImageWithPosition questionData={quizzes[pageNum - 1]} key={pageNum - 1} />,
      "group_true_false": <GroupTrueAndFalse questionData={quizzes[pageNum - 1]} key={pageNum - 1} />,
      "short_answer_with_image": <ShortAnswerWithImage questionData={quizzes[pageNum - 1]} key={pageNum - 1} />,
      "puzzle_ordering": <ImagesPuzzle questionData={quizzes[pageNum - 1]} key={pageNum - 1} />,
      "group_multiple_choice": <MultipleChoose questionData={quizzes[pageNum - 1]} key={pageNum - 1} />,
      "group_list_single_choice": <ListSingleChoice questionData={quizzes[pageNum - 1]} key={pageNum - 1} />,
      "fill_in_the_blank_with_color": <ColoringAndDragging questionData={quizzes[pageNum - 1]} key={pageNum - 1} />,
      "open_ended": <OpenEnded questionData={quizzes[pageNum - 1]} key={pageNum - 1} />,
      "group_open_ended": <GroupOpenEnded questionData={quizzes[pageNum - 1]} bookId={bookId} key={pageNum - 1} />,
      "group_short_answer_2": <GroupShortAnswer2 questionData={quizzes[pageNum - 1]} bookId={bookId} key={pageNum - 1} />
    }
    return ComponentRendered[quizzes[pageNum - 1]["question_type"]];
  }

  const changePage = async (event: any, pageNum: number) => {
    setPageNum(pageNum);
  };

  return {
    renderQuiz,
    changePage,
    correctAnswer,
    wrongAnswer
  }
}