import { useRef, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { MinusButton, PlayButton, PlusButton, StopButton } from '../components/Buttons';
import Clock from "../components/Clock";
import Sounds from "../components/Sounds";
import Switch from '../components/Toggler';
import useTimer from '../hooks/useTimer';
import { formatTime } from "../Logic/formatTime";
import { GlobalStyles } from '../styles/global';
import { darkTheme, lightTheme } from '../styles/theme';
import { Buttons, Container, Div, Timer } from './styles';

const App = () => {
  const [theme, setTheme] = useState(true);
  const countRef = useRef(0)
  const { timer, isActive, isPaused, handleStart, handlePause, handleResume, handleReset, handlePlus, handleMinus } = useTimer()
  return (
    <ThemeProvider theme={theme ? lightTheme : darkTheme}>
      <Container>
        <GlobalStyles />
        <Switch
          id="test-switch"
          toggled={theme}
          onChange={e => setTheme(e.target.checked)}
        />
        <Div>
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
        </Div>
      </Container>
    </ThemeProvider>
  )
}

export default App