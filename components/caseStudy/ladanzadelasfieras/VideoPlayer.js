import { useState } from "react";
import YouTubePlayer from "react-player";
import styled, { css, keyframes } from "styled-components";

const fierasRed = "rgb(201,32,26)";

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
        {isPlaying ? <Button>Pause</Button> : <ButtonPlay>Play</ButtonPlay>}
      </Clicker>
      <Fader hide={isPlaying} />
      <OverStill
        style={{ backgroundImage: `url(${props.still})` }}
        hide={isPlaying}
        onClick={() => handlePlay(true)}
      />
      <PlayerWrapper hide={!isPlaying}>
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
      </PlayerWrapper>
    </VideoWrapper>
  );
}

export default VideoPlayer;

const PlayerWrapper = styled.div`
  z-index: 0;
  opacity: ${props => (props.hide ? 0 : 1)};
  transition: opacity
    ${props => (props.hide ? "0s linear 0s" : "0.3s ease .8s")};
`;

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

const Button = styled.div`
  opacity: ${props => (props.hide ? "0" : "1")};
  font-size: 4.5rem;
  border-bottom: 2px solid transparent;
  @media (max-width: 1000px) {
    font-size: 3.8rem;
  }
  @media (max-width: 450px) {
    background-color: ${fierasRed};
    border-radius: 3px;
    padding: 4% 15%;
    font-size: 1.6rem;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 3px 7px;
    text-align: center;
  }
`;

const ButtonPlay = styled(Button)`
  transition: border-color 0.3s ease;
`;

const Clicker = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  pointer-events: auto;
  z-index: 3;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.colors.foreground};
  &:hover {
    ${ButtonPlay} {
      border-color: ${props => props.theme.colors.foreground};
      @media (max-width: 450px) {
        border-color: transparent;
      }
    }
  }
  ${props =>
    props.hideSvg &&
    css`
      div {
        opacity: 0;
      }
      :hover {
        div {
          animation: ${hidePause} 1.2s;
          animation-fill-mode: forwards;
        }
      }
    `}
`;

const Fader = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 2;
  transition: 0.4s ease opacity;
  margin-bottom: 50px;
  pointer-events: none;
  opacity: ${props => (props.hide ? 0 : 1)};
`;

const OverStill = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1;
  cursor: pointer;
  transition: 0.3s ease opacity 0s;
  opacity: ${props => (props.hide ? "0" : "1")};
  pointer-events: ${props => (props.hide ? "none" : "auto")};
  background-size: cover;
  background-position: center;
  ${props =>
    props.hide &&
    css`
      transition: opacity 0.3s ease 0.3s;
    `}
`;
