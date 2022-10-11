// import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import { Modal } from "antd";
import { useForm } from "react-hook-form";

const ReactQuill = dynamic(async () => await import("react-quill"), {
  ssr: false,
});

export default function WebEditorPage() {
  const { register, handleSubmit, setValue, trigger } = useForm({
    mode: "onChange",
  });

  // ReactQuill 만든 사람들이 만든 onChange이므로 이벤트 안들어옴..
  const onChangeContents = async (value: string) => {
    setValue("contents", value); // register로 값을 변경하지 않고 강제로 값을 넣어주는 기능.
    // onChange 됐다고 react-hook-form에 강제로 알려주는 기능
    // await trigger("contents");
  };

  const onClickSubmit = async (data: any) => {
    const { Modal } = await import("antd"); // 코드스플릿팅 - 코드를 분리하다
    Modal.success({ content: "등록에 성공하셨습니다." });

    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      작성자: <input type="text" {...register("writer")} /> <br />
      비밀번호: <input type="password" {...register("password")} />
      <br />
      제목: <input type="text" {...register("title")} />
      <br />
      내용: <ReactQuill onChange={onChangeContents} />
      <br />
      <button type="submit">등록하기</button>
    </form>
  );
}
