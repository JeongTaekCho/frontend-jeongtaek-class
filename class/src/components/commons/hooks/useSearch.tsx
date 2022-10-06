export function useSearch() {
  const [keyword, setKeyword] = useState("");

  const onChangeKeyword = (value) => {
    setKeyword(value);
  };
  return {
    keyword,
    onChangeKeyword,
  };
}
