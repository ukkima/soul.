import { AudioPlayer } from "../AudioPlayer/AudioPlayer";
import ResonanceImg from "../../assets/images/resonance.png";
import SkyAfterSunsetImg from "../../assets/images/sky_after_sunset.png";
import CityLightsCascadeImg from "../../assets/images/city_lights_cascade.png";
import BearingImg from "../../assets/images/bearing.png";
import TheLastDescentImg from "../../assets/images/the_last_descent.png";

import ResonanceAudio from "../../assets/music/resonance.mp3";
import SkyAfterSunsetAudio from "../../assets/music/sky_after_sunset.mp3";
import CityLightsCascadeAudio from "../../assets/music/city_lights_cascade.mp3";
import BearingAudio from "../../assets/music/bearing.mp3";
import TheLastDescentAudio from "../../assets/music/the_last_descent.mp3";

import cls from "./audiolist.module.scss";
import { useState } from "react";

const AudioDatas = [
  {
    img: BearingImg,
    name: "Bearing",
    author: "Frequency",
    audio: BearingAudio,
  },
  {
    img: TheLastDescentImg,
    name: "The Last Descent",
    author: "Virtua",
    audio: TheLastDescentAudio,
  },
  {
    img: CityLightsCascadeImg,
    name: "City Lights Cascade",
    author: "Pixelwave Dreams",
    audio: CityLightsCascadeAudio,
  },
  {
    img: SkyAfterSunsetImg,
    name: "Sky after sunset",
    author: "WoodyPecker",
    audio: SkyAfterSunsetAudio,
  },
  {
    img: ResonanceImg,
    name: "Resonance",
    author: "Home",
    audio: ResonanceAudio,
  },
];

export const AudioList = () => {
  const [activePlayerId, setActivePlayerId] = useState(0);

  return (
    <div className={cls.audio_list}>
      {AudioDatas.map((el, index) => (
        <AudioPlayer
          key={index}
          img={el.img}
          name={el.name}
          author={el.author}
          audio={el.audio}
          isActive={activePlayerId === index}
          onActive={() => setActivePlayerId(index)}
        />
      ))}
    </div>
  );
};
