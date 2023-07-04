import { gql, useMutation } from "@apollo/client";
import { useState, type ChangeEvent, useRef } from "react";
import type {
  IMutation,
  IMutationUploadFileArgs,
} from "../../../src/commons/types/generated/types";
import styled from "@emotion/styled";
import { validationFile } from "../../../src/commons/libraries/validationFile";

const myGraphqlSetting = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

const Input = styled.input`
  display: none;
`;

const Div = styled.div`
  width: 100px;
  height: 100px;
  background-color: gray;
`;

export default function ImageUploadPage(): JSX.Element {
  const imgRef = useRef<HTMLInputElement>(null);
  const [imgUrl, setImgUrl] = useState("");
  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const onChangeFile = async (
    event: ChangeEvent<HTMLInputElement>
  ): Promise<void> => {
    if (event.target.files === null) return;

    const file = event.target.files[0];

    if (!validationFile(file)) return;

    const result = await uploadFile({
      variables: {
        file,
      },
    });

    setImgUrl(String(result.data?.uploadFile.url));
  };

  const onClickImage = (): void => {
    imgRef.current?.click();
  };

  // ! ===================================

  const [myFunction] = useMutation(myGraphqlSetting);

  /* useState 영역 */
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  /* 함수 영역 */

  // 등록 함수
  const onClickSubmit = async (): Promise<void> => {
    const result = await myFunction({
      // $ === variables
      variables: {
        createBoardInput: {
          writer,
          password: "1234",
          title,
          contents,
          images: [imgUrl],
        },
      },
    });
    console.log(result);
  };

  // 작성자 함수
  const onChangeWriter = (e: ChangeEvent<HTMLInputElement>): void => {
    setWriter(e.target.value);
  };

  // 제목 함수
  const onChangeTitle = (e: ChangeEvent<HTMLInputElement>): void => {
    setTitle(e.target.value);
  };

  // 본문 함수
  const onChangeContents = (e: ChangeEvent<HTMLInputElement>): void => {
    setContents(e.target.value);
  };

  // ! ===================================

  return (
    <>
      <div>
        작성자: <input type="text" onChange={onChangeWriter} />
      </div>
      <div>
        제목: <input type="text" onChange={onChangeTitle} />
      </div>
      <div>
        본문: <input type="text" onChange={onChangeContents} />
      </div>
      <Div onClick={onClickImage}>이미지 선택</Div>
      <Input
        type="file"
        onChange={onChangeFile}
        multiple
        ref={imgRef}
        accept="image/jpeg,image/png"
      />
      <img src={`https://storage.googleapis.com/${imgUrl}`} />
      <button onClick={onClickSubmit}>GRAPHQL-API 요청</button>
    </>
  );
}
