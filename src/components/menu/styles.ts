import styled from "styled-components";

interface IProps {
  openMenu: boolean;
}

export const Container = styled.div<IProps>`
  width: ${({ openMenu }) => openMenu? '250px' : '100px'};
  height: 100vh;
  box-sizing: border-box;
  padding: 65px 10px 10px 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow-y: auto;
`;

export const MenuItem = styled.div<IProps>`
  width: ${({ openMenu }) => openMenu? '120px' : '10px'};
  min-height: 40px;
  border-radius: 10px;
  cursor: pointer;
  padding: 5px 5px;
  box-sizing: border-box;
  display: flex;
  flex-direction: ${({ openMenu }) => openMenu? 'row' : 'column'};
  align-items: center;
  justify-content: ${({ openMenu }) => openMenu? 'none' : 'center'};

  span {
    font-weight: ${({ openMenu }) => openMenu? '600' : '400'};
    margin-left: ${({ openMenu }) => openMenu? '10px' : 'none'};
    font-size: ${({ openMenu }) => openMenu? '14px' : '12px'};
  }
  

    :hover {
      background-color: #f2f2f2;
    }
`;

export const SubItem = styled.div<IProps>`
  width: 120px;
  min-height: 40px;
  border-radius: 10px;
  padding: 5px 5px;
  box-sizing: border-box;
  display: ${({ openMenu }) => openMenu? 'block' : 'none'}};
  flex-direction: row;
  align-items: center;
  justify-content: center;
  

    :hover {
      background-color: #f2f2f2;
    }
`;

export const ButtonIcon = styled.img`
  width: 25px;
`;

export const Line = styled.hr<IProps>`
  border-top: 1px solid #333;
  width: 100%;
  height: 1px;
  display: ${({ openMenu }) => openMenu? 'block' : 'none'}};
`;
