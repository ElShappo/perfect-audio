import React, { useState, useRef } from "react";
import SampleAudio from "../../assets/keys-of-moon-the-success(chosic.com).mp3";

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);

  const handlePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleDurationChange = () => {
    setDuration(audioRef.current.duration);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${String(seconds).padStart(2, "0")}`;
  };

  return (
    <div>
      <audio
        ref={audioRef}
        onTimeUpdate={handleTimeUpdate}
        onDurationChange={handleDurationChange}
      >
        <source src={SampleAudio} type="audio/mpeg" />
      </audio>
      <button onClick={handlePlay}>{isPlaying ? "Pause" : "Play"}</button>
      {/* <div>
        {formatTime(currentTime)} / {formatTime(duration)}
      </div> */}
      {/* <input
        type="range"
        min="0"
        max={duration}
        value={currentTime}
        onChange={(e) => {
          audioRef.current.currentTime = e.target.value;
          setCurrentTime(e.target.value);
        }}
      /> */}
    </div>
  );
};

export default AudioPlayer;
