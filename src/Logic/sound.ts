import { cafeteria, chuva, floresta, lareira } from "../assets/sounds";

function sound() {
  const handleFlorestaSound = () => {
    pauseAll();
    floresta.play();
  };
  const handleChuvaSound = () => {
    pauseAll();
    chuva.play();
  };
  const handleCafeteriaPlay = () => {
    pauseAll();
    cafeteria.play();
  };
  const handleLareiraPlay = () => {
    pauseAll();
    lareira.play();
  };

  const pauseAll = () => {
    floresta.pause();
    chuva.pause();
    cafeteria.pause();
    lareira.pause();
  };

  return {
    handleFlorestaSound,
    handleChuvaSound,
    handleCafeteriaPlay,
    handleLareiraPlay,
  };
}

export default sound;
