import { Fade } from "react-awesome-reveal";
import Image from "next/image";

const Picture = ({ src, alt, fraction, width, height, newimg }) => {
  return (
    <Fade fraction={fraction ? fraction : 0.1} triggerOnce>
      {!newimg ? (
        <picture>
          <source
            srcSet={src.replace(/jpg|jpeg|png/gi, "webp")}
            type="image/webp"
          />
          <source
            srcSet={src}
            type={`image/${src.includes("png") ? "png" : "jpeg"}`}
          />
          <img src={src} alt={alt} />
        </picture>
      ) : (
        <Image width={width} height={height} src={src} alt={alt} />
      )}
    </Fade>
  );
};

export default Picture;
