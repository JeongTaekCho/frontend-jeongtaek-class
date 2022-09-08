const ProductDetail = () => {
  //상태관리

  const [writer, setWriter] = useState(""); // 작성자
  const [comment, setComment] = useState(""); // 댓글
  const [password, setPassword] = useState(""); // 비밀번호
  const [onModal, setOnModal] = useState(false); // 상세주소 모달
  const [likeCount, setLikeCount] = useState(0); // 좋아요 개수
  const [disLikeCount, setDisLikeCount] = useState(0); // 싫어요 개수
  const [commentPsModal, setCommentPsModal] = useState(false); // 댓글 삭제시 비밀번호 모달
  const [commentDelPassword, setCommentDelPassword] = useState(""); // 댓글 삭제시 비밓번호

  // 유즈 라우터
  const router = useRouter();

  return (
    <>
      <ProductDetailUi />
    </>
  );
};

export default ProductDetail;
