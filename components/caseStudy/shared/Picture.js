import Fade from "react-reveal/Fade";

const Picture = ({ src, alt }) => {
  return (
    <Fade fraction={0.1}>
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
