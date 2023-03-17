import styled from 'styled-components';

export const Container = styled.div`
  width: 332px;
  padding: 130px 10px 42px;
  margin: 0 auto;

  @media screen and (min-width: 1050px) {
    width: 1050px;
    padding: 140px 15px 188px;
  }
`;

export const Button = styled.button`
  width: 200px;
  height: 60px;
  display: block;
  margin: 0 auto;
  background-color: #3abea7;
  box-shadow: 0px 0px 9px 7px rgba(195, 251, 154, 0.89);
  border-radius: 10px;
  border: none;
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;

  transition: color 250ms linear;

  :hover,
  :focus {
    color: white;
  }

  @media screen and (min-width: 1050px) {
    margin-top: 60px;
  }
`;
