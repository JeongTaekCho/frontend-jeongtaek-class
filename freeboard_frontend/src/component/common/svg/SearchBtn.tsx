import { SvgDefaultBtn } from "./svgStyles";

const SearchBtn = () => {
  return (
    <SvgDefaultBtn>
      {" "}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="36"
        height="36"
        viewBox="0 0 36 36"
      >
        <g fill="none" fillRule="evenodd">
          <path fill="none" d="M0 0h36v36H0z" />
          <g stroke="#f95621" strokeLinecap="round" strokeWidth="1.7">
            <path d="m26.081 26.081-4.12-4.12M16.467 23.334a6.867 6.867 0 1 0 0-13.734 6.867 6.867 0 0 0 0 13.734z" />
          </g>
        </g>
      </svg>
    </SvgDefaultBtn>
  );
};

export default SearchBtn;
