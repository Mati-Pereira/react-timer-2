import { useRef } from 'react';
import { MinusButton, PlayButton, PlusButton, StopButton } from '../components/Buttons';
import Clock from "../components/Clock";
import Sounds from "../components/Sounds";
import useTimer from '../hooks/useTimer';
import { formatTime } from "../Logic/formatTime";
import { Buttons, Container, Timer } from './styles';

const App = () => {
  const countRef = useRef(0)
  const { timer, isActive, isPaused, handleStart, handlePause, handleResume, handleReset, handlePlus, handleMinus } = useTimer()
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
          <MinusButton onClickMinus={handleMinus} />
        </Buttons>
      </Timer>
      <Sounds />
    </Container>
  )
}

export default App