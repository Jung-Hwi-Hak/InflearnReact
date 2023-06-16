import Example from "../../../src/components-example/units/14-props-children-example";

export default function PropsChildrenPage(): JSX.Element {
  return (
    <div>
      <div>+++++ 빨간색 파란색 초록색 +++++</div>
      <Example school="짱구유치원">
        <div>
          <input type="text" />
          <div>저는 철수입니다.</div>
          <button>클릭해주세요.</button>
        </div>
      </Example>
      <div>+++++ 빨간색 파란색 초록색 +++++</div>
    </div>
  );
}
