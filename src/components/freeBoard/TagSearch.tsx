import React from 'react';

function TagSearch() {
  return (
    <div>
      <article className="flex gap-4 items-stretch dark:bg-black8">
        <div className="flex items-start gap-3 border border-black4 px-4 py-3 rounded">
          <label className="mt-1">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.33333 3.5L5 18.5"
                stroke="black-10"
                className="stroke-black10 dark:stroke-black1"
                stroke-width="1.5"
                stroke-linecap="round"
              />
              <path
                d="M17.083 14.334H2.08301"
                stroke="black-10"
                className="stroke-black10 dark:stroke-black1"
                stroke-width="1.5"
                stroke-linecap="round"
              />
              <path
                d="M18.333 6.83398H3.33301"
                stroke="black-10"
                className="stroke-black10 dark:stroke-black1"
                stroke-width="1.5"
                stroke-linecap="round"
              />
              <path
                d="M15.0003 3.5L11.667 18.5"
                stroke="black-10"
                className="stroke-black10 dark:stroke-black1"
                stroke-width="1.5"
                stroke-linecap="round"
              />
            </svg>
          </label>
          <div className="flex flex-wrap gap-2 items-center">
            <span>
                <button className="text-sm">&times;</button>
            </span>
            <input
              type="text"
              id="tag_search"
              className="py-1 outline-none bg-transparent dark:caret-black1 dark:text-black1 flex-1"
            placeholder="태그로 검색해보세요!"
            />
        </div>
      </div>
      <button
        className="min-w-32 bg-black2 py-3 rounded text-black9 dark:bg-black7 dark:text-black1">
        <div className="flex items-center justify-center gap-2">
          <svg
            width="16"
            height="16"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
          <path
            d="M17.9321 6.66797C16.6461 3.72479 13.7094 1.66797 10.2921 1.66797C5.97106 1.66797 2.4181 4.95687 2 9.16797"
            stroke="black-10"
            className="stroke-black10 dark:stroke-black1"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M14.459 6.66667H18.1256C18.4018 6.66667 18.6257 6.44281 18.6257 6.16667V2.5"
            stroke="black-10"
            className="stroke-black10 dark:stroke-black1"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M2.69336 13.332C3.97929 16.2752 6.91609 18.332 10.3333 18.332C14.6544 18.332 18.2074 15.0431 18.6255 10.832"
            stroke="black-10"
            className="stroke-black10 dark:stroke-black1"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M6.16667 13.332H2.5C2.22386 13.332 2 13.5559 2 13.832V17.4987"
            stroke="black-10"
            className="stroke-black10 dark:stroke-black1"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      <span className="font-bold">초기화</span>
    </div>
    </button>
    </article>
    </div>
  );
}

export default TagSearch;
