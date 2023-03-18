import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 332px;
  padding: 23px 10px 42px;
  margin: 0 auto;

  @media screen and (min-width: 1050px) {
    width: 1050px;
    padding: 21px 15px 188px;
  }
`;

export const BackLink = styled(Link)`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const BackText = styled.p`
  margin-left: 12px;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  color: #000000;
`;

export const UserName = styled.p`
  font-size: 22px;
  margin-bottom: 55px;
`;
