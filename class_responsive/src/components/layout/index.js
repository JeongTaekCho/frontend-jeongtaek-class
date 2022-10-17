import { useRecoilState } from "recoil";
import { themeState } from "../../store";
import { themeStyle } from "../../styles/theme";

export default function Layout({ children }) {
  const [theme, setTheme] = useRecoilState(themeState);

  return <ThemeProvider theme={themeStyle(theme)}>{children}</ThemeProvider>;
}
