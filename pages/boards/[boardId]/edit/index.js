import { gql, useQuery } from "@apollo/client"
import BoardWrite from "../../../../src/components/units/board/write/BoardWrite.container"
import { useRouter } from "next/router"

const FETCH_BOARD = gql`
    query fetchBoard($boardId: ID!){
        fetchBoard(boardId: $boardId){
            _id,
            writer,
            title,
            contents
        }
    }
`

export default function EmotionPage(){

    const router = useRouter();

    const {data} = useQuery(FETCH_BOARD, {
        variables: {boardId : router.query.boardId}
    });

    return(
       <BoardWrite isEdit={true} data={data}/>
    )
}