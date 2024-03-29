import { Dispatch, SetStateAction, useEffect } from "react"
import { useTimer } from "use-timer"

type TimerProps = {
  setTime: Dispatch<SetStateAction<number>>
  startTimer: boolean
  stopTimer: boolean
}

const TimerComponent = ({ setTime, startTimer, stopTimer }: TimerProps) => {
  const { time, start, pause } = useTimer()

  useEffect(() => {
    start()
  }, [startTimer])

  useEffect(() => {
    setTime(time)
  }, [time])

  useEffect(() => {
    pause()
  }, [stopTimer])

  return (
    <>
      <div className="text-3xl m-1">Time Elapsed: {time}</div>
    </>
  )
}

export default TimerComponent
