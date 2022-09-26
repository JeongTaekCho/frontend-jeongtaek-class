export const checkValidation = (file: File) => {
  if (!file?.size) {
    alert("파일이 없습니다.");
    return false;
  }

  if (file.size > 5 * 1024 * 1024) {
    alert("5mb이하의 파일만 업로드 가능합니다.");
    return false;
  }

  if (!file.type.includes("jpeg") && !file.type.includes("png")) {
    alert("파일 확장자를 확인해주세여");
    return false;
  }

  return true;
};
