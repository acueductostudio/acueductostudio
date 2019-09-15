import React from "react";
import Theme from "./theme";

let theStyles = `
  #revealer{
    position:absolute;
    z-index: 100;
    left:0;
    right:0;
    bottom:0;
    top:0;
    padding: 19px;
    background-color: #060809;
    transition: opacity .8s ease;
    will-change: opacity;
  }
  #bordered{
    width: calc(100% - 40px);
    height: calc(100% - 42px);
    max-width: 1500px;
    margin:0 auto;
    position: absolute;
    pointer-events: none;
    left: 20px;
    top: 20px;
    right: 20px;
    bottom: 20px;
    border: 17px solid white;
    border-width:17px;
    transform: scale(.12);
    transition: transform .4s ease-out, border-width .3s ease-out;
    will-change: transform;
    overflow:hidden;
  }
  #bordered::before{
    content: ' ';
    background-color:#1740BF;
    width:300%;
    height:100%;
    position:absolute;
    transform:translateX(-100%);
    animation: shine 2s infinite ease-in-out;
    transition: opacity .1s ease;
  }
  .hidden::before{
    opacity:0;
  }
  #logo{
    width:40px;
    height:35px;
    position:absolute;
    top: calc(50% - 20px);
    left: calc(50% - 20px);
    transition: opacity .2s ease;
  }
  @keyframes shine {
    0%   { transform:translateX(-100%); }
    30% { transform:translateX(-100%); }
    100% {transform:translateX(100%); }
  }

@font-face {
  font-family: 'Wide';
  src: url('../static/assets/font/Bold.woff2') format('woff2'),
      url('../static/assets/font/Bold.woff') format('woff');
  font-weight: 200;
  font-style: bold;
}
@font-face {
  font-family: 'Wide';
  src: url('../static/assets/font/Normal.woff2') format('woff2'),
      url('../static/assets/font/Normal.woff') format('woff');
  font-weight: 100;
  font-style: normal;
}


html {
  font-size: 62.5%;
  height: 100vh;
  box-sizing: border-box;
  font-family: 'Wide', sans-serif;
  font-weight: 100;
  font-style:normal;
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
      height:100%;
      width: 100%;
      overflow:hidden;
      letter-spacing: .02px;
  }

  #__next {
    height: 100%;
    width: 100%;
  }
  main{
    z-index:0;
  }
  h1{
    margin:0;
    font-weight:inherit;
    font-size: 5rem;
    font-weight: 200;
  }
  h2 {
    margin:0;
    font-weight:inherit;
    font-size: 5.8rem;
  }
  h3{
    font-size: 5.8rem;
    margin: 0px;
    font-weight:inherit;
  }
  p{
    margin:0;
    line-height: 135%;
  }
  h4{
    font-weight:inherit;
    margin:0;
  }
  a{
    color: inherit;
  }
    ul,ol{
    margin:0;
    padding:0;
  }
  /* normalize */
  figure{margin:0;}a{background-color:transparent}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}  
`;

function createMarkup() {
  return { __html: theStyles };
}
export default () => <style dangerouslySetInnerHTML={createMarkup()} />;
