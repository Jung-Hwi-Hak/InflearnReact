import styled from "@emotion/styled";

export const Wrapper = styled.div`
    width: 1200px;
    margin: 100px;
`;

export const CardWrapper = styled.div`
    /* border: 1px solid black; */
    padding: 80px 102px 100px 102px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: none;
    box-shadow: 0px 0px 10px gray;
`;

export const Header = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    border-bottom: 1px solid #bdbdbd;
    padding-bottom: 20px;
`;

export const AvatarWrapper = styled.div`
    display: flex;
    flex-direction: row;
`;

export const Avatar = styled.img`
    margin-right: 10px;
`;

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const Writer = styled.div``;

export const CreateAt = styled.div``;

export const Body = styled.div`
    width: 100%;
    min-height: 800px;
`;

export const Title = styled.h1`
    padding-top: 80px;
`;

export const Contents = styled.div`
    padding-top: 40px;
    padding-bottom: 120px;
`;

export const BottomWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-top: 80px;
    margin-bottom: 94px;
`

export const Button = styled.button`
    width: 179px;
    height: 45px;
    background-color: #fff;
    border: 1px solid gray;
    margin: 0px 12px;
    cursor: pointer;
    :hover{
        background-color: tomato;
        border-color: #fff;
    }
`;

export const WriteWrapper = styled.div`
    display: flex;
    flex-direction: column;
    border-top: 1px solid #bdbdbd;
    padding-top: 45px;
`;

export const WriteHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin-bottom: 44px;
`;

export const WriteHeaderImage = styled.img`
    width: 20px;
`;

export const WriteHeaderTitle = styled.span`
    font-size: 18px;
    font-weight: 500;
    line-height: 26.64px;
    margin-left: 14px;
`;

export const WriteContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    /* align-items: center; */
    justify-content: flex-start;
`;
export const WriteContentStarWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 22px;
`
export const WriteContentStar = styled.img`
    width: 20px;
    margin-right: 2px;
`;

export const WriteContentTextarea = styled.textarea`
    width: 100%;
    padding: 20px;
    height: 108px;
    border: 1px solid #bdbdbd;
    border-bottom: 1px solid #f2f2f2;
    resize: none;
`;

export const WriteContentTextareaInfoWrapper = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 16px;
    font-weight: 500;
    color: #bdbdbd;
    line-height: 23.68px;
    border: 1px solid #bdbdbd;
    border-top: none;
    height: 52px;
    padding: 20px 14px;
    margin-bottom: 40px;
`;

export const WriteContentTextareaInfoCnt = styled.span``;

export const WriteContentButton = styled.button`
    position: absolute;
    right: 0;
    width: 91px;
    height: 52px;
    background-color: #000;
    font-size: 16px;
    font-weight: 500;
    line-height: 23.68px;
    color: #fff;
    cursor: pointer;
`;

export const WriteListWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    border-bottom: 1px solid #bdbdbd;
    padding-bottom: 20px;
`;

export const WriteListIcon = styled.img`
    width: 40px;
    border-radius: 4px;
`;

export const WriteListInfoWrapper = styled.div`
    width: 80%;
    margin-left: 16px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

export const WriteListInfoWriterWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    margin-bottom: 4px;
`

export const WriteListInfoWriter = styled.span`
    font-size: 16px;
    font-weight: 500;
    line-height: 16px;
    margin-right: 18px;
`;

export const WriteListInfoContent = styled.textarea`
    width: 100%;
    resize: none;
    border: none;
    color: #4f4f4f;
    font-size: 16px;
    font-weight: 400;
    outline: none;
    height: auto;
    margin-bottom: 40px;
`;

export const WriteListInfoDate = styled.span`
    font-size: 12px;
    font-weight: 400;
    line-height: 17.76px;
    color: #bdbdbd;
`;

export const WriteListOptionWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
`;

export const WriteListOptionEditImg = styled.img`
    width: 18px;
    margin-right: 16px;
`;
export const WriteListOptionDeleteImg = styled.img`
    width: 14px;
`;


