import { gql, useMutation } from "@apollo/client";
import { useState, type ChangeEvent } from "react";
import type {
  IMutation,
  IMutationUploadFileArgs,
} from "../../../src/commons/types/generated/types";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export default function ImageUploadPage(): JSX.Element {
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
    console.log(file);

    const result = await uploadFile({
      variables: {
        file,
      },
    });

    console.log(result.data?.uploadFile.url);
    setImgUrl(String(result.data?.uploadFile.url));
  };

  return (
    <>
      <input type="file" onChange={onChangeFile} multiple />
      <img src={`https://storage.googleapis.com/${imgUrl}`} />
    </>
  );
}
