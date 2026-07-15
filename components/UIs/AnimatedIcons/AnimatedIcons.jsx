"use client";
//== Utils
import dynamic from "next/dynamic";

// @lottiefiles/react-lottie-player accesses `document` at import time,
// so it must only ever be loaded in the browser.
const Player = dynamic(
  () => import("@lottiefiles/react-lottie-player").then((mod) => mod.Player),
  { ssr: false }
);

const AnimatedIcons = ({ animationData }) => {
  return (
    <div>
      <Player
        autoplay
        loop
        src={animationData}
        style={{ height: "100%", width: "100%" }}
      ></Player>
    </div>
  );
};

export default AnimatedIcons;
