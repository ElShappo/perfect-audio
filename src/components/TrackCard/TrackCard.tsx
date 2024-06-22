import { Card, Image } from "@vkontakte/vkui";
import CardBasic from "../../assets/card_basic.svg";
import SampleAudio from "../../assets/keys-of-moon-the-success(chosic.com).mp3";
import "./TrackCard.css";

type TrackCardProps = {
  name: string;
  author: string;
  duration: string;
  image?: string;
};
const TrackCard = ({ name, author, duration, image }: TrackCardProps) => {
  return (
    <Card style={{ display: "flex", alignItems: "center", gap: "1em" }}>
      <Image src={CardBasic} size={80}></Image>
      <div>
        <h2>{name}</h2>
        <h3>{author}</h3>
      </div>
      <div>
        <audio controls>
          <source src={SampleAudio} type="audio/mp3" />
          Ваш бразуер не поддерживает воспроизведение аудио
        </audio>
      </div>
    </Card>
  );
};

export default TrackCard;
