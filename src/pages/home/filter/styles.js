import styled from 'styled-components';

const Container = styled.div`
  width: 70%;
  display: flex;
  flex-wrap: wrap;
  padding: 0px 8px;
  margin: 0px 0px 12px;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Badge = styled.div`
  border: 1px solid #3c71b5;
  padding: 4px 16px;
  cursor: pointer;
  width: fit-content;
  border-radius: 24px;
  font-size: 10px;
  color: ${({ isActive }) => (isActive ? 'white' : '#3c71b5')};
  margin: 0px 8px 8px 0px;
  background: ${({ isActive }) => (isActive ? '#3c71b5' : 'white')};
`;

export { Container, Badge };
