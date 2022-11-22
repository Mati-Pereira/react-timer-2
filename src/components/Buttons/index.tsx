import { BsPauseCircle, BsPlayCircle, BsPlusCircle, BsStopCircle } from 'react-icons/bs'
import { SlMinus } from 'react-icons/sl'
import { Button } from "./styles"

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
    <Button onClick={onClickPlay} >
      {isActive ? <BsPauseCircle size={45} /> : <BsPlayCircle size={45} />}
    </Button>
  );
}

function StopButton({ onClickStop }: StopProps) {
  return (
    <Button onClick={onClickStop}>
      <BsStopCircle size={45} />
    </Button>
  );
}

function PlusButton({ onClickPlus }: PlusProps) {
  return (
    <Button onClick={onClickPlus}>
      <BsPlusCircle size={45} />
    </Button>
  );
}

function MinusButton({ onClickMinus }: MinusProps) {
  return (
    <Button onClick={onClickMinus}>
      <SlMinus size={45} />
    </Button>
  );
}

export {
  PlayButton,
  StopButton,
  PlusButton,
  MinusButton
}
