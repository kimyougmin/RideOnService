import React from 'react';
import Link from "next/link";

function SignupForm() {
  return (
    <div>
      <form className="w-full flex flex-col items-center mt-48">
          <div className="w-[428px] space-y-[32px]">
          <div>
          <label className="block text-sm font-medium mb-1 text-black7 dark:text-black1">이메일</label>
        <input
          type="email"
          className="w-full h-[48px] p-9 border border-black4 rounded text-base bg-transparent focus:border-primaryRed outline-none
                dark:border-black1 dark:placeholder:text-black1 dark:text-black1 placeholder:text-black4"
          placeholder="이메일을 입력하세요."
          />
      </div>
        <div>
          <label className="block text-sm font-medium mb-1 text-black7 dark:text-black3">비밀번호</label>
          <input
            type="password"
            className="w-full h-[48px] p-9 border border-black4 rounded text-base bg-transparent focus:border-primaryRed outline-none
                dark:border-black1 dark:placeholder:text-black1 dark:text-black1 placeholder:text-black4"
            placeholder="비밀번호를 입력하세요."
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1 text-black7 dark:text-black3">비밀번호 확인</label>
          <input
            type="password"
            className="w-full h-[48px] p-9 border border-black4 rounded text-base bg-transparent focus:border-primaryRed outline-none
                dark:border-black1 dark:placeholder:text-black1 dark:text-black1 placeholder:text-black4"
            placeholder="비밀번호를 다시 입력해주세요."
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1 text-black7 dark:text-black3">이름</label>
          <input
            type="text"
            className="w-full h-[48px] p-9 border border-black4 rounded text-base bg-transparent focus:border-primaryRed outline-none
                dark:border-black1 dark:placeholder:text-black1 dark:text-black1 placeholder:text-black4"
            placeholder="이름을 입력해주세요."
          />
        </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-black7 dark:text-black3 ">휴대폰 번호</label>
              <input
                type="text"
                className="w-full h-[48px] p-9 border border-black4 rounded text-base bg-transparent focus:border-primaryRed outline-none
                dark:border-black1 dark:placeholder:text-black1 dark:text-black1 placeholder:text-black4"
                placeholder="010-0000-0000"
              />
            </div>


        <div>
          <label className="block text-sm font-medium mb-1 text-black7 dark:text-black3">생년월일</label>
          <div className="w-full flex space-x-2">

          </div>
        </div>
      </div>

        <button
          type="submit"
          className="w-[428px] h-[47px] border rounded text-lg font-bold mt-[26px] transition-all focus:ring-2 focus:ring-primaryRed flex items-center justify-center cursor-pointer dark:bg-black1 dark:text-black7">
          회원가입
          </button>
        <p className="mt-27 text-sm dark:text-black3 text-center">
          Wherever you want, <span className="text-primaryRed font-bold">RideOn</span>
          <Link href="/" className="underline ml-4 dark:text-blue-400 text-blue-600">홈으로 돌아가기</Link>
        </p>
      </form>
    </div>
  );
}

export default SignupForm;
