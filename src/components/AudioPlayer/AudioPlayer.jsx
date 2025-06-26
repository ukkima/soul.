import cls from "./Audioplayer.module.scss";
import { EllipsisVertical, ArrowDownToLine, Play, Pause } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import classNames from "classnames";
import { useClickOutside } from "@reactuses/core";

export const AudioPlayer = (props) => {
  const { img, name, author, audio, onActive, isActive } = props;

  const [isPlay, setIsPlay] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const audioRef = useRef(null);
  const menuRef = useRef(null);

  const handleSeek = (e) => {
    audioRef.current.currentTime = e.target.value;
    setCurrentTime(e.target.value);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
    setDuration(audioRef.current.duration);
  };

  const handlePlay = () => {
    onActive();
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

  useClickOutside(menuRef, () => {
    setIsOpen(false);
  });

  const formatDuration = (durationSeconds) => {
    const minutes = Math.floor(durationSeconds / 60);
    const seconds = Math.floor(durationSeconds % 60);
    const formattedSeconds = seconds.toString().padStart(2, "0");
    return `${minutes}:${formattedSeconds}`;
  };

  useEffect(() => {
    if (!isActive) {
      handlePause();
    }
  }, [isActive]);

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
            <img src={img} alt="audio image" className={cls.image} />
            <div className={cls.audio_icon}>
              {isPlay ? <Pause /> : <Play />}
            </div>
          </div>

          <div className={cls.audio_content}>
            <p className={cls.audio_name}>{name}</p>
            {!isPlay && <p className={cls.audio_author}>{author}</p>}

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
              src={audio}
              loop
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleTimeUpdate}
            ></audio>
          </div>
        </div>

        <div ref={menuRef} className={cls.menu}>
          <button onClick={toggleIsOpen} className={cls.menu_button}>
            <EllipsisVertical />
          </button>

          <a
            href={audio}
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
