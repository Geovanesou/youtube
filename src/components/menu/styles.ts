import styled from "styled-components";

interface IProps {
  openMenu: boolean;
}

export const Container = styled.div<IProps>`
  width: ${({ openMenu }) => openMenu ? '250px' : '100px'};
  height: 100vh;
  box-sizing: border-box;
  padding: 65px 10px 10px 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow-y: auto;
`;

export const MenuItem = styled.div`
  width: 90%;
  min-height: 40px;
  border-radius: 10px;
  cursor: pointer;

    :hover {
      background-color: #f2f2f2;
    }
`;