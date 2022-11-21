import { BsPauseCircle, BsPlayCircle, BsPlusCircle, BsStopCircle } from 'react-icons/bs'
import { SlMinus } from 'react-icons/sl'
import { Minus, Play, Plus, Stop } from "./styles"

type PlayProps = {
  onClickPlay?: (e: React.MouseEvent<HTMLButtonElement>) => void,
  isActive: boolean,
}
type StopProps = {
  onClickStop?: (e: React.MouseEvent<HTMLButtonElement>) => void
}
type PlusProps = {
  onClickPlus?: (e: React.MouseEvent<HTMLButtonElement>) => void
}
type MinusProps = {
  onClickMinus?: (e: React.MouseEvent<HTMLButtonElement>) => void
}


function PlayButton({ onClickPlay, isActive }: PlayProps) {
  return (
    <Play onClick={onClickPlay} >
      {isActive ? <BsPauseCircle size={45} /> : <BsPlayCircle size={45} />}
    </Play>
  );
}

function StopButton({ onClickStop }: StopProps) {
  return (
    <Stop onClick={onClickStop}>
      <BsStopCircle size={45} />
    </Stop>
  );
}

function PlusButton({ onClickPlus }: PlusProps) {
  return (
    <Plus onClick={onClickPlus}>
      <BsPlusCircle size={45} />
    </Plus>
  );
}

function MinusButton({ onClickMinus }: MinusProps) {
  return (
    <Minus onClick={onClickMinus}>
      <SlMinus size={45} />
    </Minus>
  );
}

export {
  PlayButton,
  StopButton,
  PlusButton,
  MinusButton
}
