'use client'
import Countdown from "react-countdown"

export default function CountDown() {
    const endingDate = new Date("2023-07-29")
  return (
    <Countdown date={endingDate} className="font-bold text-5xl text-fizza_text"/>
  )
}
