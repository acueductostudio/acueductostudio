import { Fade } from "react-awesome-reveal";
import Image from "next/image";

const Picture = ({ src, alt, fraction, width, height, withWrapper }) => {
  let imageFaded = (
    <Fade fraction={fraction ? fraction : 0.1} triggerOnce>
      <Image width={width} height={height} src={src} alt={alt} />
    </Fade>
  );
  return withWrapper ? <div className="image">{imageFaded}</div> : imageFaded;
};

export default Picture;
