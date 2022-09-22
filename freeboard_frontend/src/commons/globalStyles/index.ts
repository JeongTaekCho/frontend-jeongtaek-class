import { css } from "@emotion/react";

export const GlobalStyles = css`
  @font-face {
    font-family: "nexon";
    src: url("/fonts/Bazzi.woff");
  }

  @font-face {
    font-family: "SCDream";
    src: url("/fonts/SCDream1.otf");
    font-weight: 100;
  }
  @font-face {
    font-family: "SCDream";
    src: url("/fonts/SCDream2.otf");
    font-weight: 200;
  }
  @font-face {
    font-family: "SCDream";
    src: url("/fonts/SCDream3.otf");
    font-weight: 300;
  }
  @font-face {
    font-family: "SCDream";
    src: url("/fonts/SCDream4.otf");
    font-weight: 400;
  }
  @font-face {
    font-family: "SCDream";
    src: url("/fonts/SCDream5.otf");
    font-weight: 500;
  }
  @font-face {
    font-family: "SCDream";
    src: url("/fonts/SCDream6.otf");
    font-weight: 600;
  }
  @font-face {
    font-family: "SCDream";
    src: url("/fonts/SCDream7.otf");
    font-weight: 700;
  }
  @font-face {
    font-family: "SCDream";
    src: url("/fonts/SCDream8.otf");
    font-weight: 800;
  }
  @font-face {
    font-family: "SCDream";
    src: url("/fonts/SCDream9.otf");
    font-weight: 900;
  }

  html,
  body {
    padding: 0;
    margin: 0;
    font-family: "SCDream";
    font-weight: 900;
    font-size: 10px;
    overflow-x: hidden;
    height: auto !important;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  ul,
  li {
    list-style: none;
    margin: 0;
  }
  p {
    margin: 0;
  }

  @media (max-width: 767px) {
    html,
    body {
      font-size: 5px;
    }
  }
`;
