import { gql, useQuery } from "@apollo/client"

const FETCH_BOARD = gql`
    query{
        fetchBoard(number: 3601){
        number
        writer
        title
        contents
        }
    }
`


export default function StaticRoutingMovedPage(){

    const { data } = useQuery(FETCH_BOARD);

    return(
        <div>
            <div>페이지1 이동완료</div>
            <div>작성자: {data?.fetchBoard.writer}</div>
            <div>제목: {data?.fetchBoard.title}</div>
            <div>내용: {data?.fetchBoard.contents}</div>
        </div>
    )
}