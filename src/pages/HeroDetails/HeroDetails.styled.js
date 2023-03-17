import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 332px;
  padding: 23px 10px 85px;
  margin: 0 auto;

  @media screen and (min-width: 1050px) {
    width: 1050px;
    padding: 21px 15px 142px;
  }
`;

export const BackLink = styled(Link)`
  display: flex;
  align-items: center;
`;

export const BackText = styled.p`
  margin-left: 12px;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  color: #000000;
`;

export const Wrap = styled.div`
  width: 312px;
  margin: 77px auto 0;

  @media screen and (min-width: 1050px) {
    width: 413px;
    margin: 31px auto 0;
  }
`;

export const Image = styled.img`
  width: 150px;
  height: 148px;
  border: 5px solid #f2f2f7;
  border-radius: 50%;
  margin: 0 auto 34px;

  @media screen and (min-width: 1050px) {
    width: 300px;
    height: 300px;
    margin-bottom: 16px;
  }
`;

export const Name = styled.p`
  font-size: 32px;
  line-height: 38px;
  color: #081f32;
  text-align: center;
  margin-bottom: 35px;

  @media screen and (min-width: 1050px) {
    font-size: 48px;
    line-height: 56px;
    margin-bottom: 48px;
  }
`;

export const Info = styled.p`
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.15px;
  color: #8e8e93;
  text-align: center;
  margin-bottom: 16px;

  @media screen and (min-width: 1050px) {
    margin-bottom: 48px;
  }
`;

export const InfoList = styled.ul`
  margin: 0 auto;
  width: 298px;

  @media screen and (min-width: 1050px) {
    width: 395px;
  }
`;

export const InfoItem = styled.li`
  width: 298px;
  height: 64px;
  padding: 9px 0;
  border-bottom: 1px solid #6e798c;

  @media screen and (min-width: 1050px) {
    width: 395px;
  }
`;

export const InfoTitle = styled.p`
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.15px;
  color: #081f32;
`;

export const InfoText = styled.p`
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.25px;
  color: #6e798c;
`;
