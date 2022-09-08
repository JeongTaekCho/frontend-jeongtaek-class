import { SvgDefaultBtn } from "./svgStyles";

const Gps = () => {
  return (
    <SvgDefaultBtn>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="36"
        height="36"
        viewBox="0 0 36 36"
      >
        <g fill="none" fill-rule="evenodd">
          <path d="M36 36H0V0h36z" />
          <g
            transform="translate(8.7 6)"
            stroke="#333"
            stroke-linejoin="round"
            stroke-width="1.7"
          >
            <path
              d="M9.306 24S0 16.544 0 9.306a9.306 9.306 0 0 1 18.612 0C18.612 16.544 9.306 24 9.306 24z"
              stroke-linecap="round"
            />
            <circle stroke-linecap="square" cx="9.212" cy="9.123" r="2.784" />
          </g>
        </g>
      </svg>
    </SvgDefaultBtn>
  );
};

export default Gps;
