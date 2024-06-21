import { Card, Image } from "@vkontakte/vkui";
import CardBasic from "../../assets/card_basic.svg";
import "./TrackCard.css";

type TrackCardProps = {
  name: string;
  author: string;
  duration: string;
  image?: string;
};
const TrackCard = ({ name, author, duration, image }: TrackCardProps) => {
  return (
    <Card style={{ display: "flex" }}>
      <Image src={CardBasic} size={80}></Image>
      <div>
        <h2>{name}</h2>
        <h3>{author}</h3>
      </div>
    </Card>
  );
};

export default TrackCard;
