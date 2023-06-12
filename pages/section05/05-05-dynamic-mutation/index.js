import { useMutation, gql } from "@apollo/client";
import { useRouter } from "next/router";


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

    const router = useRouter();

    const [myFunction] = useMutation(myGraphqlSetting);

    // 함수
    const onClickSubmit = async ()=>{

        try{
            const result = await myFunction({
                // $ === variables
                variables: {
                    writer: "훈발롬",
                    title: "짱구",
                    contents: "통수"
                }
            });
            console.log(result);
            console.log(result.data.createBoard.number);
            router.push(`/section05/05-05-dynamic-mutation-move/${result.data.createBoard.number}`);
        }catch(error){
            alert(error.message);
        }
    }

    return(
        <div>
            <button onClick={onClickSubmit}>GRAPHQL-API 요청</button>
        </div>
    );
}