import styled from "styled-components";

const FramesEmbed = () => (
  <Frames>
    <FrameContainer>
      <iframe
        allow="autoplay *; encrypted-media *;"
        frameBorder="0"
        height="400"
        width="300"
        src="https://embed.music.apple.com/mx/playlist/canasta-b%C3%A1sica/pl.u-e98lkq9hK27VzP?l=en"
      ></iframe>
    </FrameContainer>
    <FrameContainer>
      <iframe
        src="https://open.spotify.com/embed/playlist/4GjrIoPOl6xNo9ZPOhF3tz"
        width="300"
        height="400"
        frameBorder="0"
        allowtransparency="true"
        allow="encrypted-media"
      ></iframe>
    </FrameContainer>
  </Frames>)

export default FramesEmbed

const Frames = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10rem;
  max-width: 65%;
  width: 100%;
  margin: 5% 0;
`;

const FrameContainer = styled.div`
  iframe {
    width: 100%;
    max-width: 660px;
    max-height:300px;
    overflow: hidden;
    background-color: rgba(0,0,0,0.2);
    border-radius: 10px;
    overflow: hidden;
  }
`;