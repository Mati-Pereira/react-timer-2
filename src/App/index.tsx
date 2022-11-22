import { useRef, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { MinusButton, PlayButton, PlusButton, StopButton } from '../components/Buttons';
import Clock from "../components/Clock";
import Sounds from "../components/Sounds";
import useTimer from '../hooks/useTimer';
import { formatTime } from "../Logic/formatTime";
import { GlobalStyles } from '../styles/global';
import { darkTheme, lightTheme } from '../styles/theme';
import { Buttons, CheckBox, CheckBoxLabel, CheckBoxWrapper, Container, Timer } from './styles';

const App = () => {
  const [theme, setTheme] = useState(true);
  console.log("🚀 ~ file: index.tsx ~ line 14 ~ App ~ theme", theme)
  const themeToggler = () => {
    setTheme(!theme);
  }
  const countRef = useRef(0)
  const { timer, isActive, isPaused, handleStart, handlePause, handleResume, handleReset, handlePlus, handleMinus } = useTimer()
  return (
    <ThemeProvider theme={theme ? lightTheme : darkTheme}>
      <Container>
        <GlobalStyles />
        <CheckBoxWrapper>
          <CheckBox id="checkbox" type="checkbox" onClick={themeToggler} />
          <CheckBoxLabel htmlFor="checkbox" />
        </CheckBoxWrapper>
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
    </ThemeProvider>
  )
}

export default App