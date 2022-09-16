import { css } from "@emotion/react";

export const GlobalStyles = css`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-size: 10px;
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

  @media (max-width: 767px) {
    html,
    body {
      font-size: 5px;
    }
  }
`;
