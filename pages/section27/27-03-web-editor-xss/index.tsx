/**
 * 다이나믹 임폴트 방법
 */

import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import { wrapFormAsyncFunc } from "../../../src/commons/libraries/asyncFunc";
import { useForm } from "react-hook-form";
import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import type {
  IMutation,
  IMutationCreateBoardArgs,
} from "../../../src/commons/types/generated/types";
// import { Modal } from "antd";

const ReactQuill = dynamic(async () => await import("react-quill"), {
  ssr: false,
});

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
    }
  }
`;
export default function WebEditor(): JSX.Element {
  const router = useRouter();
  const [myFunction] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATE_BOARD);
  const { register, setValue, trigger, handleSubmit } = useForm({
    mode: "onChange",
  });

  const onChangeContents = (value: string): void => {
    setValue("contents", value === "<p><br></p>" ? "" : value);

    // onChange 됐으니까 에러검증 같은것들 해달라고 react-hookform에 알려주는 기능!
    void trigger("contents");
  };

  const onClickSubmit = async (data: any): Promise<void> => {
    try {
      const result = await myFunction({
        variables: {
          createBoardInput: {
            writer: data.writer,
            password: data.password,
            title: data.title,
            contents: data.contents,
          },
        },
      });
      // 다이나믹 임폴트 - 1
      const { Modal } = await import("antd"); // code-splitting 성능 최적화
      Modal.success({ content: "게시글 등록 완료" });
      const boardId = result.data?.createBoard._id;
      void router.push(`/section27/27-03-web-editor-xss-detail/${boardId}`);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };
  return (
    <section>
      <form onSubmit={wrapFormAsyncFunc(handleSubmit(onClickSubmit))}>
        작성자: <input type="text" {...register("writer")} />
        <br />
        비밀번호: <input type="password" {...register("password")} />
        <br />
        제목: <input type="text" {...register("title")} />
        <br />
        내용:{" "}
        {/* <ReactQuill onChange={onChangeContents} {...register("contents")} /> */}
        <ReactQuill onChange={onChangeContents} />
        <br />
        <button>등록하기</button>
      </form>
    </section>
  );
}
