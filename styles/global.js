import Theme from "./theme";

const styles = `
  #revealer {
    position: fixed;
    z-index: 101;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    padding: 19px;
    background-color: #060809;
    transition: opacity 0.4s ease-out;
    will-change: opacity;
  }
  #bordered {
    width: calc(100% - 36px);
    height: calc(100% - 36px);
    max-width: 1500px;
    margin: 0 auto;
    position: fixed;
    pointer-events: none;
    left: 18px;
    top: 18px;
    right: 18px;
    bottom: 18px;
    border: 17px solid white;
    border-radius: 500px;
    border-width: 17px;
    transform: scale(0.12);
    transition: transform 0.4s ease-in, border-width 0.3s ease-in, border-radius 0.3s ease-out;
    will-change: transform;
    overflow: hidden;
  }
  #logo {
    width: 40px;
    height: 35px;
    position: absolute;
    top: calc(50% - 20px);
    left: calc(50% - 20px);
    transition: opacity 0.2s ease-in;
  }

  #bordered.hidden{
    border-radius:60px;
    transform: scale(1);
    border-width:2px;
  }
  @media(max-width:1530px) {
    #logo {
      width: 32px;
      height: 32px;
      top: calc(50% - 16px);
      left: calc(50% - 16px);
    }
   #bordered.hidden { 
     border-radius: 40px;
    }
  }
  @media(max-width:600px) {
    #logo {
      width: 25px;
      height: 25px;
      top: calc(50% - 12.5px);
      left: calc(50% - 12.5px);
    }
    #bordered.hidden { 
      border-radius: 30px;
     }
   }
  #bordered::before {
    content: " ";
    background-color: #1740bf;
    width: 300%;
    height: 100%;
    position: absolute;
    transform: translateX(-100%);
    animation: shine 1s infinite ease-in;
    transition: opacity 0.150s ease;
  }
  .hidden::before {
    opacity: 0;
  }
  @keyframes shine {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(50%);
    }
  }

  #Wrapper{
    overflow:hidden;
    height:100%;
  }

  /* normalize */
  figure {
    margin: 0;
  }
  a {
    background-color: transparent;
  }
  img {
    border-style: none;
  }
  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit;
    font-size: 100%;
    line-height: 1.15;
    margin: 0;
  }
  button,
  input {
    overflow: visible;
  }
  button,
  select {
    text-transform: none;
  }
  [type="button"],
  [type="reset"],
  [type="submit"],
  button {
    -webkit-appearance: button;
  }
  [type="button"]::-moz-focus-inner,
  [type="reset"]::-moz-focus-inner,
  [type="submit"]::-moz-focus-inner,
  button::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }
  [type="button"]:-moz-focusring,
  [type="reset"]:-moz-focusring,
  [type="submit"]:-moz-focusring,
  button:-moz-focusring {
    outline: 1px dotted ButtonText;
  }

  @font-face {
    font-family: "Wide";
    font-display: block;
    src: url("/assets/font/500.woff2") format("woff2"),
      url("/assets/font/500.woff") format("woff");
    font-weight: 300;
    font-style: normal;
  }
  @font-face {
    font-family: "Wide";
    font-display: block;
    src: url("/assets/font/400.woff2") format("woff2"),
      url("/assets/font/400.woff") format("woff");
    font-weight: 200;
    font-style: normal;
  }

  @font-face {
    font-family: "Wide";
    font-display: block;
    src: url("/assets/font/300.woff2") format("woff2"),
      url("/assets/font/300.woff") format("woff");
    font-weight: 100;
    font-style: normal;
  }

  html {
    font-size: 62.5%;
    height: 100vh;
    box-sizing: border-box;
    font-family: "Wide", sans-serif;
    font-weight: 100;
    font-style: normal;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 0;
    color: ${Theme.colors.foreground};
    font-size: 1.8rem;
    background-color: ${Theme.colors.background};
    font-family: inherit;
    font-weight: inherit;
    min-height: 100vh;
    height: 100%;
    width: 100%;
    overflow: hidden;
    letter-spacing: 0.02px;
  }
  @media (max-width: 600px), (max-height: 450px) {
    body {
      font-size: 1.5rem;
    }
  }

  #__next {
    height: 100%;
    width: 100%;
  }
  main {
    z-index: 0;
  }
  h1 {
    margin: 0;
    font-weight: inherit;
    font-size: 5rem;
    font-weight: 300;
  }
  h2 {
    margin: 0;
    font-weight: inherit;
    font-size: 5.8rem;
  }
  h3 {
    font-size: 5.8rem;
    margin: 0px;
    font-weight: inherit;
  }
  p {
    margin: 0;
    line-height: 135%;
  }
  h4 {
    font-weight: inherit;
    margin: 0;
  }
  a {
    color: inherit;
  }
  ul,
  ol {
    margin: 0;
    padding: 0;
  }
`;

function renderStyles() {
  return {
    __html: styles
      .replace(/(\r\n|\n|\r)/gm, "") // removes all new lines
      .replace(/ +(?= )/g, ""), // removes all multiple spaces (indenting)
    // .replace(/.}/g, "}\n") // adds new line after every } charracter
  };
}

export default () => <style dangerouslySetInnerHTML={renderStyles()} />;
