import Buttons from "../components/Buttons"
import Clock from "../components/Clock"
import Sounds from "../components/Sounds"
import { Container, Timer } from "./styles"

type AppProps = {
}

const App = (props: AppProps) => {
  return (
    <Container>
      <Timer>
        <Clock />
        <Buttons />
      </Timer>
      <Sounds />
    </Container>
  )
}

export default App