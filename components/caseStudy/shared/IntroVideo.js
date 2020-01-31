import styled from "styled-components";

const IntroVideo = props => (
  <VideoWrapper>
    <Video
      autoPlay
      playsInline
      muted
      loop
      poster={`/assets/img/casestudies/${props.link}/intro_poster.jpg`}
    >
      <source
        src={`/assets/video/casestudies/${props.link}/intro.mp4`}
      />
    </Video>
  </VideoWrapper>
);

export default IntroVideo;

const VideoWrapper = styled.div`
  max-width: 1150px;
  padding: 0 5%;
`;

const Video = styled.video`
  width: 100%;
`;
