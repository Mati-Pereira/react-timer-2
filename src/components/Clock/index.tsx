
import { Container } from "./styles";

export type ClockProps = {
  time: string,
  countRef: any
}

const Clock = ({ time, countRef }: ClockProps) => {
  return (
    <Container >
      <span ref={countRef}>{time}</span>
    </Container >
  )
}

export default Clock