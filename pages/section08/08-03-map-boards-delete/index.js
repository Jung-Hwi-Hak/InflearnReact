import { gql, useMutation, useQuery } from "@apollo/client"

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
const FETCH_DELETE = gql`
    mutation deleteBoard($number: Int){
        deleteBoard(number: $number){
            message,
        }
    }
`


export default function mapBoardsDeletePage(){

    const [deleteBoard] = useMutation(FETCH_DELETE);
    const { data } = useQuery(FETCH_BOARDS);
    console.log(data?.fetchBoards);

    const onClickDelete = (e)=>{
        
        deleteBoard({
            variables:{
                number : Number(e.target.id)
            },
            refetchQueries: [{query: FETCH_BOARDS}]
        })
    }
    
    
    
    return(
        <div>
            {data?.fetchBoards.map(el => (
            <div key={el.number}>
                <input type="checkbox" />
                <span style={{margin: "10px"}}>{el.number}</span> 
                <span style={{margin: "10px"}}>{el.title}</span> 
                <span style={{margin: "10px"}}>{el.writer}</span>
                <span>
                    <button id={el.number} onClick={onClickDelete}>삭제</button>
                </span>
            </div>
            ))}
        </div>
    )
}