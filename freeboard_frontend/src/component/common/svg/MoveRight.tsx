import { DefaultBtn } from "../../boards/boardDetail/BoardDetail.styled";
import styled from "@emotion/styled";

const MoveRightBtn = styled(DefaultBtn)`
  transform: rotate(180deg);
`;

const MoveRight = () => {
  return (
    <MoveRightBtn>
      <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60">
        <defs>
          <filter
            x="-14%"
            y="-14%"
            width="128%"
            height="128%"
            filterUnits="objectBoundingBox"
            id="a"
          >
            <feOffset in="SourceAlpha" result="shadowOffsetOuter1" />
            <feGaussianBlur
              stdDeviation="2"
              in="shadowOffsetOuter1"
              result="shadowBlurOuter1"
            />
            <feColorMatrix
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
              in="shadowBlurOuter1"
              result="shadowMatrixOuter1"
            />
            <feOffset dy="1" in="SourceAlpha" result="shadowOffsetOuter2" />
            <feColorMatrix
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0"
              in="shadowOffsetOuter2"
              result="shadowMatrixOuter2"
            />
            <feMorphology
              radius=".5"
              operator="dilate"
              in="SourceAlpha"
              result="shadowSpreadOuter3"
            />
            <feOffset in="shadowSpreadOuter3" result="shadowOffsetOuter3" />
            <feColorMatrix
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.02 0"
              in="shadowOffsetOuter3"
              result="shadowMatrixOuter3"
            />
            <feMerge>
              <feMergeNode in="shadowMatrixOuter1" />
              <feMergeNode in="shadowMatrixOuter2" />
              <feMergeNode in="shadowMatrixOuter3" />
            </feMerge>
          </filter>
          <circle id="b" cx="25" cy="25" r="25" />
        </defs>
        <g fill="none" fillRule="evenodd">
          <g transform="matrix(-1 0 0 1 55 5)">
            <use fill="#000" filter="url(#a)" />
            <use fill="#FFF" />
          </g>
          <path
            d="M32.715 38.699a1 1 0 0 1-1.319.098l-.095-.082-8-7.817a1 1 0 0 1-.108-1.306l.08-.096 7.723-8.182a1 1 0 0 1 1.535 1.276l-.08.096-7.049 7.469 7.297 7.13a1 1 0 0 1 .098 1.319l-.082.095z"
            fill="#333"
            fillRule="nonzero"
          />
        </g>
      </svg>
    </MoveRightBtn>
  );
};

export default MoveRight;
