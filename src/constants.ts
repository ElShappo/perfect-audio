import { Track } from "./types";

import PersonalCathedralsImage from "./assets/tracks/personal-cathedrals/personal-cathedrals-image.jpg";
import PersonalCathedralsFile from "./assets/tracks/personal-cathedrals/personal-cathedrals.mp3";
import TheSuccessFile from "./assets/tracks/the-success/the-success.mp3";

export const tracks: Track[] = [
  {
    name: "Personal Cathedrals",
    author: "Aly & AJ",
    duration: "3:46",
    file: PersonalCathedralsFile,
    image: PersonalCathedralsImage,
  },
  {
    name: "The Success",
    author: "Keys of Moon",
    duration: "1:59",
    file: TheSuccessFile,
  },
];
