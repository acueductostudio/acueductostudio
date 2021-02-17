import styled from "styled-components";

const FramesEmbed = () => (
  <FramesWrapper>
    <Frame>
      <iframe
        title="Apple Music Player"
        allow="autoplay *; encrypted-media *; fullscreen *"
        frameBorder="0"
        height="400"
        width="300"
        sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
        src="https://embed.music.apple.com/mx/playlist/canasta-b%C3%A1sica/pl.u-e98lkq9hK27VzP?l=en"
      ></iframe>
    </Frame>
    <Frame>
      <iframe
        title="Spotify Player"
        src="https://open.spotify.com/embed/playlist/4GjrIoPOl6xNo9ZPOhF3tz"
        width="300"
        height="400"
        frameBorder="0"
        allowtransparency="true"
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
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10rem;
  max-width: 85%;
  width: 100%;
  margin: 2% 0 5% 0;
  padding: 0 5%;
  @media (max-width: 1200px) {
    max-width: 100%;
  }
  @media (max-width: 1200px) {
    grid-gap: 2rem;
  }
  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
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
