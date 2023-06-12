import { gql } from "@apollo/client";

export const myGraphqlSetting = gql`
    mutation createBoard($writer: String, $title: String, $contents: String){ 

        createBoard(writer: $writer, title: $title, contents: $contents){
        _id
        number
        message
        }
    }
`;

export const updateBoard = gql`
    mutation updateBoard($number: Int, $writer: String, $title: String, $contents: String){ 

        updateBoard(number: $number, writer: $writer, title: $title, contents: $contents){
            _id
            number
            message
        }
    }
`;