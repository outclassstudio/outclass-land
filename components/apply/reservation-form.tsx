"use client";

import { useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import { ko } from "date-fns/locale/ko";
import { reservation_time } from "@/lib/dummy";
import "react-datepicker/dist/react-datepicker.css";
import "./override.css";

export default function ReservationForm() {
  const [startDate, setStartDate] = useState<Date | null>(null);
  registerLocale("ko", ko);

  const start = new Date();
  const end = new Date();
  end.setDate(start.getDate() + 20);

  const handleDateChange = (date: Date | null) => {
    //todo db에서 예약 검색한후 예약 가능한 시간 리턴
    setStartDate(date);
  };

  return (
    <div className="flex gap-3">
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
        <select
          name="dateTime"
          className="bg-transparent rounded-md transition
        h-10 focus:outline-none ring-2 focus:ring-4 ring-neutral-200
      focus:ring-orange-500 border-none placeholder:text-neutral-400"
        >
          {reservation_time.map((time) => (
            <option>{time}</option>
          ))}
        </select>
      ) : (
        ""
      )}
    </div>
  );
}
