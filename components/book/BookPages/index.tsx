"use client";
//== Modules
import { Flippy, FrontCover, BackCover, Page, Lesson } from "@/components";
//== Component Logic
import useLogic from "./logic";
//== Styles
import styles from "./bookPages.module.scss";

const BookPages = () => {
  const { pageLoaded, bookWidth, bookHeight, flippy } = useLogic();

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
          <Page />
          <BackCover />
        </Flippy>
      }
    </div>
  )
}

export default BookPages