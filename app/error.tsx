"use client";
//== Components
import { Error as ErrorComponent } from "@/components";

interface ErrorProps {
  error: Error,
  reset: () => void
}

const Error: React.FC<ErrorProps> = ({ error, reset }) => {
  return (
    <>
      <ErrorComponent error={error} reset={reset} />
    </>
  );
}

export default Error;