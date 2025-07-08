"use client";
import React from 'react';
import Link from "next/link";
import Image from "next/image";
import {LoginRequestType} from "@/types/LoginRequestType";
import LoginApi from "@/apis/LoginApi";

interface LoginFormProps {
  showAlert: (type: 'success' | 'error', message: string) => void;
}
function LoginForm({showAlert}: LoginFormProps) {
  const [userForm, setUserForm] = React.useState<LoginRequestType>({
    email: "",
    password: ""
  });

  const formDateHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {value, name} = e.target;
    setUserForm(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (userForm.email.length <= 6 && userForm.password.length <= 6) {
      alert("조건을 확인해주세요!");
      return;
    }

    const res = await LoginApi(userForm);

    if(res.token) {
      showAlert('success', '로그인에 성공했습니다!');
      // TODO: 전역 provider 설정
      return;
    }
    showAlert('error', '로그인에 실패했습니다!');
  };

  return (
    <div className="flex justify-center w-full px-4 sm:px-0 mt-40 pb-52">
      <form className="w-full max-w-md flex flex-col items-center" onSubmit={handleSubmit}>
        <div className="w-full space-y-8">
          <button type="submit" className="hidden"></button>
          <div>
            <label className="block text-sm font-medium mb-1 text-black7 dark:text-black3">이메일</label>
            <input
              type="email"
              name="email"
              value={userForm.email}
              onChange={formDateHandler}
              className="w-full mt-8 h-48 p-9 border border-black4 rounded text-base bg-transparent focus:border-primaryRed outline-none dark:border-black1 dark:placeholder:text-black1 dark:text-black1 placeholder:text-black4"
              placeholder="이메일을 입력하세요."
            />
            <p className="text-primaryRed text-sm h-5">{}</p>
          </div>

          <div className="mt-32 mb-48">
            <label className="block text-sm font-medium mb-1 text-black7 dark:text-black3">비밀번호</label>
            <input
              type="password"
              name="password"
              value={userForm.password}
              onChange={formDateHandler}
              className="w-full mt-8 h-48 p-9 border border-black4 rounded text-base bg-transparent focus:border-primaryRed outline-none dark:border-black1 dark:placeholder:text-black1 dark:text-black1 placeholder:text-black4"
              placeholder="비밀번호를 입력하세요."
            />
            <p className="text-primaryRed text-sm h-5">{}</p>
          </div>

          <div className="flex justify-between items-center text-sm w-full -mt-4">
            <label className="flex items-center cursor-pointer">
              <input type="checkbox" className="mr-2"/>
              <span className="cursor-pointer dark:text-black3">아이디 저장</span>
            </label>
            <div>
              <Link href="/" className="mr-8 dark:text-black3">아이디 찾기</Link>
              <Link href="/" className="dark:text-black3">비밀번호 찾기</Link>
            </div>
          </div>

          <div className="w-full flex flex-col items-center space-y-20 mt-40 relative">
            <div className="absolute -top-34 w-194 flex items-center justify-center animate-float-y">
              <Image src="/icons/loginBox.svg" alt="빠른 회원가입" width={194} height={100}/>
              <p
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[70%] text-[13px] font-bold text-primaryRed whitespace-nowrap">
                5초만에 빠른 회원가입
              </p>
            </div>

            <button type="button"
                    onClick={() => window.location.href = 'http://localhost:8080/oauth2/authorization/kakao'}
                    className="w-full h-47 bg-[#FEE500] rounded flex items-center justify-center font-bold text-lg">
              <div className="flex items-center justify-center gap-3">
                <Image src="/icons/kakaoLogin.svg" alt="카카오 로그인" width={20} height={20}/>
                <span>카카오로 로그인</span>
              </div>
            </button>

            <button type="button"
                    className="w-full h-47 bg-[#03C75A] text-black1 rounded flex items-center justify-center font-bold text-lg">
              <div className="flex items-center justify-center gap-3">
                <Image src="/icons/naverLogin.svg" alt="네이버 로그인" width={20} height={20}/>
                <span>네이버로 로그인</span>
              </div>
            </button>
          </div>

          <p
            onClick={handleSubmit}
            className="w-full h-47 border rounded text-lg font-bold mt-20 transition-all focus:ring-2 focus:ring-primaryRed flex items-center justify-center cursor-pointer bg-black7 text-black1 border-black7 hover:bg-primaryRed hover:text-white dark:bg-black3 dark:text-black7 dark:border-black3 dark:hover:bg-primaryRed">
            로그인
          </p>

          <p className="mt-27 text-sm dark:text-black3 text-center">
            Wherever you want, <span className="text-primaryRed font-bold">RideOn</span>
            <Link href="/" className="underline ml-4 dark:text-blue-400 text-blue-600">홈으로 돌아가기</Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
