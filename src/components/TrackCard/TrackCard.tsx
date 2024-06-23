import { Card, IconButton, Image, VisuallyHidden } from "@vkontakte/vkui";
import CardBasic from "../../assets/card_basic.svg?react";
import CardPlaying from "../../assets/card_playing.svg?react";
import AudioAnimation from "../../assets/audio-animation.mp4";
import "./TrackCard.css";
import { Icon16MoreVertical } from "@vkontakte/icons";
import SampleAudio from "../../assets/keys-of-moon-the-success(chosic.com).mp3";
import { useRef, useState } from "react";

type TrackCardProps = {
  name: string;
  author: string;
  duration: string;
  image?: string;
};
const TrackCard = ({ name, author, duration, image }: TrackCardProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const handlePlay = () => {
    if (isPlaying) {
      (audioRef.current! as HTMLAudioElement).pause();
    } else {
      (audioRef.current! as HTMLAudioElement).play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <audio ref={audioRef}>
        <source src={SampleAudio}></source>
      </audio>
      <Card className="audio-card">
        <IconButton
          label="Слушать/Остановить"
          className="track-icon"
          onClick={handlePlay}
        >
          <VisuallyHidden>{name}</VisuallyHidden>
          {isPlaying ? (
            <div className="container">
              <video
                src={AudioAnimation}
                loop
                autoPlay
                height={80}
                width={80}
              ></video>
              <CardBasic height={79} width={80} />
            </div>
          ) : (
            <CardBasic height={80} width={80} />
          )}
        </IconButton>
        <article className="titles">
          <h2>{name}</h2>
          <h3>{author}</h3>
        </article>
        <article className="duration">{duration}</article>
        <IconButton>
          <VisuallyHidden>Меню</VisuallyHidden>
          <Icon16MoreVertical color="#2688EB" />
        </IconButton>
      </Card>
    </>
  );
};

export default TrackCard;
