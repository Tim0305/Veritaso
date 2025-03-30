import styled from "styled-components";

function NotFound() {
  return (
    <Message>
      <span>No se encontraron resultados</span>
    </Message>
  );
}

const Message = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-self: center;
  align-items: center;

  span {
    font-size: 25px;
    font-weight: bold;
    text-align: center;
  }
`;

export default NotFound;
