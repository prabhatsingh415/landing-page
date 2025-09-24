import React, { useState } from "react";

function Dropdown({ text, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setOpen(!open)}
        className="inline-flex items-center px-4 py-2 rounded-md focus:outline-none"
      >
        <span className="font-[500] text-md">{text}</span>
        <svg
          className={`ml-2 h-5 w-5 transform transition-transform duration-300 ${
            open ? "rotate-180" : "rotate-0"
          }`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {open && (
        <div className="absolute mt-2 w-48 bg-white rounded-md shadow-lg z-10 p-3">
          {children}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
