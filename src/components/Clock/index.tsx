
import { Container } from "./styles";

export type ClockProps = {
  time: string,
  countRef: any
}

const Clock = ({ time, countRef, ...rest }: ClockProps) => {
  return (
    <Container >
      <span {...rest} ref={countRef}>{time}</span>
    </Container >
  )
}

export default Clock