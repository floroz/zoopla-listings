import React from "react";

interface IProps {
  error: string;
  retryFetch: () => void;
}

const ErrorHandler = ({ error, retryFetch }: IProps) => {
  return (
    <div>
      <h3>Error: {error}</h3>
      <button onClick={retryFetch}>Retry</button>
    </div>
  );
};

export default ErrorHandler;
