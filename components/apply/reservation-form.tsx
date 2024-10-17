"use client";

import { Suspense, useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import { ko } from "date-fns/locale/ko";
import { reservation_time } from "@/lib/dummy";
import "react-datepicker/dist/react-datepicker.css";
import "./override.css";
import useThemeStore from "@/store/store";
import { dateFormatter } from "@/lib/utils";

export default function ReservationForm() {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [timeList, setTimeList] = useState(reservation_time);
  const { dateStore } = useThemeStore();
  registerLocale("ko", ko);

  const start = new Date();
  const end = new Date();
  end.setDate(start.getDate() + 20);

  const handleDateChange = (date: Date | null) => {
    if (date) {
      const newDate = dateFormatter(date);
      const filteredDate = dateStore.filter((el) => el.date === newDate);
      const reservedTime = filteredDate.map((el) => el.time);
      const newTimeList = timeList.filter((el) => !reservedTime.includes(el));
      setTimeList(newTimeList);
    }

    setStartDate(date);
  };

  return (
    <div className="flex gap-3 items-center">
      <DatePicker
        name="date"
        locale="ko"
        selected={startDate}
        onChange={(date) => handleDateChange(date)}
        includeDateIntervals={[{ start: start, end: end }]}
        placeholderText="날짜를 선택해주세요"
        dateFormat="yyyy년 MM월 dd일"
      />
      {startDate ? (
        <Suspense fallback={<div>로딩중</div>}>
          <select name="dateTime" className="input-style h-10">
            {timeList.map((time, idx) => (
              <option key={idx}>{time}</option>
            ))}
          </select>
        </Suspense>
      ) : (
        ""
      )}
    </div>
  );
}
