import cls from "./Audioplayer.module.scss";
import HavanaImg from "../../assets/images/havana.jpg";

export const AudioPlayer = () => {
  return (
    <div className={cls.player}>
      <img src={HavanaImg} alt="music ico" className={cls.audio_image} />
    </div>
  );
};
