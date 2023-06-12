import { useMutation, gql } from "@apollo/client";

const myGraphqlSetting = gql`
    mutation{
        createBoard(writer: "123", title: "안녕하세요", contents: "반갑습니다."){
        _id
        number
        message
        }
    }
`;


export default function GraphqlMutationPage(){

    const [myFunction] = useMutation(myGraphqlSetting);

    // 함수
    const onClickSubmit = async ()=>{
        const result = await myFunction();
        console.log(result);
    }

    return(
        <div>
            <button onClick={onClickSubmit}>GRAPHQL-API 요청</button>
        </div>
    );
}