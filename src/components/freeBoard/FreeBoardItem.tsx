import React from 'react';
import Link from "next/link";
import Image from "next/image";

function FreeBoardItem() {
  return (
    <div>
      <Link
       href={``}
      className="min-h-64 col-span-3 flex flex-col bg-black1 drop-shadow-custom2 rounded-xl overflow-hidden dark:bg-black7 dark:text-black1 relative"
      >
      <div
        className="absolute top-4 left-4 px-3 py-2 bg-black2/70 backdrop-blur-sm rounded-lg flex items-center gap-2"
      >
        <svg
          width="16"
          height="15"
          viewBox="0 0 16 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 4.09091C16 1.83156 14.1345 0 11.8333 0C10.1128 0 8.63581 1.02389 8 2.48493C7.3642 1.02389 5.88722 0 4.16667 0C1.86548 0 0 1.83156 0 4.09091C0 10.6551 8 15 8 15C8 15 16 10.6551 16 4.09091Z"
            fill="#DC3644"
          />
        </svg>
        <span className="text-body1 text-primaryRed">1</span>
      </div>
      <div
        className="flex h-52 items-center gap-2 rounded-t-lg overflow-hidden border-b-[0.5px] border-black4"
      >
        <img
        src="post.image || 'https://placehold.co/300x200?text=RideOn'"
        alt="placeholder"
        className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col gap-2 p-4">
        <h3 className="text-sub-title font-bold truncate">제목</h3>
        <p className="text-body1 line-clamp-3 font-light">
          내용
        </p>
        <div className="flex items-center gap-2 overflow-hidden">
          <svg
            width="15"
            height="15"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.33333 3.5L5 18.5"
              stroke="black-4"
              className="stroke-black4"
              stroke-width="1.5"
              stroke-linecap="round"
            />
            <path
              d="M17.083 14.334H2.08301"
              stroke="black-4"
              className="stroke-black4"
              stroke-width="1.5"
              stroke-linecap="round"
            />
            <path
              d="M18.333 6.83398H3.33301"
              stroke="black-4"
              className="stroke-black4"
              stroke-width="1.5"
              stroke-linecap="round"
            />
            <path
              d="M15.0003 3.5L11.667 18.5"
              stroke="black-4"
              className="stroke-black4"
              stroke-width="1.5"
              stroke-linecap="round"
            />
          </svg>
          <span className="text-body1 text-black4 truncate">태그</span>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full overflow-hidden">
              <Image
              src=""
              alt="placeholder"
              className="w-full h-full object-cover"
              />
            </div>
            <span className="text-body1">이름</span>
          </div>
          <div>
            <span className="text-body1">시간</span>
          </div>
        </div>
      </div>
      </Link>
    </div>
  );
}

export default FreeBoardItem;
