import { gql, useQuery } from "@apollo/client"

const FETCH_BOARDS = gql`
    query{
        fetchBoards{
        number
        writer
        title
        contents
        }
    }
`


export default function mapBoardsPage(){

    const { data } = useQuery(FETCH_BOARDS);
    console.log(data?.fetchBoards);
    return(
        <div>
            {data?.fetchBoards.map(el => (
            <div>
                <input type="checkbox" />
                <span style={{margin: "10px"}}>{el.number}</span> 
                <span style={{margin: "10px"}}>{el.title}</span> 
                <span style={{margin: "10px"}}>{el.writer}</span>
            </div>
            ))}
        </div>
    )
}