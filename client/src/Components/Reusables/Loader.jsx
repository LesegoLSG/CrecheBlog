import React from "react";

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="flex space-x-2">
        <span className="w-4 h-4 bg-orange-600 rounded-full animate-bounce [animation-delay:0s]"></span>
        <span className="w-4 h-4 bg-orange-600 rounded-full animate-bounce [animation-delay:0.2s]"></span>
        <span className="w-4 h-4 bg-orange-600 rounded-full animate-bounce [animation-delay:0.4s]"></span>
      </div>
    </div>
  );
};

export default Loader;
