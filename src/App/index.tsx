import { useRef, useState } from "react";
import {
  MinusButton, PlayButton, PlusButton, StopButton
} from '../components/Buttons';
import Clock from "../components/Clock";
import Sounds from "../components/Sounds";
import { formatTime } from "../Logic/formatTime";
import { Buttons, Container, Timer } from './styles';


const App = () => {
  const [timer, setTimer] = useState(0)
  const [isActive, setIsActive] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const countRef = useRef<number>(0)

  const handleStart = () => {
    setIsActive(true)
    setIsPaused(true)
    countRef.current = setInterval(() => {
      setTimer((timer) => timer + 1)
    }, 1000)
  }

  const handleReset = () => {
    clearInterval(countRef.current)
    setIsActive(false)
    setIsPaused(false)
    setTimer(0)
  }

  const handlePause = () => {
    clearInterval(countRef?.current)
    setIsPaused(false)
    setIsActive(false)
  }

  const handleResume = () => {
    setIsPaused(true)
    countRef.current = setInterval(() => {
      setTimer((timer) => timer + 1)
    }, 1000)
  }

  const handlePlus = () => {
    setTimer((prevState) => prevState + 300)
  }

  const handleMinus = () => {
    if (timer > 0) {
      setTimer((prevState) => prevState - 300)
    }
  }

  return (
    <Container>
      <Timer>
        <Clock time={formatTime({ timer })} countRef={countRef} />
        <Buttons>
          {
            !isActive && !isPaused ?
              (<PlayButton onClickPlay={handleStart} isActive={isActive} />)
              : (isPaused ? <PlayButton onClickPlay={handlePause} isActive={isActive} />
                : <PlayButton onClickPlay={handleResume} isActive={isActive} />)
          }
          <StopButton onClickStop={handleReset} />
          <PlusButton onClickPlus={handlePlus} />
          <MinusButton onClickMinus={handleMinus}/>
        </Buttons>
      </Timer>
      <Sounds />
    </Container>
  )
}

export default App