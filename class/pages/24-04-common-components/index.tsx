import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import InputDefault from "../../src/components/commons/inputs/default";
import ButtonDefault from "../../src/components/commons/buttons/default";

const myyup = yup.object({
  writer: yup.string().required("작성자를 입력해주세여."),
  title: yup.string().required("제목을 입력해주세여."),
  contents: yup.string().required("내용을 입력해주세여."),

  email: yup
    .string()
    .email("이메일 형식에 적합하지 않습니다.")
    .required("이메일은 필수 입력입니다."),
  password: yup
    .string()
    .min(4, "비밀번호는 최소 4자리 이상 입력해주세요.")
    .max(15, " 비밀번호는 최대 15자리로 입력해주세요.")
    .required("비밀번호는 필수 입력힙니다."),
  phone: yup
    .string()
    .matches(/^\d{3}-\d{3,4}-\d{4}$/, "휴대폰 형식에 알맞지 않습니."),
});

interface IFormData {
  writer: string;
  title: string;
  contents: string;
  email: string;
  password: string;
  phone: string;
}

export default function ReactHookFormPage() {
  const { register, handleSubmit, formState } = useForm<IFormData>({
    resolver: yupResolver(myyup),
    mode: "onChange",
  });

  const onClickSubmit = (data: IFormData) => {
    console.log(data);
  };
  console.log(formState);

  return (
    <>
      <form onSubmit={handleSubmit(onClickSubmit)}>
        작성자 : <InputDefault type="text" register={register("writer")} />
        <div>{formState.errors.writer?.message}</div>
        제목 : <InputDefault type="text" register={register("title")} />
        <div>{formState.errors.title?.message}</div>
        내용 : <InputDefault type="text" register={register("contents")} />
        <div>{formState.errors.contents?.message}</div>
        패스워드 :{" "}
        <InputDefault type="password" register={register("password")} />
        <div>{formState.errors.password?.message}</div>
        {/* 주소 : <input type="text" {...register("boardAddress.addressDetail")} /> */}
        {/* <div>{formState.errors.boardAddress.addressDetail?.message}</div> */}
        이메일 : <InputDefault type="text" register={register("email")} />
        <div>{formState.errors.email?.message}</div>
        폰 : <InputDefault type="text" register={register("phone")} />
        <div>{formState.errors.phone?.message}</div>
        {/* <button type="button">등록하기</button> */}
        <ButtonDefault
          type="submit"
          style={{ backgroundColor: formState.isValid ? "yellow" : "" }}
          title="등록"
        />
        {/* <button type="reset">지우기</button> */}
      </form>
    </>
  );
}
