import { useState } from "react";
import YouTubePlayer from "react-player";
import dynamic from "next/dynamic";
import styled, { css, keyframes } from "styled-components";
import Pause from "../../static/assets/img/casestudies/lddlf/pause.svg";
import Play from "../../static/assets/img/casestudies/lddlf/play.svg";

//52.7 es el de todos menos, desechables tiene una línea negra a la derecha y el trailer está en 1080p

// const ThePlayer = dynamic(import("react-player").then(mod => mod.VimeoPlayer), {
//   loading: () => <p>Loading wrapper...</p>,
//   ssr: false
// });

// const ThePlayer = dynamic(() =>
//   import('react-player').then(mod => mod.VimeoPlayer),{
//     loading: () => <p>Loading wrapper...</p>,
//   }
// )

function VideoPlayer(props) {
  const [isPlaying, setPlaying] = useState(false);
  const [isInitial, setInitial] = useState(true);

  function handlePlay(bool = !isPlaying) {
    setPlaying(bool);
    setInitial(false);
  }

  function pauseVideo() {
    setPlaying(false);
  }

  function restoreVideo() {
    setPlaying(false);
    setInitial(true);
  }

  return (
    <VideoWrapper ratio={props.ratio}>
      <Clicker onClick={() => handlePlay()} hideSvg={isPlaying}>
        {isPlaying ? <PauseButton id="paused" /> : <PlayButton />}
      </Clicker>
      <Fader hide={isPlaying} />
      <OverStill
        style={{ backgroundImage: `url(${props.still})` }}
        hide={!isInitial}
        onClick={() => handlePlay(true)}
      />
      {!isInitial && (
        <YouTubePlayer
          playing={isPlaying}
          url={props.url}
          controls={false}
          height="auto"
          width="100%"
          onEnded={restoreVideo}
          onPause={pauseVideo}
          onPlay={() => handlePlay(true)}
          config={{
            vimeo: {
              preload: true
            }
          }}
        />
      )}
    </VideoWrapper>
  );
}

export default VideoPlayer;

const VideoWrapper = styled.div`
  padding-bottom: ${props => props.ratio || "50.6%"};
  display: block;
  width: 90%;
  margin: 5%;
  position: relative;
  overflow: hidden;
  background-color: ${props => props.theme.colors.background};
  iframe {
    width: 100%;
    height: 100%;
    position: absolute;
  }
`;

const hidePause = keyframes`
  0% {
    opacity:0;
  }
  5% {
    opacity:1;
  }
  90% {
    opacity:1;
  }
  100% {
    opacity:0;
  }
`;

const Clicker = styled.div`
  width: 100%;
  /* height: calc(100% - 50px); */
  height: 100%;
  position: absolute;
  pointer-events: auto;
  z-index: 3;
  cursor: pointer;
  ${props =>
    props.hideSvg &&
    css`
      svg {
        opacity: 0;
      }
      :hover {
        svg {
          animation: ${hidePause} 2.4s;
          animation-fill-mode: forwards;
        }
      }
    `}
  svg {
    width: 35px;
    height: 35px;
    position: absolute;
    left: calc(50% - 17.5px);
    top: calc(50% + 10px);
    transition: opacity 0.4s ease;
    z-index: 3;
    path {
      stroke: ${props => props.theme.colors.foreground};
      stroke-width: 26px;
      fill: none;
      stroke: rgb(255, 255, 255);
      stroke-linejoin: round;
      stroke-miterlimit: 10;
    }
  }
`;
const OverStill = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1;
  cursor: pointer;
  transition: 0.4s ease opacity;
  opacity: ${props => (props.hide ? "0" : "1")};
  pointer-events: ${props => (props.hide ? "none" : "auto")};
  background-size: cover;
  background-position: center;
`;

const PlayButton = styled(Play)`
  opacity: ${props => (props.hide ? "0" : "1")};
`;

const PauseButton = styled(Pause)`
  opacity: ${props => (props.hide ? "0" : "1")};
`;

const Fader = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 2;
  transition: 0.4s ease opacity;
  margin-bottom: 50px;
  pointer-events: none;
  ${props =>
    props.hide &&
    css`
      opacity: 0;
    `}
`;
