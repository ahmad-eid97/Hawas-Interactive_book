"use client";
//== Utils
import { Player } from "@lottiefiles/react-lottie-player";

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
