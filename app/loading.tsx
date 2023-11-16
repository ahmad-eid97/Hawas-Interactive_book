"use client";
//== Components
import { MainLoader } from "@/components";

interface LoadingProps { }

const Loading: React.FC<LoadingProps> = () => {
  return (
    <MainLoader />
  );
}

export default Loading;