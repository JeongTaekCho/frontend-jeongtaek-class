import { css } from "@emotion/react";

export const globalStyles = css`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  @font-face {
    font-family: "sci-font";
    src: url("/fonts/scifibit.ttf");
  }

  html,
  body {
    font-family: "sci-font";
  }
`;
