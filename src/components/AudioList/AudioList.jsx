import { AudioPlayer } from "../AudioPlayer/AudioPlayer";
import HotManImg from "../../assets/images/hot_man.png";
import ResonanceImg from "../../assets/images/resonance.png";
import SkyAfterSunsetImg from "../../assets/images/sky_after_sunset.png";
import CityLightsCascadeImg from "../../assets/images/city_lights_cascade.png";
import BearingImg from "../../assets/images/bearing.png";

import WhatTheHellAudio from "../../assets/music/what_the_hell.mp3";
import ResonanceAudio from "../../assets/music/resonance.mp3";
import SkyAfterSunsetAudio from "../../assets/music/sky_after_sunset.mp3";
import CityLightsCascadeAudio from "../../assets/music/city_lights_cascade.mp3";
import BearingAudio from "../../assets/music/bearing.mp3";

import cls from "./audiolist.module.scss";

export const AudioList = () => {
  const AudioDatas = [
    {
      img: BearingImg,
      name: "Bearing",
      author: "Frequency",
      audio: BearingAudio,
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
    {
      img: HotManImg,
      name: "What The Hell",
      author: "Avril Lavigne",
      audio: WhatTheHellAudio,
    },
  ];

  return (
    <div className={cls.audio_list}>
      {AudioDatas.map((el) => (
        <AudioPlayer
          img={el.img}
          name={el.name}
          author={el.author}
          audio={el.audio}
        />
      ))}
    </div>
  );
};
