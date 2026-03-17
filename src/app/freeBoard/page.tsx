import React from 'react';
import KeyWordSearch from "@/components/freeBoard/KeyWordSearch";
import TagSearch from "@/components/freeBoard/TagSearch";
import SortButtons from "@/components/freeBoard/SortButtons";
import FreeBoardItem from "@/components/freeBoard/FreeBoardItem";

function Page() {
  return (
    <div className="w-full block h-full dark:bg-black9">
      <main className="w-[1440px] px-[93px] mx-auto pt-10 flex flex-col gap-8 mb-20">
        <h2 className="text-3xl font-bold text-black9 dark:text-black1">자유게시판</h2>

        <section className="flex flex-col gap-4">
          <KeyWordSearch />
          <TagSearch/>
        </section>

        <section className="flex justify-between">
          <SortButtons/>
          <button className="bg-black6 px-6 py-2 rounded text-black1">글쓰기</button>
        </section>

        <section className="grid grid-cols-12 grid-rows-2 gap-4 min-h-[512px]">
          <FreeBoardItem />
        </section>
      </main>
  </div>
);
}

export default Page;
