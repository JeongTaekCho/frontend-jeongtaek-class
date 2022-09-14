interface IViewPort {
  tabletSize: String;
  mobileSize: String;
}

const viewPort: IViewPort = {
  tabletSize: "1199px",
  mobileSize: "767px",
};

interface ITheme {
  tablet: string;
  mobile: string;
  mainColor: string;
}
const theme: ITheme = {
  tablet: `(max-width : ${viewPort.tabletSize} )`,
  mobile: `(max-width : ${viewPort.mobileSize} )`,
  mainColor: "#f95621",
};

export default theme;
