import React from "react";
import Theme from "./theme";

// @media screen and (max-width: 1330px) {
//   body{font-size:14px};
// }
// @media screen and (max-width: 1000px) {
//   html{font-size:12px};
// }
// @media screen and (max-width: 700px) {
//   html{font-size:10px};
// }

let theStyles = `
@font-face {
  font-family: 'AcuWide';
  src: url('../static/assets/font/AcuWide.woff2') format('woff2'),
      url('../static/assets/font/AcuWide.woff') format('woff');
  font-weight: 100;
  font-style: normal;
}

html {
  font-size: 62.5%;
  height: 100vh;
  box-sizing: border-box;
  font-weight: 100;
  font-family: 'AcuWide';
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
    }
    h2 {
      margin: 4% 0 0 0;
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
      font-size: 1.32rem;
      font-weight:inherit;
    }
    a{
      color: inherit;
    }

  /* normalize */
  figure{margin:0;}a{background-color:transparent}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}  

`;

function createMarkup() {
  return { __html: theStyles };
}
export default () => <style dangerouslySetInnerHTML={createMarkup()} />;
