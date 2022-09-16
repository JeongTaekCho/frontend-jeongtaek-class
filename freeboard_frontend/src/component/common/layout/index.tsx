import Footer from "./footer";
import Header from "./header";

interface ILayout {
  children: JSX.Element;
}

const Layout = (props: ILayout) => {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
};

export default Layout;
