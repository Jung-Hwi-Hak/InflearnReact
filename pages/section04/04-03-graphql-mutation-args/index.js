import { useMutation, gql } from "@apollo/client";


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

    const [myFunction] = useMutation(myGraphqlSetting);

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