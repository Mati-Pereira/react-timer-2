import Cafeteria from '../../assets/svg/Cafeteria'
import Chuva from '../../assets/svg/Chuva'
import Floresta from '../../assets/svg/Floresta'
import Lareira from '../../assets/svg/Lareira'
import { Container, DivSounds } from './styles'
type Props = {}

const Sounds = (props: Props) => {
  return (
    <Container>
      <DivSounds >
        <Floresta />
      </DivSounds>
      <DivSounds >
        <Chuva />
      </DivSounds>
      <DivSounds>
        <Cafeteria />
      </DivSounds>
      <DivSounds>
        <Lareira />
      </DivSounds>
    </Container>
  )
}
export default Sounds