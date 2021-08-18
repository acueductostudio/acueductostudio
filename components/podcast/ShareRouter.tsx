import styled from "styled-components";
import { P } from "components/shared/Dangerously";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import FbIcon from "public/assets/img/layout/logos/fb.svg";
import LnIcon from "public/assets/img/layout/logos/linkedin.svg";
import TwIcon from "public/assets/img/layout/logos/tw.svg";
import WAIcon from "public/assets/img/layout/logos/whatsapp-inv.svg";

const ShareRouter = ({
  children,
  shareUrl,
}: {
  children: React.ReactNode;
  shareUrl: string;
}) => {
  return (
    <LogoList>
      {children && <P>{children + " "}</P>}
      <TwitterShareButton url={shareUrl}>
        <Icon>
          <TwIcon />
        </Icon>
      </TwitterShareButton>
      <FacebookShareButton url={shareUrl}>
        <Icon>
          <FbIcon />
        </Icon>
      </FacebookShareButton>
      <WhatsappShareButton url={shareUrl}>
        <Icon>
          <WAIcon />
        </Icon>
      </WhatsappShareButton>
      <LinkedinShareButton url={shareUrl}>
        <Icon>
          <LnIcon />
        </Icon>
      </LinkedinShareButton>
    </LogoList>
  );
};

export default ShareRouter;

const Icon = styled.div`
  @media (hover: hover) and (pointer: fine) {
    &:hover {
      svg {
        transform: scale(1.1);
      }
    }
  }
  svg {
    width: 55px;
    transition: all 0.2s ease-out;
    path {
      transition: all 0.3s ease-in;
      fill: ${(p) => p.theme.colors.foreground};
    }
  }
`;

const LogoList = styled.div`
  display: inline-flex;
  align-items: center;
  margin-top: 2rem;
  padding: 10px 10px 7px;
  border: 2px solid ${(p) => p.theme.colors.foreground_low};
  border-radius: 300px;
  p {
    padding: 0 !important;
    margin: -4px 6px 0 12px;
  }
  a {
    display: flex;
    min-height: 44px;
    min-width: 44px;
    font-size: 0rem;
    cursor: pointer;
    img {
      box-shadow: none;
    }
    &:active,
    &:focus {
      outline: none;
      img {
        transform: scale(0.9);
      }
    }
    @media (hover: hover) and (pointer: fine) {
      &:hover {
        img {
          transform: scale(1.1);
        }
      }
    }
  }
  img {
    width: 33px;
    height: 43px;
    box-sizing: content-box;
    padding: 0 10px 0 10px;
    transition: transform 0.2s ease-out;
    aspect-ratio: attr(width) / attr(height);
  }
  @media (max-width: 430px) {
    margin-top: 15px;
    p {
      display: none;
    }
  }
`;
