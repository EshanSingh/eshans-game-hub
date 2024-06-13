import explodingHead from "../images/exploding-head3.webp";
import smilingFace from "../images/smiling-face-with-smiling-eyes.webp";
import neutralFace from "../images/neutral-face2.webp";
import { Image, ImageProps } from "@chakra-ui/react";

interface EmojiProps {
  rating: number;
}

const Emoji = ({ rating }: EmojiProps) => {
  if (rating < 3) return null;

  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: neutralFace, alt: "Okay" },
    4: { src: smilingFace, alt: "Good" },
    5: { src: explodingHead, alt: "Amazing" },
  };

  return <Image {...emojiMap[rating]} boxSize={"25px"} marginTop={1} />;
};

export default Emoji;
