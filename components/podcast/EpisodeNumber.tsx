import styled from "styled-components";

const EpisodeNumber = ({ episode }: { episode: number }) => {
  return <Number>{episode < 10 ? "0" + episode : episode}</Number>;
};

export default EpisodeNumber;

const Number = styled.div`
  display: block;
  background-color: ${(p) => p.theme.colors.accent};
  border-radius: 100px;
  padding: 11px 10px 10px;
  text-align: center;
  font-weight: 200;
  font-size: 2.0rem;
  width: 45px;
  height: 45px;
  color: ${(p) => p.theme.colors.background};
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.15);
  line-height: 100%;
`;
