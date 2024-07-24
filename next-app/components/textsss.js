"use client";

import { useState } from "react";
import clsx from "clsx";

const MyComponent = () => {
  const [activeItem, setActiveItem] = useState("Solo"); // Initialize to "Solo"

  const handleClick = (item) => {
    setActiveItem(item === activeItem ? null : item); // Toggle active item
  };

  return (
    <div className="Salit flex justify-center items-center w-full bg-gray-200">
      <div
        className={clsx(
          "item m-2 p-2 rounded transition-colors duration-300 cursor-pointer",
          activeItem === "Solo"
            ? "bg-white text-black"
            : "bg-gray-200 text-gray-500",
          "py-2 px-16"
        )}
        onClick={() => handleClick("Solo")}
      >
        Solo
      </div>
      <div
        className={clsx(
          "item m-2 p-2 rounded transition-colors duration-300 cursor-pointer",
          activeItem === "Joint"
            ? "bg-white text-black"
            : "bg-gray-200 text-gray-500",
          "py-2 px-16"
        )}
        onClick={() => handleClick("Joint")}
      >
        Joint
      </div>
    </div>
  );
};

export default MyComponent;
