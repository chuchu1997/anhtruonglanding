import React from "react";

const Loading: React.FC = () => {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <div className="border-t-4 border-blue-500 border-solid rounded-full w-12 h-12 animate-spin"></div>
    </div>
  );
};

export default Loading;
