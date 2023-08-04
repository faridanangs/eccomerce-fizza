"use client";
import Countdown from "react-countdown";

export default function CountDown() {
  const endingDate = new Date("2023-12-29");
  return (
    <div>
      <Countdown
        date={endingDate}
        className="font-bold text-5xl text-fizza_text"
      />
    </div>
  );
}
