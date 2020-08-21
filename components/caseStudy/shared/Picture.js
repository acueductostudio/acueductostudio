import { Fade } from "react-awesome-reveal";

const Picture = ({ src, alt, fraction }) => {
  return (
    <Fade fraction={fraction ? fraction : 0.1}>
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
    </Fade>
  );
};

export default Picture;
