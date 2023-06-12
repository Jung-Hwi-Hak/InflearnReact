import { useMutation, gql } from "@apollo/client";
import { useState } from "react";


const CREATE_PRODUCT = gql`
    mutation createProduct($seller: String, $createProductInput: CreateProductInput!){ 
        createProduct(seller: $seller, createProductInput: $createProductInput){
        _id
        number
        message
        }
    }
`;


export default function GraphqlMutationArgsPage(){

    const [createProduct] = useMutation(CREATE_PRODUCT);

    /* useState 영역 */
    const [seller, setSeller] = useState("");
    const [title, setTitle] = useState("");
    const [contents, setContents] = useState("");

    /* 함수 영역 */

    // 등록 함수
    const onClickSubmit = async ()=>{
        const result = await createProduct({
            // $ === variables
            variables: {
                seller: "훈이",
                createProductInput: {
                    name: "마우스",
                    detail: "정말 좋은 마우스",
                    price: 3000
                },
            }
        });
        console.log(result);
    }

    // 작성자 함수
    const onChangeWriter = (e)=> {
        setWriter(e.target.value);
    }

    // 제목 함수
    const onChangeTitle = (e)=>{
        setTitle(e.target.value);
    }

    // 본문 함수
    const onChangeContents = (e)=>{
        setContents(e.target.value);
    }

    return(
        <div>
            <div>
                작성자: <input type="text" onChange={onChangeWriter}/>
            </div>
            <div>
                제목: <input type="text" onChange={onChangeTitle}/>
            </div>
            <div>
                본문: <input type="text" onChange={onChangeContents}/>
            </div>
            <button onClick={onClickSubmit}>GRAPHQL-API 요청</button>
        </div>
    );
}