import { useState, useMemo } from 'react';

export interface DateOption {
  text: string;
  value: string;
}

export default function useDateOptions() {
  const currentYear = new Date().getFullYear();

  const [birthYear, setBirthYear] = useState<string>(`${currentYear}`);
  const [birthMonth, setBirthMonth] = useState<string>('');
  const [birthDay, setBirthDay] = useState<string>('');

  const yearList: DateOption[] = useMemo(() => (
    Array.from({ length: currentYear - 1929 }, (_, i) => {
      const year = `${currentYear - i}`;
      return { text: year, value: year };
    })
  ), [currentYear]);

  const monthList: DateOption[] = useMemo(() => (
    Array.from({ length: 12 }, (_, i) => {
      const month = `${i + 1}`;
      return { text: month, value: month };
    })
  ), []);

  const dayList: DateOption[] = useMemo(() => (
    Array.from({ length: 31 }, (_, i) => {
      const day = `${i + 1}`;
      return { text: day, value: day };
    })
  ), []);

  return {
    birthYear,
    setBirthYear,
    birthMonth,
    setBirthMonth,
    birthDay,
    setBirthDay,
    yearList,
    monthList,
    dayList,
  };
}
