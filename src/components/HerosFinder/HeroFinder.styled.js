import styled from 'styled-components';

export const Finder = styled.input`
  width: 312px;
  height: 56px;
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  padding: 16px 16px 16px 46px;

  font-size: 16px;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.5);

  ::placeholder {
    margin-left: 28px;
  }

  @media screen and (min-width: 1050px) {
    width: 1020px;
  }
`;

export const Wrap = styled.div`
  position: relative;

  svg {
    position: absolute;
    bottom: 50%;
    top: 20px;
    left: 20px;
  }

  margin-bottom: 32px;

  @media screen and (min-width: 1050px) {
    margin-bottom: 61px;
  }
`;
