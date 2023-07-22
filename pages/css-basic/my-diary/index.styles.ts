import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: lightgray;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
`;

export const Section = styled.section`
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  width: 80%;
  padding: 25px;
  background-color: #fff;
`;

export const Title = styled.h2`
  width: 100%;
  background-color: orange;
  text-align: center;
  color: #fff;
  padding: 5px;
  margin-bottom: 10px;
`;

export const Article = styled.article``;

export const SubTitle = styled.p``;
export const PointTitle = styled.span`
  display: inline-block;
  color: orange;
  border-bottom: 1px solid orange;
  width: auto;
  margin-top: 10px;
`;
export const Line = styled.div`
  width: 100%;
  border: 1px dotted #000;
  margin: 20px 0;
`;

export const ContentWrapper = styled.article`
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding: 15px;
`;

export const ContentTitle = styled.h1`
  background-color: #f3f3f3;
  padding: 5px;
  margin-bottom: 10px;
`;

export const Content = styled.p``;
export const ContentDateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: center;
  color: rgba(0, 0, 0, 0.5);
  font-size: 12px;
`;
export const ContentDateTop = styled.p``;
export const ContentDateBottom = styled.p``;
export const ContentPointSpan = styled.span`
  color: red;
`;
