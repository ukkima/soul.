import cls from "./Audioplayer.module.scss";
import HavanaImg from "../../assets/images/havana.jpg";
import { EllipsisVertical, ArrowDownToLine, Play, Pause } from "lucide-react";
import { useRef, useState } from "react";
import classNames from "classnames";
import Havana from "../../assets/music/Havana.mp3";

export const AudioPlayer = () => {
  const [isPlay, setIsPlay] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const audioRef = useRef(null);

  const handleSeek = (e) => {
    audioRef.current.currentTime = e.target.value;
    setCurrentTime(e.target.value);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
    setDuration(audioRef.current.duration);
  };

  const handlePlay = () => {
    audioRef.current.play();
    setIsPlay(true);
  };

  const handlePause = () => {
    audioRef.current.pause();
    setIsPlay(false);
  };

  const handlePlayPause = () => {
    if (isPlay) {
      handlePause();
    } else {
      handlePlay();
    }
  };

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  const formatDuration = (durationSeconds) => {
    const minutes = Math.floor(durationSeconds / 60);
    const seconds = Math.floor(durationSeconds % 60);
    const formattedSeconds = seconds.toString().padStart(2, "0");
    return `${minutes}:${formattedSeconds}`;
  };

  return (
    <div
      className={classNames(
        cls.audio_player,
        isPlay ? cls.active : isOpen ? cls.active : ""
      )}
    >
      <div className={cls.audio_player__wrapper}>
        <div className={cls.audio_info}>
          <div className={cls.audio_image} onClick={() => handlePlayPause()}>
            <img src={HavanaImg} alt="audio image" className={cls.image} />
            <div className={cls.audio_icon}>
              {isPlay ? <Pause /> : <Play />}
            </div>
          </div>

          <div className={cls.audio_content}>
            <p className={cls.audio_name}>Havana</p>
            {!isPlay && <p className={cls.audio_author}>Camila Cabello</p>}

            {isPlay && (
              <div className={cls.audio_control}>
                <p className={cls.audio_control__time}>{`${formatDuration(
                  currentTime
                )}/${formatDuration(duration)}`}</p>
                <input
                  type="range"
                  min={0}
                  max={duration}
                  value={currentTime}
                  onChange={handleSeek}
                  className={cls.audio_control__input}
                />
              </div>
            )}

            <audio
              ref={audioRef}
              src={Havana}
              loop
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleTimeUpdate}
            ></audio>
          </div>
        </div>

        <div className={cls.menu}>
          <button onClick={toggleIsOpen} className={cls.audio_button}>
            <EllipsisVertical />
          </button>

          <a
            href={Havana}
            download
            className={classNames(cls.sub_button, isOpen ? cls.active : "")}
          >
            <ArrowDownToLine />
            Download Song
          </a>
        </div>
      </div>
    </div>
  );
};
