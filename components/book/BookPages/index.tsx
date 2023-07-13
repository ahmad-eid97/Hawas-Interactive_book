"use client";
//== Modules
import { Flippy, FrontCover, BackCover, Page, Lesson } from "@/components";
//== Component Logic
import useLogic from "./logic";
//== Styles
import styles from "./bookPages.module.scss";
import { useEffect } from "react";

const BookPages = () => {
  const { pageLoaded, bookWidth, bookHeight, pageNum, changePage, flippy } = useLogic();

  useEffect(() => {
    console.log('------------->', pageNum);
  }, [pageNum])

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
          <Lesson />
          <Page pageNum={pageNum} changePage={changePage} />
          <BackCover />
        </Flippy>
      }
    </div>
  )
}

export default BookPages