"use client";
/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useCallback, forwardRef } from "react";
import { readHighlightStyles } from "@/API/teacherPanel";
import flipSound from "./assets/page-flip.mp3";
import paper from "./assets/paper.jpg";
import classes from "./Flippy.module.css";

var IS_FLIPPING = false;
var X_POSITION = null;

const Flippy = (
  {
    children,
    pageWidth,
    pageHeight,
    className = "",
    backSkin = "#965A3B",
    pageSkin = "paper",
    flippingTime = 400,
    rtl = false,
    disableSound = false,
    breakpoint = 992,
    flipNext = () => true,
    flipPrev = () => true,
    onFlip = () => true,
  },
  flippy
) => {
  // Error Handling for missing ref
  if (!flippy)
    throw new Error("Flippy component requires a ref to the flippy instance");

  const [totalPages, setTotalPages] = useState({
    coverPage: null,
    middlePages: [],
    coverEndPage: null,
  });

  const [currentPage, setCurrentPage] = useState(0);
  const [pageChangerContentIndex, setPageChangerContentIndex] = useState(null);
  const [flippyWidth, setWidth] = useState(pageWidth || 500);
  const [flippyHeight] = useState(pageHeight || 600);
  const [isFullWidth, setIsFullWidth] = useState(
    window.innerWidth > breakpoint
  );
  const [isPagesDouble, setIsPagesDouble] = useState(null);
  const [flipping, setFlipping] = useState(false);
  const [immediateFlipping, setImmediateFlipping] = useState(false);

  useEffect(() => {
    if (
      totalPages?.middlePages?.length &&
      currentPage > 0 &&
      currentPage < totalPages?.middlePages?.length + 1
    ) {
      if (immediateFlipping) return setPageChangerContentIndex(currentPage);

      if (currentPage > pageChangerContentIndex) {
        setPageChangerContentIndex(currentPage);
      } else {
        setTimeout(() => setPageChangerContentIndex(currentPage), 500);
      }
    } else {
      setPageChangerContentIndex(null);
    }
  }, [currentPage]);

  /***
   * @description
   * Apply back skin of book
   */
  useEffect(() => {
    document
      .querySelector(":root")
      .style.setProperty("--flippyBackSkin", backSkin);
    document
      .querySelector(":root")
      .style.setProperty("--flippyFlippingTime", flippingTime + "ms");
    if (pageSkin.startsWith("#")) {
      document
        .querySelector(":root")
        .style.setProperty("--flippyPaperSkin", pageSkin);
    } else if (pageSkin === "paper") {
      document
        .querySelector(":root")
        .style.setProperty("--flippyPaperSkin", `url(${paper})`);
    } else {
      document
        .querySelector(":root")
        .style.setProperty("--flippyPaperSkin", "#ffffff");
    }
  }, [backSkin, flippingTime]);

  useEffect(() => {
    readHighlightStyles(1);
  }, []);

  /***
   * @description
   * Combine each two pages into one mutli-faced page
   */
  const combinePages = useCallback(
    (cPage = currentPage, doublePage = isPagesDouble, reRender = false) => {
      if (window.innerWidth > breakpoint && doublePage && !reRender) return;
      else if (
        window.innerWidth <= breakpoint &&
        doublePage === false &&
        !reRender
      )
        return;

      const foldedPages = [{ zIndex: 0, pages: [children[0], ""] }];

      // Cutoff the covers
      let pagesWithoutCovers = children.slice(1, children?.length - 1);

      if (window.innerWidth > breakpoint) {
        // Set Full-Width mode for the book pages to false
        setIsFullWidth(false);

        // Expand the container width to fit the double-page
        if (cPage > 0 && cPage < totalPages.middlePages?.length + 1)
          setWidth((pageWidth || 500) * 2);

        // Make sure pages are double
        for (var i = 0; i < pagesWithoutCovers?.length; i++) {
          if (i % 2 !== 0) continue;

          let page1 = pagesWithoutCovers[i];
          let page2 = pagesWithoutCovers[i + 1];

          if (i + 1 <= pagesWithoutCovers?.length) {
            page2 = pagesWithoutCovers[i + 1];
          } else {
            page2 = "";
          }

          foldedPages.push({ zIndex: i + 1, pages: [page1, page2] });
        }

        // Change IsPagesDouble to true
        setIsPagesDouble(true);

        // Correcten the current page
        if (!reRender) setCurrentPage(Math.ceil(cPage / 2));
      } else if (window.innerWidth <= breakpoint) {
        // Set Full-Width mode for the book pages to true
        setIsFullWidth(true);

        // Minimize the container width to fit the single-page
        setWidth(pageWidth || 500);

        // Make sure pages are single
        for (var w = 0; w < pagesWithoutCovers?.length; w++) {
          foldedPages.push({
            zIndex: w + 1,
            pages: [pagesWithoutCovers[w], ""],
          });
        }

        // Change IsPagesDouble to false
        setIsPagesDouble(false);

        // Correcten the current page
        if (!reRender) setCurrentPage(Math.floor(cPage * 2));
      }

      // Add the last page
      foldedPages.push({
        zIndex: children.length - 1,
        pages: ["", children[children?.length - 1]],
      });

      /**
       * Make sure the last page is always backfaced
       */
      if (children?.length % 2 !== 0) {
        let [page1, page2] = foldedPages[foldedPages?.length - 1].pages;
        foldedPages[foldedPages?.length - 1].pages = [page2, page1];
      }
      /**
       * Setup pages z-indexes order
       */
      foldedPages.map((page, idx) => {
        page.zIndex = foldedPages?.length - idx;
        return page;
      });

      setTotalPages({
        coverPage: foldedPages[0],
        middlePages: foldedPages.slice(1, foldedPages?.length - 1),
        coverEndPage: foldedPages[foldedPages?.length - 1],
      });
    },
    [children, breakpoint, currentPage]
  );

  useEffect(() => {
    combinePages();

    if (isPagesDouble) {
      if (totalPages.middlePages?.length * 2 + 2 !== children?.length) {
        combinePages(currentPage, isPagesDouble, true);
      }
    } else {
      if (totalPages.middlePages?.length + 2 !== children?.length) {
        combinePages(currentPage, isPagesDouble, true);
      }
    }
  }, [children]);

  /***
   * @description
   * Check content width and height on the window resize event or in screen size change
   */
  useEffect(() => {
    // Check window width compare to breakpoint and set cover to single or double
    checkFlippedCoverWidth();
    // Check window width compare to breakpoint and set cover end to single or double
    checkCoverEndWidth();
    // window resize event listener for check content width and height
    window.onresize = () => {
      if (
        (window.innerWidth > breakpoint && isFullWidth) ||
        (window.innerWidth <= breakpoint && !isFullWidth)
      ) {
        combinePages(currentPage, isPagesDouble);
        checkFlippedCoverWidth();
        checkCoverEndWidth();
      }
    };

    return () => {
      window.onresize = null;
    };
  }, [breakpoint, currentPage, isPagesDouble]);

  /***
   * @description
   * Check window width compare to breakpoint and set cover to single or double
   */
  const checkFlippedCoverWidth = () => {
    let flippedCover = document.querySelector(
      `.${classes.flipped}.${classes.cover}`
    );
    if (!flippedCover) return;

    if (window.matchMedia(`(max-width: ${breakpoint}px)`).matches) {
      flippedCover.classList.add(classes.atBreakpoint);
    } else {
      flippedCover.classList.remove(classes.atBreakpoint);
    }
  };

  /***
   * @description
   * Check window width compare to breakpoint and set cover end to single or double
   */
  const checkCoverEndWidth = () => {
    let CoverEnd = document.querySelector(`.${classes.cover_end}`);
    if (!CoverEnd) return;

    if (window.matchMedia(`(max-width: ${breakpoint}px)`).matches) {
      CoverEnd.classList.add(classes.atBreakpoint);
    } else {
      CoverEnd.classList.remove(classes.atBreakpoint);
    }
  };

  /***
   * @description
   * Create flip sound effect and run it
   */
  const runFlipSound = () => {
    const audio = document.createElement("audio");
    audio.src = flipSound;
    audio.play();
  };

  /***
   * @description
   * Go to specific page
   */
  flippy.goToPage = (page) => {

    if (
      +page < 0 ||
      (+page >= totalPages.middlePages.length + 2 && !isPagesDouble) ||
      (+page >= totalPages.middlePages.length * 2 + 2 && isPagesDouble) ||
      IS_FLIPPING
    )
      return;

    setImmediateFlipping(true);

    let pageToGo = isPagesDouble ? Math.floor(page / 2) : +page;

    if (currentPage === 0) goNextPage();

    if (currentPage < pageToGo) {
      flipPageNextAnimation(true);
    }

    if (currentPage > pageToGo) {
      flipPagePrevAnimation(true);
    }

    // Change Book Status
    if (
      pageToGo > 0 &&
      pageToGo < totalPages.middlePages.length + 2 &&
      window.innerWidth > breakpoint
    ) {
      if (flippyWidth !== (pageWidth || 500) * 2)
        setWidth((pageWidth || 500) * 2);
    } else {
      setWidth(pageWidth || 500);
    }

    // show page cover after animation
    if (pageToGo === 0) {
      flippy.current
        .querySelector(`.${classes.cover}`)
        .style.setProperty("visibility", "visible");
    } // show page end cover after animation
    else if (pageToGo === totalPages.middlePages.length + 2) {
      flippy.current
        .querySelector(`.${classes.cover_end}`)
        .style.setProperty("visibility", "visible");
    } else {
      flippy.current
        .querySelector(`.${classes.cover}`)
        .style.setProperty("visibility", "hidden");
      flippy.current
        .querySelector(`.${classes.cover_end}`)
        .style.setProperty("visibility", "hidden");
    }

    if (pageToGo > 0 && pageToGo < totalPages.middlePages.length + 2) {
      document
        .querySelector(`.${classes.page_changer_right}`)
        .style.setProperty("visibility", "visible");
      document
        .querySelector(`.${classes.page_changer_left}`)
        .style.setProperty("visibility", "visible");
    } else {
      document
        .querySelector(`.${classes.page_changer_right}`)
        .style.setProperty("visibility", "hidden");
      document
        .querySelector(`.${classes.page_changer_left}`)
        .style.setProperty("visibility", "hidden");
    }

    // add a book back skin
    if (pageToGo > 0 && pageToGo < totalPages.middlePages.length + 1) {
      if (!flippy.current.classList.contains(classes.bookOpen))
        flippy.current.classList.add(classes.bookOpen);
    } else {
      flippy.current.classList.remove(classes.bookOpen);
    }

    // Run onFlip function
    if (typeof onFlip === "function") onFlip(page);

    setCurrentPage(pageToGo);

    setTimeout(() => {
      setImmediateFlipping(false);
    }, flippingTime);
  };

  /***
   * @description
   * Get Current Page Number
   */
  flippy.getCurrentPageNumber = () => {
    if (isPagesDouble) {
      return currentPage * 2 <= 0 ? 1 : currentPage * 2;
    }
    return currentPage <= 0 ? 1 : currentPage + 1;
  };

  /***
   * @description
   * Get Total Pages Count
   */
  flippy.getTotalPagesCount = () => {
    if (isPagesDouble) {
      return totalPages.middlePages.length * 2 + 2;
    }
    return totalPages.middlePages.length + 2;
  };

  /***
   * @description
   * Get Internal Pages Count
   */
  flippy.getInternalPagesCount = () => {
    if (isPagesDouble) {
      return totalPages.middlePages.length * 2;
    }
    return totalPages.middlePages.length;
  };

  /***
   * @description
   * Go to next page handler
   */
  const goNextPage = () => {
    if (IS_FLIPPING) return;
    // Run flipNext function
    if (
      typeof flipNext === "function" &&
      flipNext(
        currentPage + 1 > totalPages.middlePages.length + 2
          ? currentPage + 1
          : currentPage + 2
      ) === false
    )
      return;

    // Run onFlip animation
    if (currentPage !== 0) flipPageNextAnimation();

    const doNextFlipping = () =>
      setCurrentPage((p) => {
        // Next Page Index
        let newPage = p;
        if (p === 0) newPage = 1;
        else if (p + 1 <= totalPages.middlePages.length + 1) newPage = p + 1;

        // hide page cover after animation
        if (p === 0) {
          setTimeout(() => {
            flippy.current
              .querySelector(`.${classes.cover}`)
              .style.setProperty("visibility", "hidden");
          }, 500);
        }

        // hide page end cover after animation
        if (newPage === totalPages.middlePages.length + 1) {
          flippy.current
            .querySelector(`.${classes.cover_end}`)
            .style.setProperty("visibility", "visible");
        }

        // Change Book Status
        if (
          newPage > 0 &&
          newPage < totalPages.middlePages.length + 1 &&
          window.innerWidth > breakpoint
        ) {
          if (flippyWidth !== (pageWidth || 500) * 2)
            setWidth((pageWidth || 500) * 2);
        } else {
          setWidth(pageWidth || 500);
        }

        // Change page changer visibility
        if (newPage > 0 && newPage < totalPages.middlePages.length + 1) {
          document
            .querySelector(`.${classes.page_changer_right}`)
            .style.setProperty("visibility", "visible");
          document
            .querySelector(`.${classes.page_changer_left}`)
            .style.setProperty("visibility", "visible");
        } else {
          document
            .querySelector(`.${classes.page_changer_right}`)
            .style.setProperty("visibility", "hidden");
          document
            .querySelector(`.${classes.page_changer_left}`)
            .style.setProperty("visibility", "hidden");
        }

        // add a book back skin
        if (newPage > 0 && newPage < totalPages.middlePages.length + 1) {
          if (!flippy.current.classList.contains(classes.bookOpen))
            flippy.current.classList.add(classes.bookOpen);
        } else {
          flippy.current.classList.remove(classes.bookOpen);
        }

        // Run onFlip function
        if (typeof onFlip === "function") onFlip(newPage + 1);

        // Set New Current Page
        return newPage;
      });

    if (currentPage === 0 || currentPage + 1 !== totalPages.middlePages.length + 1) {
      document.querySelector(`.${classes.top_pin}`).classList.add(classes.open);
      document.querySelector(`.${classes.bottom_pin}`).classList.add(classes.open);
    } else if (currentPage + 1 === totalPages.middlePages.length + 1) {
      document.querySelector(`.${classes.top_pin}`).classList.remove(classes.open);
      document.querySelector(`.${classes.bottom_pin}`).classList.remove(classes.open);
    }

    if (
      currentPage === 0 ||
      currentPage + 1 === totalPages.middlePages.length + 1
    ) {
      doNextFlipping();
    }
    else {
      setTimeout(() => doNextFlipping(), flippingTime);
    }
  };

  /***
   * @description
   * Show next page flipping animation
   */
  const flipPageNextAnimation = (isImmediate) => {
    IS_FLIPPING = true;
    setFlipping(true);

    if (!disableSound) runFlipSound();

    checkFlippedCoverWidth();

    let rightFlipper = document.querySelector(
      `.${classes.page_changer_right} .${classes.flipped_page}`
    );
    // add flipping class
    rightFlipper.classList.add(classes.flipping);
    // set flipping transition
    rightFlipper.style.setProperty(
      "transition",
      `width ${flippingTime}ms, right ${flippingTime}ms, left ${flippingTime}ms`
    );
    // In Double Pages Mode, left flipper moves to the middle of the page while animating
    if (window.innerWidth > breakpoint) {
      if (currentPage === 0 && isImmediate) {
        rightFlipper.style.setProperty(
          rtl ? "left" : "right",
          flippyWidth + 10 + "px",
          "important"
        );
        document.querySelector(`.${classes.top_pin}`).classList.add(classes.open);
        document.querySelector(`.${classes.bottom_pin}`).classList.add(classes.open);
      } else {
        rightFlipper.style.setProperty(
          rtl ? "left" : "right",
          flippyWidth / 2 + 10 + "px",
          "important"
        );
        document.querySelector(`.${classes.top_pin}`).classList.remove(classes.open);
        document.querySelector(`.${classes.bottom_pin}`).classList.remove(classes.open);
      }
    }
    // In Double Pages Mode, width of left flipper is half of the page width
    if (window.innerWidth > breakpoint) {
      if (currentPage === 0 && isImmediate)
        rightFlipper.style.setProperty(
          "width",
          flippyWidth + 10 + "px",
          "important"
        );
      else
        rightFlipper.style.setProperty(
          "width",
          flippyWidth / 2 + 10 + "px",
          "important"
        );
    } else {
      // In Single Page Mode, width of left flipper is full of the page width
      rightFlipper.style.setProperty(
        "width",
        flippyWidth - 10 + "px",
        "important"
      );
    }

    setTimeout(() => {
      // remove flipping class
      rightFlipper.classList.remove(classes.flipping);
      rightFlipper.style.setProperty("transition", `none`);
      rightFlipper.style.opacity = 0;
      if (window.innerWidth > breakpoint)
        rightFlipper.style.setProperty(rtl ? "left" : "right", 10 + "px");
      rightFlipper.style.setProperty("width", "0px");
      setTimeout(() => {
        rightFlipper.style.opacity = 1;
        setFlipping(false);
        IS_FLIPPING = false;
        rightFlipper.style.setProperty(
          "transition",
          `width ${flippingTime}ms, right ${flippingTime}ms, left ${flippingTime}ms`
        );
      }, 10);
    }, flippingTime);
  };

  // Add flipNext functionality to flippy instance
  flippy.flipNext = goNextPage;

  /**
   * @description
   * Go to previous page handler
   */
  const goPrevPage = () => {
    if (IS_FLIPPING) return;
    // Run flipPrev function
    if (
      typeof flipPrev === "function" &&
      flipPrev(currentPage - 1 < 0 ? currentPage + 1 : currentPage) === false
    )
      return;

    // Run onFlip animation
    if (currentPage < totalPages.middlePages.length + 1 && currentPage !== 0)
      flipPagePrevAnimation();

    const doPrevFlipping = () =>
      setCurrentPage((p) => {
        // Prev Page Index
        const newPage = p - 1 < 0 ? p : p - 1;

        // hide page cover after animation
        if (newPage === 0) {
          flippy.current
            .querySelector(`.${classes.cover}`)
            .style.setProperty("visibility", "visible");
        }

        // hide page end cover after animation
        if (newPage < totalPages.middlePages.length + 1) {
          setTimeout(() => {
            flippy.current
              .querySelector(`.${classes.cover_end}`)
              .style.setProperty("visibility", "hidden");
          }, 500);
        }

        // Change Book Status
        if (
          newPage > 0 &&
          newPage < totalPages.middlePages.length + 1 &&
          window.innerWidth > breakpoint
        ) {
          if (flippyWidth !== (pageWidth || 500) * 2)
            setWidth((pageWidth || 500) * 2);
        } else {
          setWidth(pageWidth || 500);
        }

        // Change page changer visibility
        if (newPage > 0 && newPage < totalPages.middlePages.length + 1) {
          document
            .querySelector(`.${classes.page_changer_right}`)
            .style.setProperty("visibility", "visible");
          document
            .querySelector(`.${classes.page_changer_left}`)
            .style.setProperty("visibility", "visible");
        } else {
          document
            .querySelector(`.${classes.page_changer_right}`)
            .style.setProperty("visibility", "hidden");
          document
            .querySelector(`.${classes.page_changer_left}`)
            .style.setProperty("visibility", "hidden");
        }

        // add a book back skin
        if (newPage > 0 && newPage < totalPages.middlePages.length + 1) {
          if (!flippy.current.classList.contains(classes.bookOpen))
            flippy.current.classList.add(classes.bookOpen);
        } else {
          flippy.current.classList.remove(classes.bookOpen);
        }

        // Run onFlip function
        if (typeof onFlip === "function") onFlip(newPage + 1);

        // Set New Current Page
        return newPage;
      });


    if (currentPage - 1 === 0) {
      document.querySelector(`.${classes.top_pin}`).classList.remove(classes.open);
      document.querySelector(`.${classes.bottom_pin}`).classList.remove(classes.open);
    } else if (currentPage === totalPages.middlePages.length + 1) {
      document.querySelector(`.${classes.top_pin}`).classList.add(classes.open);
      document.querySelector(`.${classes.bottom_pin}`).classList.add(classes.open);
    }

    if (
      currentPage - 1 === 0 ||
      currentPage === totalPages.middlePages.length + 1
    )
      doPrevFlipping();
    else setTimeout(doPrevFlipping, flippingTime);
  };

  /***
   * @description
   * Show prev page flipping animation
   */
  const flipPagePrevAnimation = (isImmediate) => {
    IS_FLIPPING = true;
    setFlipping(true);

    if (!disableSound) runFlipSound();

    checkCoverEndWidth();

    let leftFlipper = document.querySelector(
      `.${classes.page_changer_left} .${classes.flipped_page}`
    );
    // add flipping class
    leftFlipper.classList.add(classes.flipping);
    // add transition
    leftFlipper.style.setProperty(
      "transition",
      `width ${flippingTime}ms, right ${flippingTime}ms, left ${flippingTime}ms`
    );
    // In Double Pages Mode, left flipper moves to the middle of the page while animating
    if (window.innerWidth > breakpoint) {
      if (currentPage === totalPages.middlePages.length + 1 && isImmediate)
        leftFlipper.style.setProperty(
          rtl ? "right" : "left",
          flippyWidth + 10 + "px",
          "important"
        );
      else
        leftFlipper.style.setProperty(
          rtl ? "right" : "left",
          flippyWidth / 2 + 10 + "px",
          "important"
        );
    }
    // In Double Pages Mode, width of left flipper is half of the page width
    if (window.innerWidth > breakpoint) {
      if (currentPage === totalPages.middlePages.length + 1 && isImmediate)
        leftFlipper.style.setProperty(
          "width",
          flippyWidth + 10 + "px",
          "important"
        );
      else
        leftFlipper.style.setProperty(
          "width",
          flippyWidth / 2 + 10 + "px",
          "important"
        );
    } else {
      // In Single Page Mode, width of left flipper is full of the page width
      leftFlipper.style.setProperty(
        "width",
        flippyWidth - 10 + "px",
        "important"
      );
    }
    setTimeout(() => {
      // remove flipping class
      leftFlipper.classList.remove(classes.flipping);
      // unset transition
      leftFlipper.style.setProperty("transition", `none`);
      leftFlipper.style.opacity = 0;
      if (window.innerWidth > breakpoint)
        leftFlipper.style.setProperty(rtl ? "right" : "left", 10 + "px");
      leftFlipper.style.setProperty("width", "0px");
      setTimeout(() => {
        leftFlipper.style.opacity = 1;
        IS_FLIPPING = false;
        setFlipping(false);
        leftFlipper.style.setProperty(
          "transition",
          `width ${flippingTime}ms, right ${flippingTime}ms, left ${flippingTime}ms`
        );
      }, 10);
    }, flippingTime);
  };

  // Add flipPrev functionality to flippy instance
  flippy.flipPrev = goPrevPage;

  /***
   * @description
   * Change Current Page on click on the page changer elements
   */
  const handlePageChangerClick = (e) => {
    const page_changer_el =
      e.target.classList.contains(classes.page_changer) ||
      e.target.parentElement.classList.contains(classes.page_changer);
    const page_changer_right_el =
      e.target.classList.contains(classes.page_changer_right) ||
      e.target.parentElement.classList.contains(classes.page_changer_right);
    const page_changer_left_el =
      e.target.classList.contains(classes.page_changer_left) ||
      e.target.parentElement.classList.contains(classes.page_changer_left);
    if (page_changer_el && page_changer_right_el) goNextPage();
    if (page_changer_el && page_changer_left_el) goPrevPage();
  };

  const unify = (e) => (e.changedTouches ? e.changedTouches[0] : e);

  /***
   * @description
   * Start Sliding Pages Event Handler
   */
  const handleTouchStart = (evt) => {
    if (evt.target.classList.contains(classes.face)) {
      let event = unify(evt);
      X_POSITION = event.clientX;
    }
  };

  /***
   * @description
   * End Sliding Pages Event Handler
   */
  const handleTouchEnd = (evt, isFront) => {
    let event = unify(evt);

    if (!X_POSITION) return;
    const isBack = !isFront;

    let ENDED_X_POSITION = event.clientX;

    if (X_POSITION - ENDED_X_POSITION > 0) {
      /* right to left swipe */
      if (window.innerWidth < breakpoint) {
        if (rtl) goPrevPage();
        else goNextPage();
      } else {
        if (isBack && !rtl) {
          goNextPage();
        } else if (isFront && rtl) {
          goPrevPage();
        }
      }
    } else if (X_POSITION - ENDED_X_POSITION < 0) {
      /* left to right swipe */
      if (window.innerWidth < breakpoint) {
        if (rtl) goNextPage();
        else goPrevPage();
      } else {
        if (isFront && !rtl) goPrevPage();
        else if (isBack && rtl) goNextPage();
      }
    }

    /* reset values */
    X_POSITION = null;
  };

  /***
   * @description
   * Handle Page Changer Flipped Page Content
   */
  let PageChangerRightContent = null;
  let PageChangerLeftContent = null;

  if (pageChangerContentIndex !== null) {
    // Page Changer Right Content
    if (pageChangerContentIndex < totalPages.middlePages.length) {
      if (immediateFlipping)
        PageChangerRightContent =
          totalPages.middlePages[pageChangerContentIndex - 1].pages[0];
      else
        PageChangerRightContent =
          totalPages.middlePages[pageChangerContentIndex].pages[0];
    }
    // Page Changer Left Content
    if (pageChangerContentIndex - 2 >= 0) {
      if (window.innerWidth > breakpoint) {
        if (immediateFlipping)
          PageChangerLeftContent =
            totalPages.middlePages[pageChangerContentIndex - 1]?.pages[1];
        else
          PageChangerLeftContent =
            totalPages.middlePages[pageChangerContentIndex - 2]?.pages[1];
      } else {
        if (immediateFlipping)
          PageChangerLeftContent =
            totalPages.middlePages[pageChangerContentIndex - 1]?.pages[0];
        else
          PageChangerLeftContent =
            totalPages.middlePages[pageChangerContentIndex - 2]?.pages[0];
      }
    }
  }

  return (
    <div
      className={`${classes.flippy_container} ${currentPage !== 0 ? classes.bookOpened : ""}`}
      style={{ width: flippyWidth + 80, height: flippyHeight + 60 }}
    >
      <div
        className={`${className} ${classes.flippy} ${rtl ? classes.rtl : ""}`}
        style={{ width: flippyWidth, height: flippyHeight }}
        ref={flippy}
      >
        <b className={classes.top_pin}></b>
        <b className={classes.bottom_pin}></b>
        <span
          className={`${classes.page_changer} ${classes.page_changer_right}`}
          onClick={handlePageChangerClick}
          style={{ zIndex: totalPages?.middlePages?.length + 3 || 9 }}
        >
          <span className={classes.edge} />
          <span className={classes.edge} />
          <span className={classes.edge} />
          <span className={classes.edge} />
          <span className={classes.flipped_page}>
            {totalPages.middlePages.length &&
              currentPage > 0 &&
              currentPage < totalPages.middlePages.length + 1 && (
                <div className={classes.page}>{PageChangerRightContent}</div>
              )}
          </span>
        </span>
        {totalPages.coverPage && (
          <SinglePage
            page={totalPages.coverPage}
            isFlipped={currentPage >= 1}
            demoPages={totalPages.middlePages[0].pages}
            goNext={goNextPage}
            goPrev={goPrevPage}
            isCover={true}
            breakpoint={breakpoint}
          />
        )}

        {totalPages.middlePages.length &&
          currentPage > 0 &&
          currentPage < totalPages.middlePages.length + 1 && (
            <MiddlePages
              pages={totalPages.middlePages}
              currentPage={currentPage}
              isFullWidth={isFullWidth}
              touchStart={handleTouchStart}
              touchEnd={handleTouchEnd}
              flipping={flipping}
            />
          )}

        {totalPages.coverEndPage && (
          <SinglePage
            page={totalPages.coverEndPage}
            isFlipped={currentPage >= totalPages.middlePages.length + 1}
            demoPages={
              totalPages.middlePages[totalPages.middlePages.length - 1].pages
            }
            goNext={goNextPage}
            goPrev={goPrevPage}
            isCover={false}
            breakpoint={breakpoint}
          />
        )}
        <span
          className={`${classes.page_changer} ${classes.page_changer_left}`}
          onClick={handlePageChangerClick}
          style={{ zIndex: totalPages?.middlePages?.length + 3 || 9 }}
        >
          <span className={classes.edge} />
          <span className={classes.edge} />
          <span className={classes.edge} />
          <span className={classes.edge} />
          <span className={classes.flipped_page}>
            {totalPages.middlePages.length &&
              currentPage > 1 &&
              currentPage < totalPages.middlePages.length + 1 && (
                <div className={classes.page}>{PageChangerLeftContent}</div>
              )}
          </span>
        </span>
      </div>
    </div>
  );
};

const SinglePage = ({
  page,
  demoPages,
  isFlipped,
  goNext,
  goPrev,
  isCover,
  breakpoint,
}) => {
  // Destructure Pages from page object prop
  const [CoverPage, CoverEndPage] = page.pages;

  // The Rendered Page
  const Page = CoverPage || CoverEndPage;

  // Demo content for the backfaced cover & end pages
  let Front2DemoContent = demoPages[0];
  let BackDemoContent = demoPages[0];

  if (isCover && window.innerWidth < breakpoint) {
    Front2DemoContent = demoPages[0];
    BackDemoContent = "";
  } else if (isCover && window.innerWidth > breakpoint) {
    Front2DemoContent = demoPages[1];
    BackDemoContent = demoPages[0];
  } else if (!isCover) {
    Front2DemoContent = demoPages[0];
    BackDemoContent = "";
  }

  return (
    <div
      className={`${classes.page} ${isCover ? classes.cover : classes.cover_end
        } ${isFlipped ? classes.flipped : ""}`}
      style={{ zIndex: page.zIndex }}
      title={isCover ? "Open The Book" : "Re-Open The Book"}
      onClick={() => (isCover ? goNext() : goPrev())}
    >
      <div className={`${classes.face} ${classes.front2}`}>
        {Front2DemoContent}
      </div>
      <div className={`${classes.face} ${classes.front}`}>{Page}</div>
      <div className={`${classes.face} ${classes.back}`}>{BackDemoContent}</div>
    </div>
  );
};

const MiddlePages = ({
  pages,
  currentPage,
  isFullWidth,
  touchStart,
  touchEnd,
  flipping,
}) => {
  const currentPageIndex = currentPage - 1;
  const [FrontPage, BackPage] = pages[currentPageIndex].pages;

  return (
    <div
      className={`${classes.page} ${isFullWidth ? classes.full_width : ""} ${flipping ? classes.flipping : ""
        }`}
      style={{ zIndex: pages[currentPageIndex].zIndex }}
    >
      <div
        className={`${classes.face} ${classes.front}`}
        onMouseDown={touchStart}
        onMouseUp={(e) => touchEnd(e, true)}
        onTouchStart={touchStart}
        onTouchEnd={(e) => touchEnd(e)}
      >
        {FrontPage}
      </div>
      <div
        className={`${classes.face} ${classes.back}`}
        onMouseDown={touchStart}
        onMouseUp={(e) => touchEnd(e)}
        onTouchStart={touchStart}
        onTouchEnd={(e) => touchEnd(e)}
      >
        {BackPage}
      </div>
    </div>
  );
};

export default forwardRef(Flippy);
