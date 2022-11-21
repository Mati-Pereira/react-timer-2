import { BsPlayCircle, BsPlusCircle, BsStopCircle } from 'react-icons/bs'
import { SlMinus } from 'react-icons/sl'
import { Container, Minus, Play, Plus, Stop } from "./styles"

type Props = {}

const Buttons = (props: Props) => {
  return (
    <Container>
      <Play >
        <BsPlayCircle size={45} />
      </Play>
      <Stop >
        <BsStopCircle size={45} />
      </Stop>
      <Plus >
        <BsPlusCircle size={45} />
      </Plus>
      <Minus>
        <SlMinus size={45} />
      </Minus>
    </Container >
  )
}

export default Buttons