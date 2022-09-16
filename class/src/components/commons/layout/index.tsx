import { useRouter } from "next/router";
import LayoutBanner from "./banner";
import LayoutFooter from "./footer";
import LayoutHeader from "./header";
import LayoutNavigation from "./navigation";

interface ILayoutProps {
  children: JSX.Element;
}

const Layout = (props: ILayoutProps) => {
  const HIDDEN_HEADERS = ["/12-03-modal-alert"];
  const router = useRouter();
  console.log(router);

  const isHiddenHeader = HIDDEN_HEADERS.includes(router.asPath);

  console.log(isHiddenHeader);

  return (
    <>
      {!isHiddenHeader && <LayoutHeader />}
      <div>
        <LayoutBanner />
      </div>
      <div>
        <LayoutNavigation />
      </div>
      <div style={{ width: "100%", height: "1000px", display: "flex" }}>
        <div style={{ width: "30%", background: "orange" }}>사이드바</div>
        <div style={{ width: "70%", background: "red" }}>{props.children}</div>
      </div>
      <div>
        <LayoutFooter />
      </div>
    </>
  );
};

export default Layout;
