"use client";
import React from "react";
import MyLoginBtn from "@/components/atoms/MyLoginBtn";
import { userStore } from "@/store/userStore";

function Page() {
  const { name } = userStore();
  const [selectMenuList, setSelectMenuList] = React.useState<string>("myInfo");
  const menuList = [
    { key: "myInfo", value: "개인정보" },
    { key: "log", value: "활동내역" },
    { key: "my_Log", value: "나의 기록" },
  ];

  return (
    <div className="flex gap-4 px-[10%] py-[5%]">
      <section>
        <div className="grid gap-24 mb-56">
          <div className="w-full flex justify-center">
            <MyLoginBtn path={"/mypage"} width={100} height={100} />
          </div>
          <div className="w-full flex justify-center">
            <span className="font-bold text-3xl">{name}</span>
          </div>
        </div>
        <div className="grid gap-12">
          {menuList.map((item) => {
            return (
              <button
                className={`${selectMenuList === item.key ? "font-bold text-lg" : ""} cursor-pointer py-8`}
                key={`menuList_${item.key}`}
                onClick={() => {
                  setSelectMenuList(item.key);
                }}
              >
                {item.value}
              </button>
            );
          })}
        </div>
      </section>
      <section></section>
    </div>
  );
}

export default Page;
