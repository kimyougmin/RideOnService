import React from "react";

interface PostFilterMenuProps {
  value: string;
  onChange: (value: string) => void;
}

export default function PostFilterMenu({ value, onChange }: Readonly<PostFilterMenuProps>) {
  return (
    <div className="flex flex-col gap-4 font-light">
      <span
        className={`text-sub-title dark:text-black1 cursor-pointer ${
          value === "all" ? "font-bold text-primaryRed dark:text-primaryRed" : ""
        }`}
        onClick={() => onChange("all")}
      >
        전체
      </span>
      <span
        className={`text-sub-title dark:text-black1 cursor-pointer ${
          value === "SOLVED" ? "font-bold text-primaryRed dark:text-primaryRed" : ""
        }`}
        onClick={() => onChange("SOLVED")}
      >
        해결
      </span>
      <span
        className={`text-sub-title dark:text-black1 cursor-pointer ${
          value === "UNSOLVED" ? "font-bold text-primaryRed dark:text-primaryRed" : ""
        }`}
        onClick={() => onChange("UNSOLVED")}
      >
        미해결
      </span>
    </div>
  );
}
