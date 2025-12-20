'use client'

import React, {useEffect, useMemo, useState} from 'react';
import {useRouter} from "next/navigation";
import PopularTags from "@/components/molecules/PopularTags";
import PostFilterMenu from "@/components/molecules/PostFilterMenu";
import TopWriters from "@/components/molecules/TopWriters";
import {userStore} from "@/store/userStore";
import GetPostsApi from "@/apis/GetPostsApi";
import {PostType} from "@/types/PostType";

function Page() {
  const router = useRouter();
  // const qnaBoardStore = useQnaBoardStore();
  // const userStore = useUserStore();

  const [posts, setPosts] = useState<PostType[]>([]);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [searchTags, setSearchTags] = useState<string[]>([]);
  const [selectedSort, setSelectedSort] = useState("latest");
  const [selectedStatus, setSelectedStatus] = useState("all");

  useEffect(() => {
    (async () => {
      try {
        const posts = await GetPostsApi({page:0 , size: 10});
        setPosts(posts);
      } catch (error) {
        console.error("게시글 목록 조회 실패:", error);
      }
    })();
  }, []);

  // const filteredQnas = useMemo(() => {
  //   return qnaBoardStore.filterPosts(
  //     searchKeyword,
  //     searchTags,
  //     selectedSort === "likes" ? "mostLiked" : selectedSort,
  //     selectedStatus
  //   );
  // }, [qnaBoardStore, searchKeyword, searchTags, selectedSort, selectedStatus]);

  // const handleWriteClick = () => {
  //   if (!userStore.isLoggedIn) {
  //     alert("로그인 후 이용해주세요.");
  //     router.push("/login");
  //     return;
  //   }
  //   router.push("/qna-board/write");
  // };

  return (
    <div className="w-full block h-full dark:bg-black9">
      <section className="w-full bg-black2 dark:bg-black7">
        <div className="w-[1440px] px-[198px] mx-auto py-6 flex gap-3 flex-col items-baseline">
          <h2 className="text-title font-bold dark:text-black3">묻고 답해요</h2>
          <p className="text-sub-title dark:text-black3 m-0">자전거 타다 궁금한 점? 여기서 해결하세요!</p>
        </div>
      </section>
      <section className="w-[1440px] px-[198px] mx-auto pt-10 grid grid-cols-10 gap-6 mb-12 items-start">
        {/* 좌측 */}
        <article className="col-span-2 flex flex-col gap-4">
          <PostFilterMenu
            value={selectedStatus}
            onChange={setSelectedStatus}
          />
          {/*<TopWriters writers={DUMMY_WRITERS} />*/}
        </article>

        {/* 가운데 */}
        <article className="col-span-6 flex flex-col gap-6">
          {/* 검색 */}
          <section className="flex flex-col gap-4">
            {/*<KeywordSearch*/}
            {/*  value={searchKeyword}*/}
            {/*  onChange={setSearchKeyword}*/}
            {/*/>*/}
            {/*<TagSearch value={searchTags} onChange={setSearchTags} />*/}
          </section>

          {/* 정렬 & 글쓰기 */}
          <section className="flex items-center justify-between">
            {/*<SortButtons*/}
            {/*  value={selectedSort}*/}
            {/*  onChange={setSelectedSort}*/}
            {/*/>*/}
            <button
              // onClick={handleWriteClick}
              className="bg-black6 px-6 py-2 rounded text-black1"
            >
              질문하기
            </button>
          </section>

          {/* 게시글 목록 */}
          <section className="flex flex-col min-h-[512px]">
            {/*{posts.map((item) => (*/}
            {/*  <PostCard key={item.id} qna={item} />*/}
            {/*))}*/}
          </section>
        </article>

        {/* 우측 */}
        <article className="col-span-2">
          <PopularTags tags={["",""]}/>
        </article>
      </section>
    </div>
  );
}

export default Page;
