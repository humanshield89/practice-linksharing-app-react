import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { socials } from "./SocialIconsData";
import PropTypes from "prop-types";

export function CustomSelect({ options, onSelect, selected, selectedOptions }) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  // This useEffect is used to handle outside click
  // because we want the dropdown to close when the user clicks outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  return (
    <div
      ref={ref}
      className="relative w-full bg-base-200 p-3 box-border border border-base-content border-opacity-20 rounded-lg overflow-visible"
    >
      <button
        className="w-full flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex gap-2 text-base-content items-center">
          {socials[selected]?.icon} {socials[selected]?.name}
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="9"
          viewBox="0 0 14 9"
          fill="none"
        >
          <path d="M1 1L7 7L13 1" stroke="#633CFF" strokeWidth="2" />
        </svg>
      </button>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } absolute top-full mt-1 w-full left-0 z-20`}
      >
        <div className="max-h-[240px] overflow-y-auto pt-1 capitalize w-full bg-base-200 left-0 shadow-lg">
          {options.map((option) => {
            return (
              <button
                disabled={selectedOptions?.includes(option)}
                className="px-4 py-2 items-center w-full disabled:text-neutral disabled:hover:bg-inherit disabled:hover:cursor-not-allowed jus flex gap-2 border-b border-neutral hover:bg-neutral-focus cursor-pointer text-base-content"
                key={option}
                onClick={() => {
                  onSelect?.(option);
                  setIsOpen(false);
                }}
              >
                {socials[option]?.icon}
                {option}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

CustomSelect.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onSelect: PropTypes.func,
  selected: PropTypes.string,
  selectedOptions: PropTypes.arrayOf(PropTypes.string),
};
