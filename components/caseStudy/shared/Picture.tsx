import { Fade } from "react-awesome-reveal";
import Image from "next/image";

const Picture = ({
  src,
  alt,
  width,
  height,
  fraction,
  withWrapper,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  fraction?: number;
  withWrapper?: boolean;
}) => {
  let imageFaded = (
    <Fade fraction={fraction ? fraction : 0.1} triggerOnce>
      <Image width={width} height={height} src={src} alt={alt} />
    </Fade>
  );
  return withWrapper ? <div className="image">{imageFaded}</div> : imageFaded;
};

export default Picture;
