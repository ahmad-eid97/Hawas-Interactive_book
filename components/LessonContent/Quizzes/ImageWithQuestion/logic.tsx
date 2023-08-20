//== Modules
import { Matching, SortDragging, TableDragging, ImageWordSingleChoice, WordDragging, ChooseLetter, FillThePlaces, ChooseWord, ChooseAdjective, ContinueTyping, ArrangeWords, Choosing, SignleChoose, ImageChoose, ImageTyping, FillFields, CompleteWords, Drawing, ImageColoring, ImageDragging, RandomImageWithPosition, GroupTrueAndFalse, ShortAnswerWithImage, ImagesPuzzle } from "@/components";

export default function useLogic({ questionData }: { questionData: any }) {
  const renderQuestion = () => {
    if (!questionData.children[0]) return;
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
        questionData={questionData.children[0]}
      />,  // Done
      'ordering': <SortDragging questionData={questionData.children[0]} />,  // Done
      'matching_with_table_dragging': <TableDragging questionData={questionData.children[0]} />,
      'group_rounded_fill_in_blank': <WordDragging questionData={questionData.children[0]} />,  // Done
      'group_image_single_choice': <ChooseLetter questionData={questionData.children[0]} />,
      'group_fill_in_blank': <FillThePlaces questionData={questionData.children[0]} />,  // Done
      'group_odd_word': <ChooseWord questionData={questionData.children[0]} />,  // Done
      'group_word_single_choice': <ChooseAdjective questionData={questionData.children[0]} />,  // Done
      'group_image_word_single_choice': <ImageWordSingleChoice questionData={questionData.children[0]} />,  // Done
      'group_short_answer': <ContinueTyping questionData={questionData.children[0]} />,  // Done
      'group_ordering': <ArrangeWords questionData={questionData.children[0]} />,
      'group_rounded_single_choice': <Choosing questionData={questionData.children[0]} />,  // Done
      'group_radio_single_choice': <SignleChoose questionData={questionData.children[0]} />,  // Done
      'single_choice': <ImageChoose questionData={questionData.children[0]} />,  // Done
      'group_fill_in_blank_image_answer': <ImageTyping questionData={questionData.children[0]} />,
      'group_raw_fill_in_blank': <FillFields questionData={questionData.children[0]} />,
      'group_fill_in_blank_complete_words': <CompleteWords questionData={questionData.children[0]} />,  // Done
      'drawing': <Drawing questionData={questionData.children[0]} />,  // Done
      'coloring': <ImageColoring questionData={questionData.children[0]} />,
      'matching_with_position': <ImageDragging questionData={questionData.children[0]} />,  // Done
      "random_image_with_position": <RandomImageWithPosition questionData={questionData.children[0]} />,  // Done
      "group_true_false": <GroupTrueAndFalse questionData={questionData.children[0]} />,  // Done
      "short_answer_with_image": <ShortAnswerWithImage questionData={questionData.children[0]} />,  // Done
      "images_puzzle": <ImagesPuzzle questionData={questionData.children[0]} />  // Done
    }

    return ComponentRendered[questionData.children[0]["question_type"]]
  }

  return {
    renderQuestion
  }
}