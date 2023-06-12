import styled from '@emotion/styled'

export const Wrapper = styled.div`
    width: 1200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 100px;
    padding: 80px 100px 102px;
    box-shadow: 0px 0px 10px gray;
`;
export const Label = styled.div`
    padding-bottom: 16px;
    font-size: 16px;
    font-weight: 500;
`;

export const InputWrapper = styled.div`
    padding-top: 40px;
`;

export const Title = styled.h1`
    font-family: Arial, Helvetica, sans-serif;
    font-size: 34px;
    font-weight: bold;
`;

export const WriterWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-top: 40px;
`;

export const Writer = styled.input`
    width: 486px;
    height: 52px;
    padding-left: 16px;
    border: 1px solid #bdbdbd;
`;

export const Password = styled.input`
    width: 486px;
    height: 52px;
    padding-left: 16px;
    border: 1px solid #bdbdbd;
`;

export const Subject = styled.input`
    width: 996px;
    height: 52px;
    padding-left: 16px;
    border: 1px solid #bdbdbd;
`;

export const Contents = styled.textarea`
    width: 996px;
    height: 480px;
    padding: 14px 14px 14px 16px;
    border: 1px solid #bdbdbd;
    resize: none;
`;

export const ZipCodeWrapper = styled.div`
    display: flex;
    flex-direction: row;
`;

export const ZipCode = styled.input`
    width: 77px;
    height: 52px;
    padding-left: 16px;
    border: 1px solid #bdbdbd;
`;

export const SearchButton = styled.button`
    width: 124px;
    height: 52px;
    margin-left: 16px;
    background-color: black;
    cursor: pointer;
    color: white;
`;

export const Address = styled.input`
    width: 996px;
    height: 52px;
    margin-top: 16px;
    padding-left: 16px;
    border: 1px solid #bdbdbd;
`;

export const Youtube = styled.input`
    width: 996px;
    height: 52px;
    padding-left: 16px;
    border: 1px solid #bdbdbd;
`;

export const ImageWrapper = styled.div`
    width: 996px;
    padding-top: 40px;
`

export const UploadButton = styled.button`
    width: 78px;
    height: 78px;
    background-color: #bdbdbd;
    margin-right: 24px;
    outline: none;
    border: none;
    cursor: pointer;
`;

export const OptionWrapper = styled.div`
    width: 996px;
    padding-top: 40px;
`;

export const RadioButton = styled.input`
    cursor: pointer;
`;

export const RadioLabel = styled.label`
    margin-left: 8px;
    margin-right: 20px;
    font-weight: 500;
    cursor: pointer;
`;

export const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-top: 80px;
`;

export const SubmitButton = styled.button`
    width: 172px;
    height: 52px;
    background-color: #0066FF;
    border: none;
    font-size: 16px;
    font-weight: 500;
    color: #fff;
    cursor: pointer;
`;

export const CancelButton = styled.button`
    width: 172px;
    height: 52px;
    background-color: tomato;
    border: none;
    font-size: 16px;
    font-weight: 500;
    margin-left: 12px;
    color: #fff;
    cursor: pointer;
`;

export const Error = styled.div`
    padding-top: 10px;
    color: tomato;
    font-size: 14px;
`;