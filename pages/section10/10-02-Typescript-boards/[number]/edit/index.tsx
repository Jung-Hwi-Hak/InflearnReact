// 수정 컴포넌트
import { gql, useQuery } from "@apollo/client";
import BoardWrite from "../../../../../src/components-example/units/board/10-write/BoardWrite.container"
import { useRouter } from "next/router";


const FETCH_BOARD = gql`
    query fetchBoard($number: Int){
        fetchBoard(number: $number){
        number
        writer
        title
        contents
        }
    }
`

export default function GraphqlMutationArgsPage(){
   
    const router = useRouter();

    const { data } = useQuery(FETCH_BOARD, {
        variables: { number: Number(router.query.number) }
    });

    return(
        <div>
            <BoardWrite
                isEdit={true}
                data={data}
            />
        </div>
    );
}