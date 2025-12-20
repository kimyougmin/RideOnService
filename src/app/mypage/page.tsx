'use client'
import React from 'react';
import MemberProfileImage from "@/components/atoms/MemberProfileImage";
import {userStore} from "@/store/userStore";

function Page() {
  const { name } = userStore();
  const menuList = ["개인정보", "활동내역"];
  return (
    <div>
      <section>
        <div>
          <MemberProfileImage path={"/mypage"} width={120} height={120}/>
          <span>{name}</span>
        </div>
        <div>
          {menuList.map((item) => {
            return (
              <span key={`menuList_${item}`}>
                {item}
              </span>)
          })}
        </div>
      </section>
    </div>
  );
}

export default Page;
