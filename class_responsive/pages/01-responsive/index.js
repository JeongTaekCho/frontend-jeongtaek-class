import styled from "@emotion/styled";
import { breakePoints } from "../../src/styles/media";

export default function responsivePage() {
  const Item = styled.div`
    width: 95%;
    height: 400px;
    background: red;

    // 태블릿 환경

    @media ${breakePoints.tablet} {
      background-color: green;
    }
    @media ${breakePoints.mobile} {
      background-color: blue;
    }

    // 모바일 환경
  `;

  return <Item>박스입니당</Item>;
}
