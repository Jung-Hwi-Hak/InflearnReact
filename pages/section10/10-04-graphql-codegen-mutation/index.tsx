import { useMutation, gql } from "@apollo/client";
import { IMutation, IMutationCreateBoardArgs } from "../../../src/commons/types/generated/types";
import { useState } from "react";


const myGraphqlSetting = gql`
    mutation createBoard($writer: String, $title: String, $contents: String){ 

        createBoard(writer: $writer, title: $title, contents: $contents){
        _id
        number
        message
        }
    }
`;


export default function GraphqlMutationArgsPage(){

    // const [counter, setCounter] = useState<number>(0);
    // const [myFunction] = useMutation<결과타입, 변수타입>(myGraphqlSetting);
    const [myFunction] = useMutation<Pick<IMutation,"createBoard">, IMutationCreateBoardArgs>(myGraphqlSetting);
    // 함수
    const onClickSubmit = async ()=>{
        const result = await myFunction({
            // $ === variables
            variables: {
                writer: "훈발롬",
                title: "짱구",
                contents: "통수"
            }
        });
        console.log(result);
    }

    return(
        <div>
            <button onClick={onClickSubmit}>GRAPHQL-API 요청</button>
        </div>
    );
}