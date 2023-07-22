/**
 * 다이나믹 임폴트 방법
 */

import dynamic from "next/dynamic";
import { useEffect } from "react";
import "react-quill/dist/quill.snow.css";
import { wrapFormAsyncFunc } from "../../../src/commons/libraries/asyncFunc";
// import { Modal } from "antd";

const ReactQuill = dynamic(async () => await import("react-quill"), {
  ssr: false,
});

export default function WebEditor(): JSX.Element {
  // ReactQuill 만든 사람들이 만든 onChange임으로 event가 아니고 value가 들어온다.
  const onChangeContents = (value: string): void => {
    console.log(value);
  };
  // 다이나믹 임폴트 - 2 다 그린후 import

  //   useEffect(() => {
  //     async function aaa(): Promise<void> {
  //       const { Modal } = await import("antd");
  //       Modal.success({ content: "게시글 등록 완료" });
  //     }
  //     void aaa();
  //   }, []);

  const onClickSubmit = async (): Promise<void> => {
    // 다이나믹 임폴트 - 1
    const { Modal } = await import("antd"); // code-splitting 성능 최적화
    Modal.success({ content: "게시글 등록 완료" });
  };
  return (
    <section>
      <form onSubmit={wrapFormAsyncFunc(onClickSubmit)}>
        작성자: <input type="text" />
        <br />
        비밀번호: <input type="password" />
        <br />
        제목: <input type="text" />
        <br />
        내용: <ReactQuill onChange={onChangeContents} />
        <br />
        <button>등록하기</button>
      </form>
    </section>
  );
}
