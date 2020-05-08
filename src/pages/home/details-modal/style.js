import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  text-align: center;
  font-size: large;
  font-weight: 600;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  letter-spacing: 0.3px;
`;

const Image = styled.img`
  width: ${({ width }) => width || '150px'};
  height: ${({ height }) => height || '150px'};
  padding: 8px;
  border-radius: 100%;
  border: 0px solid #2a4e7e;
  box-shadow: 0 1px 8px 0 rgba(9, 36, 66, 0.3);
  object-fit: cover;
  margin: ${({ margin }) => margin || '0px 0px 4px'};
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const Title = styled.h2`
  font-size: xx-large;
`;

const SubTitle = styled.h3``;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Box = styled.div`
  display: flex;
  flex-direction: row;
`;

const LabelContainer = styled.div`
  display: flex;
`;

const Label = styled.div`
  background: #3c71b5;
  border-radius: 20px;
  padding: 4px 16px;
  width: fit-content;
  font-size: x-small;
  color: white;
  margin: 0px 4px 24px;
`;

const Text = styled.h5`
  margin: ${({ margin }) => margin || null};
`;

export {
  Container,
  Content,
  Image,
  Title,
  SubTitle,
  Text,
  LabelContainer,
  Label,
  ImageContainer,
  ContentContainer,
  Box,
};
