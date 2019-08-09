import React, { useState, useEffect } from "react";
import FilePlayer from "react-player";
import styled, { keyframes } from "styled-components/macro";
import overlayImg from "assets/img/layout/noise2.png";
import overlayImgWebP from "assets/img/layout/noise2.webp";
import video from "assets/video/video.mp4";

const VideoContainer = styled.div`
  position: fixed;
  z-index: -1;
  iframe {
    width: 100%;
    height: 100%;
    position: absolute;
  }
  video {
    position: fixed;
    min-height: 100%;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    min-width: 100%;
    width: auto !important;
    height: auto !important;
    background-size: cover;
    transition: 1s opacity;
  }
`;
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Overlay = styled.div`
  animation: ${rotate} 200ms infinite steps(4);
  position: fixed;
  left: -100%;
  right: -100%;
  top: -100%;
  bottom: -100%;
  image-rendering: pixelated;
  transform: translateZ(0.0000001);
`;

function BackgroundVideo(props) {
  const [isPlaying, setPlaying] = useState(false);
  useEffect(() => {
    setPlaying(true);
  });

  var background = props.webp ? overlayImgWebP : overlayImg 
  return (
    <VideoContainer>
      <FilePlayer
        url={video}
        playsinline
        playing={isPlaying}
        muted
        loop
        volume={0}
      />
      <Overlay
        style={{
          backgroundImage:
            "url(" + background + ")"
        }}
      />
    </VideoContainer>
  );
}

export default BackgroundVideo;
