import styled, { css } from "styled-components";

const Box = styled.div`
  /* props로 넣어 준 값을 직접 전달해 줄 수 있음 */
  background: ${(props) => props.color || "blue"};
  padding: 1rem;
  display: flex;

  /* 기본 가로 크기   */
  margin: 0 auto;
  @media (min-width: 768px) {
    width: 768px;
  }
  @media (min-width: 1024px) {
    width: 1024px;
  }
`;

const Button = styled.button`
  background: white;
  color: black;
  border-radius: 4px;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  font-size: 1rem;
  font-weight: 600;

  &:hover {
    background: rgba(255, 255, 255, 0.9);
  }

  /* inverted 값이 true일 때 특정 스타일을 부여해 준다 */
  ${(props) =>
    props.inverted &&
    css`
      background: none;
      border: 2px solid white;
      color: white;
      &:hover {
        background: white;
        color: black;
      }
    `};
  & + button {
    margin-left: 1rem;
  }
`;

const StyledComponent = () => {
  return (
    <Box color="black">
      <Button>안녕하세요</Button>
      <Button inverted={true}>테두리만</Button>
    </Box>
  );
};

export default StyledComponent;
