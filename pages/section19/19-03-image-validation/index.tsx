import { gql, useMutation } from "@apollo/client";
import { useState, type ChangeEvent, useRef } from "react";
import type {
  IMutation,
  IMutationUploadFileArgs,
} from "../../../src/commons/types/generated/types";
import styled from "@emotion/styled";
import { validationFile } from "../../../src/commons/libraries/validationFile";

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

    console.log(result.data?.uploadFile.url);
    setImgUrl(String(result.data?.uploadFile.url));
  };

  const onClickImage = (): void => {
    imgRef.current?.click();
  };
  return (
    <>
      <Div onClick={onClickImage}>이미지 선택</Div>
      <Input
        type="file"
        onChange={onChangeFile}
        multiple
        ref={imgRef}
        accept="image/jpeg,image/png"
      />
      <img src={`https://storage.googleapis.com/${imgUrl}`} />
    </>
  );
}
