import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 300px;
  margin: 0 auto;
`;

export const Currentpage = styled.p`
  font-size: 28px;
`;

export const Button = styled.button`
  background-color: transparent;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  text-align: center;
  padding: 0;
  width: 45px;
  height: 45px;

  :hover:not(:disabled) {
    background-color: rgb(195, 251, 154);
  }
`;
