import styled from "@emotion/styled";
import LayoutBanner from "./banner/intex";
import LayoutFooter from "./footer/intex";
import LayoutHeader from "./header/intex";
import LayoutNavigation from "./navigation/intex";
import LayoutSidebar from "./sidebar";
import { useRouter } from "next/router";

interface ILayoutProps {
  children: JSX.Element;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 500px;
`;

const Children = styled.div`
  width: 70%;
`;

// URL에 따라 표출제어
const HIDDEN_HEADER = [
  "/section13/13-01-library-icon",
  "/section13/13-02-library-star",
];

export default function Layout(props: ILayoutProps): JSX.Element {
  const router = useRouter();
  console.log(router.asPath);
  const isHiddenHeader = HIDDEN_HEADER.includes(router.asPath);
  console.log(isHiddenHeader);
  return (
    <>
      {!isHiddenHeader && <LayoutHeader />}
      <LayoutBanner />
      <LayoutNavigation />
      <Wrapper>
        <LayoutSidebar />
        <Children>{props.children}</Children>
      </Wrapper>
      <LayoutFooter />
    </>
  );
}
