import { useAuth } from "../../../src/components-example/commons/hooks/useAuth";

export default function CustomHooksUseAuthPage(): JSX.Element {
  // ? custom hook
  useAuth();

  return <div>프로필 페이지</div>;
}
