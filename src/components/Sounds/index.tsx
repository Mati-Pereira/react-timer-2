import Cafeteria from '../../assets/svg/Cafeteria'
import Chuva from '../../assets/svg/Chuva'
import Floresta from '../../assets/svg/Floresta'
import Lareira from '../../assets/svg/Lareira'
import sound from '../../Logic/sound'
import { Container, DivSounds } from './styles'
type Props = {}

const Sounds = (props: Props) => {
  const { handleFlorestaSound, handleChuvaSound, handleCafeteriaPlay, handleLareiraPlay, } = sound()
  return (
    <Container>
      <DivSounds onClick={handleFlorestaSound}>
        <Floresta />
      </DivSounds>
      <DivSounds onClick={handleChuvaSound}>
        <Chuva />
      </DivSounds>
      <DivSounds onClick={handleCafeteriaPlay}>
        <Cafeteria />
      </DivSounds>
      <DivSounds onClick={handleLareiraPlay}>
        <Lareira />
      </DivSounds>
    </Container>
  )
}
export default Sounds