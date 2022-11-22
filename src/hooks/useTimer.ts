import { useRef, useState } from "react";
import { ring } from "../assets/sounds";
import sound from "../Logic/sound";
const { pauseAll } = sound();

const useTimer = (initialState = 300) => {
  const [timer, setTimer] = useState(initialState);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const countRef = useRef(300);

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(true);
    countRef.current = setInterval(() => {
      setTimer((timer) => timer - 1);
    }, 1000);
  };

  const handlePause = () => {
    clearInterval(countRef.current);
    setIsPaused(false);
    setIsActive(false);
  };

  const handleResume = () => {
    setIsPaused(true);
    countRef.current = setInterval(() => {
      setTimer((timer) => timer - 1);
    }, 1000);
  };

  const handleReset = () => {
    clearInterval(countRef.current);
    setIsActive(false);
    setIsPaused(false);
    setTimer(300);
    pauseAll();
  };

  const handlePlus = () => {
    setTimer((prevState) => prevState + 300);
  };

  const handleMinus = () => {
    setTimer((prevState) => prevState - 300);
  };

  if (timer <= 0) {
    handleReset();
    ring.play()
  }

  return {
    timer,
    isActive,
    isPaused,
    handleStart,
    handlePause,
    handleResume,
    handleReset,
    handlePlus,
    handleMinus,
  };
};

export default useTimer;
