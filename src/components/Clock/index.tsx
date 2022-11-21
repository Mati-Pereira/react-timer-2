import { useState } from "react"
import { Container } from "./styles"

export type ClockProps = {
}

const Clock = (props: ClockProps) => {
  const [minutes, setMinutes] = useState("25")
  const [seconds, setSeconds] = useState("00")
  return (
    <Container >
      <span className="minutesDisplay">{minutes}</span>
      <span>:</span>
      <span className="secondsDisplay">{seconds}</span>
    </Container>
  )
}

export default Clock