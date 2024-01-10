"use client";
//== Hooks
import { useState } from "react";
//== Components
import { TextSection, ImageSection, ImageWithText, VideoSection, AudioSection, ActivitySection, GameSection, IFrameSection, ImageAudioSection, ImageVideoSection, ImageActivitySection } from '@/components';

export default function useLogic() {
  const [pageNum, setPageNum] = useState(1);
  const [lessonsLabel] = useState<{ [key: number]: string }>({
    1: "ﭐلأَوَّلُ",
    2: "ﭐلثّاني",
    3: "ﭐلثّالِثُ",
    4: "ﭐلرّابِعُ",
    5: "ﭐلْخامِسُ",
    6: "ﭐلسّادِسُ",
    7: "ﭐلسّابِعُ",
    8: "ﭐلثّامِنُ",
    9: "ﭐلتّاسِعُ",
    10: "ﭐلعاشِرُ",
    11: "ﭐلحادي عَشَرَ",
    12: "ﭐلثّاني عَشَرَ",
    13: "ﭐلثّالِثُ عَشَرَ",
  });

  const renderPageSection = (type: string, data: any) => {
    const allSections: any = {
      text: <TextSection data={data} />,
      image: <ImageSection data={data} />,
      image_with_text: <ImageWithText data={data} />,
      video: <VideoSection data={data} />,
      audio: <AudioSection data={data} />,
      activity: <ActivitySection />,
      game: <GameSection />,
      iframe: <IFrameSection data={data} />,
      big_image_with_audio: <ImageAudioSection />,
      big_image_with_video: <ImageVideoSection />,
      big_image_with_activity: <ImageActivitySection />
    }
    return allSections[type];
  }

  const changePage = async (event: any, pageNum: number) => {
    setPageNum(pageNum);
  };

  return {
    pageNum,
    changePage,
    renderPageSection,
    lessonsLabel
  }
} 