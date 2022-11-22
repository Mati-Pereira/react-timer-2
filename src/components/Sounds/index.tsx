import { cafeteria, chuva, floresta, lareira } from "../../assets/sounds"
import Cafeteria from '../../assets/svg/Cafeteria'
import Chuva from '../../assets/svg/Chuva'
import Floresta from '../../assets/svg/Floresta'
import Lareira from '../../assets/svg/Lareira'
import sound from '../../Logic/sound'
import { Container, DivSounds, InputSound } from './styles'

const Sounds = () => {
  const { handleFlorestaSound, handleChuvaSound, handleCafeteriaPlay, handleLareiraPlay } = sound()
  return (
    <Container>
      <DivSounds onClick={handleFlorestaSound}>
        <Floresta />
        <InputSound defaultValue={0.5} type="range" max={1} min={0}
          onChange={e => {
            floresta.volume = Number(e.target.value)
          }}
          step={0.1} />
      </DivSounds>
      <DivSounds onClick={handleChuvaSound}>
        <Chuva />
        <InputSound defaultValue={0.5} type="range" max={1} min={0}
          onChange={e => {
            chuva.volume = Number(e.target.value)
          }}
          step={0.1} />
      </DivSounds>
      <DivSounds onClick={handleCafeteriaPlay}>
        <Cafeteria />
        <InputSound defaultValue={0.5} type="range" max={1} min={0}
          onChange={e => {
            cafeteria.volume = Number(e.target.value)
          }}
          step={0.1} />
      </DivSounds>
      <DivSounds onClick={handleLareiraPlay}>
        <Lareira />
        <InputSound defaultValue={0.5} type="range" max={1} min={0}
          onChange={e => {
            lareira.volume = Number(e.target.value)
          }}
          step={0.1} />
      </DivSounds>
    </Container>
  )
}
export default Sounds