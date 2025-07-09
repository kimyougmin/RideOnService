"use client"
import React from 'react';
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import useDateOptions from "@/hooks/useDateOptions";
import {ValiDateForm} from "@/utils/ValiDateForm";
import {SignupRequestType} from "@/types/SignupRequestType";
import SignupApi from "@/apis/SignupApi";

interface SignupFormProps {
  statusToLoginHandler: () => void;
  showAlert: (type: 'success' | 'error', message: string) => void;
}
function SignupForm({statusToLoginHandler, showAlert}:SignupFormProps) {
  const [signupFormDate, setSignupFormDate] = React.useState<SignupRequestType>({
    email: "",
    password: "",
    ck_password: "",
    name: "",
    phone: "",
    birthDate: ""
  });
  const {
    yearList,
    monthList,
    dayList
  } = useDateOptions();
  const [selectedYear, setSelectedYear] = React.useState('');
  const [selectedMonth, setSelectedMonth] = React.useState('');
  const [selectedDay, setSelectedDay] = React.useState('');

  React.useEffect(() => {
    if (selectedYear && selectedMonth && selectedDay) {
      const formattedMonth = selectedMonth.padStart(2, '0');
      const formattedDay = selectedDay.padStart(2, '0');
      const birthDate = `${selectedYear}-${formattedMonth}-${formattedDay}`;
      setSignupFormDate(prev => ({...prev, birthDate}));
    }
  }, [selectedYear, selectedMonth, selectedDay]);

  const formDateHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {value, name} = e.target;
    if (name === 'phone' && value.length >= 13) return;

    if (name === 'phone' && value.length == 8) {
      setSignupFormDate(prev => ({
        ...prev,
        [name]: value + "-"
      }));
      return;
    }
    setSignupFormDate(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (signupFormDate.email.length <= 6 && signupFormDate.password.length < 8 && signupFormDate.birthDate.length < 8 && signupFormDate.phone.length === 13) {
      alert("조건을 확인해주세요!");
      return;
    }

    const res = await SignupApi(signupFormDate);
    if (res.res === "회원가입 성공") {
      showAlert('success', '회원가입에 성공했습니다!');
      statusToLoginHandler();
      return;
    }
    showAlert('error', '회원가입에 실패했습니다!');
  };

  return (
    <div>
      <form className="w-full flex flex-col items-center mt-48" onSubmit={handleSubmit}>
        <div className="w-[428px] space-y-[32px]">
          <div>
            <label className="block text-sm font-medium mb-1 text-black7 dark:text-black1">이메일</label>
            <input
              type="email"
              name="email"
              value={signupFormDate.email}
              onChange={formDateHandler}
              className="w-full h-[48px] p-9 border border-black4 rounded text-base bg-transparent focus:border-primaryRed outline-none
                dark:border-black1 dark:placeholder:text-black1 dark:text-black1 placeholder:text-black4"
              placeholder="이메일을 입력하세요."
            />
            {!ValiDateForm.emailCheck(signupFormDate.email) ?
              <p className="text-primaryRed text-sm h-5">이메일 양식에 맞지 않습니다!</p> : null}
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-black7 dark:text-black3">비밀번호</label>
            <input
              type="password"
              name="password"
              value={signupFormDate.password}
              onChange={formDateHandler}
              className="w-full h-[48px] p-9 border border-black4 rounded text-base bg-transparent focus:border-primaryRed outline-none
                dark:border-black1 dark:placeholder:text-black1 dark:text-black1 placeholder:text-black4"
              placeholder="비밀번호를 입력하세요."
            />
            {ValiDateForm.passwordCheck(signupFormDate.password) ?
              <p className="text-primaryRed text-sm h-5">특수 문자 포함 8자 이상이여야 합니다!</p> : null}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-black7 dark:text-black3">비밀번호 확인</label>
            <input
              type="password"
              name="ck_password"
              value={signupFormDate.ck_password}
              onChange={formDateHandler}
              className="w-full h-[48px] p-9 border border-black4 rounded text-base bg-transparent focus:border-primaryRed outline-none
                dark:border-black1 dark:placeholder:text-black1 dark:text-black1 placeholder:text-black4"
              placeholder="비밀번호를 다시 입력해주세요."
            />
            {signupFormDate.password !== signupFormDate.ck_password ?
              <p className="text-primaryRed text-sm h-5">비밀번호가 맞지 않습니다!</p> : null}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-black7 dark:text-black3">이름</label>
            <input
              type="text"
              name="name"
              value={signupFormDate.name}
              onChange={formDateHandler}
              className="w-full h-[48px] p-9 border border-black4 rounded text-base bg-transparent focus:border-primaryRed outline-none
                dark:border-black1 dark:placeholder:text-black1 dark:text-black1 placeholder:text-black4"
              placeholder="이름을 입력해주세요."
            />
            {signupFormDate.name.length >= 8 ? <p className="text-primaryRed text-sm h-5">이름은 8자리 이하입니다!</p> : null}
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-black7 dark:text-black3">생년월일</label>
            <div className="w-full flex space-x-2">
              <Select onValueChange={setSelectedYear}>
                <SelectTrigger className="w-[140px] h-[40px]! p-8! mr-8!">
                  <SelectValue placeholder="연도"/>
                </SelectTrigger>
                <SelectContent>
                  {yearList.map((item) => {
                    return (
                      <SelectItem key={`k-${item.value}`} value={`${item.value}`}>{item.text}</SelectItem>
                    )
                  })}
                </SelectContent>
              </Select>
              <Select onValueChange={setSelectedMonth}>
                <SelectTrigger className="w-[140px] h-[40px]! p-8! mr-8!">
                  <SelectValue placeholder="월"/>
                </SelectTrigger>
                <SelectContent>
                  {monthList.map((item) => {
                    return (
                      <SelectItem key={`k-${item.value}`} value={`${item.value}`}>{item.text}</SelectItem>
                    )
                  })}
                </SelectContent>
              </Select>
              <Select onValueChange={setSelectedDay}>
                <SelectTrigger className="w-[140px] h-[40px]! p-8!">
                  <SelectValue placeholder="일"/>
                </SelectTrigger>
                <SelectContent>
                  {dayList.map((item) => {
                    return (
                      <SelectItem key={`k-${item.value}`} value={`${item.value}`}>{item.text}</SelectItem>
                    )
                  })}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-black7 dark:text-black3 ">휴대폰 번호</label>
            <input
              type="text"
              value={signupFormDate.phone}
              name="phone"
              onChange={(e) => {
                const formatted = ValiDateForm.formatPhoneNumber(e.target.value);
                setSignupFormDate(prev => ({...prev, phone: formatted}));
              }}
              className="w-full h-[48px] p-9 border border-black4 rounded text-base bg-transparent focus:border-primaryRed outline-none
                dark:border-black1 dark:placeholder:text-black1 dark:text-black1 placeholder:text-black4"
              placeholder="010-0000-0000"
            />
            {!ValiDateForm.phoneCheck(signupFormDate.phone) ?
              <p className="text-primaryRed text-sm h-5">전화번호 양식에 맞지 않습니다!</p> : null}
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
