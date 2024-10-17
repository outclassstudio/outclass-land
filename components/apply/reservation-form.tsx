"use client";

import { Suspense, useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import { ko } from "date-fns/locale/ko";
import { reservation_time } from "@/lib/dummy";
import "react-datepicker/dist/react-datepicker.css";
import "./override.css";
import { dateFormatter } from "@/lib/utils";
import { getReservation } from "@/app/apply/actions";

export default function ReservationForm() {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [timeList, setTimeList] = useState(reservation_time);
  registerLocale("ko", ko);

  const start = new Date();
  const end = new Date();
  end.setDate(start.getDate() + 20);

  const handleDateChange = async (date: Date | null) => {
    setStartDate(date);
    if (date) {
      const newDate = dateFormatter(date);
      const reservation = await getReservation(newDate);
      const reservedTime = reservation.map((el) => el.time);
      const newTimeList = timeList.filter((el) => !reservedTime.includes(el));
      setTimeList(newTimeList);
    }
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
        autoComplete="off"
      />
      {startDate ? (
        <Suspense fallback={<div className="animate-pulse">로딩중...</div>}>
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
