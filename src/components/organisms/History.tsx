"use client";
import React, { useState } from "react";

import AlertComponent from "@/components/atoms/AlertComponent";

export default function UserActivityPage() {
  const [alertConfig, setAlertConfig] = useState({
    type: "success" as "success" | "error",
    message: "",
  });

  return (
    <main className="p-6 max-w-4xl mx-auto">
      <header className="mb-10">
        <h1 className="text-2xl font-bold mb-2">활동내역</h1>
        <p className="text-gray-600 dark:text-gray-400">
          내가 작성한 게시글과 질문들을 한눈에 확인할 수 있습니다. 작성한 글을
          수정하거나 삭제할 수 있으며, 필요한 정보를 빠르게 찾아볼 수 있습니다.
          내가 남긴 기록을 관리하며 커뮤니티에서 활발하게 소통해보세요!
        </p>
      </header>

      <AlertComponent {...alertConfig} />
    </main>
  );
}
