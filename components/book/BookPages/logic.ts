"use client";
//== Utils
import { useEffect, useState, useRef } from "react";

export default function Logic() {
  const [pageLoaded, setPageLoaded] = useState(false);
  const [bookWidth, setBookWidth] = useState(550);
  const [bookHeight, setBookHeight] = useState(620);
  const [pageNum, setPageNum] = useState(1);
  let flippy = useRef(null);

  useEffect(() => {
    setPageLoaded(true);
  });

  useEffect(() => {
    if (window.innerWidth <= 550) {
      setBookWidth(window.innerWidth - 50);
      setBookHeight(500);
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 1300) {
        setBookWidth(550);
        setBookHeight(620);
      } else if (window.innerWidth <= 550) {
        setBookWidth(window.innerWidth - 10);
        setBookHeight(450);
      } else if (window.innerWidth > 992 && window.innerWidth < 1300) {
        setBookWidth(window.innerWidth / 2 - 50);
        setBookHeight((window.innerWidth - 50) * 1.35);
      } else if (window.innerWidth > 550 && window.innerWidth < 992) {
        setBookWidth(500);
        setBookHeight((window.innerWidth - 50) * 1.35);
      }
    });
  }, [bookWidth, bookHeight]);

  const goToNextPage = async (pageNum: number) => {
  };

  return {
    pageLoaded,
    bookWidth,
    bookHeight,
    pageNum,
    goToNextPage,
    flippy
  }
}