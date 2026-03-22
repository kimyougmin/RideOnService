import React from "react";

export type MoreButtonProps = Pick<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  "onClick"
>;
function MoreButton({ onClick }: Readonly<MoreButtonProps>) {
  return (
    <button onClick={onClick} className="bg-black11 dark:bg-white2">
      <span className="bg-black2 dark:bg-black11">더보기</span>
    </button>
  );
}

export default MoreButton;
