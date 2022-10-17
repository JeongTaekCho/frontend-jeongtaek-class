import { useRecoilState } from "recoil";
import { themeState } from "../../store";
import { themeStyle } from "../../styles/theme";

export default function Layout({ children }) {
  const [theme, setTheme] = useRecoilState(themeState);

  return <ThemeProvide theme={themeStyle(theme)}>{children}</ThemeProvide>;
}
