import { Card, IconButton, VisuallyHidden } from "@vkontakte/vkui";
import CardIcon from "../../assets/card_icon.svg";
import AudioAnimation from "../../assets/audio-animation.mp4";
import { Icon16MoreVertical } from "@vkontakte/icons";
import SampleAudio from "../../assets/personal-cathedrals.mp3";
import { useRef, useState } from "react";
import "./TrackCard.css";

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

  const handleEnded = () => {
    setIsPlaying(false);
  };

  return (
    <>
      <audio ref={audioRef} onEnded={handleEnded}>
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
              <video src={AudioAnimation} loop autoPlay></video>
              <img src={image || CardIcon} height={50} width={50}></img>
              {/* <CardIcon height={50} width={50} /> */}
            </div>
          ) : (
            <img src={image || CardIcon} height={50} width={50}></img>
            // <CardIcon height={50} width={50} />
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
