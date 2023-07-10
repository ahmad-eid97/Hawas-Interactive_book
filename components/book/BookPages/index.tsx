"use client";
//== Modules
import { Flippy, FrontCover, BackCover, Page, SortDragging, TableDragging, WordDragging, ChooseLetter, FillThePlaces, ChooseWord, ChooseAdjective, ContinueTyping } from "@/components";
//== Component Logic
import logic from "./logic";
//== Styles
import styles from "./bookPages.module.scss";

const BookPages = () => {
  const { pageLoaded, bookWidth, bookHeight, pageNum, goToNextPage, flippy } = logic();

  return (
    <div className={styles.bookPages}>
      {pageLoaded &&
        <Flippy
          pageWidth={bookWidth}
          pageHeight={bookHeight}
          rtl={true}
          backSkin="#000"
          pageSkin="#eee"
          breakpoint={992}
          flippingTime={500}
          disableSound={false}
          // flipNext={(pageNum: number) => goToNextPage(pageNum)}
          // flipPrev={goToPrevPage}
          ref={flippy}
        >
          <FrontCover />
          <Page />
          <div style={{ padding: "20px 10px" }}>
            <SortDragging />
          </div>
          <div style={{ padding: "20px 10px" }}>
            <TableDragging />
          </div>
          <div style={{ padding: "20px 10px" }}>
            <h3>إختر الإجابه الصحيحه</h3>
            <WordDragging />
          </div>
          <div style={{ padding: "20px 10px" }}>
            <ChooseLetter />
          </div>
          <div style={{ padding: "20px 10px" }}>
            <FillThePlaces />
          </div>
          <div style={{ padding: "20px 10px" }}>
            <ChooseWord />
          </div>
          <div style={{ padding: "20px 10px" }}>
            <ChooseAdjective />
          </div>
          <div style={{ padding: "20px 10px" }}>
            <ContinueTyping />
          </div>
          <BackCover />
        </Flippy>
      }
    </div>
  )
}

export default BookPages