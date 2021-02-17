import styled from "styled-components";

const FramesEmbed = () => (
  <FramesWrapper>
    <Frame>
      <iframe
        title="Spotify Player"
        src="https://open.spotify.com/embed/playlist/4GjrIoPOl6xNo9ZPOhF3tz"
        width="300"
        height="400"
        frameBorder="0"
        allow="encrypted-media"
      ></iframe>
    </Frame>
  </FramesWrapper>
);

export default FramesEmbed;

const Frame = styled.div`
  iframe {
    width: 100%;
    max-width: 660px;
    max-height: 300px;
    overflow: hidden;
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    overflow: hidden;
  }
`;

const FramesWrapper = styled.div`
  div {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  max-width: 100%;
  width: 100%;
  margin: 0% 0 5% 0;
  padding: 0 5%;
  @media (max-width: 700px) {
    ${Frame} {
      iframe {
        max-width: 100%;
      }
      margin-bottom: 5%;
      overflow: hidden;
      border-radius: 10px;
      max-width: 100%;
    }
  }
`;
