import { cafeteria, chuva, floresta, lareira } from "../assets/sounds";

function sound() {
  const pauseAll = () => {
    floresta.pause();
    chuva.pause();
    cafeteria.pause();
    lareira.pause();
  };
  const handleFlorestaSound = () => {
    pauseAll();
    floresta.play();
    floresta.loop = true;
  };
  const handleChuvaSound = () => {
    pauseAll();
    chuva.play();
    chuva.loop = true;
  };
  const handleCafeteriaPlay = () => {
    pauseAll();
    cafeteria.play();
    cafeteria.loop = true;
  };
  const handleLareiraPlay = () => {
    pauseAll();
    lareira.play();
    lareira.loop = true;
  };

  return {
    handleFlorestaSound,
    handleChuvaSound,
    handleCafeteriaPlay,
    handleLareiraPlay,
    pauseAll,
  };
}

export default sound;
