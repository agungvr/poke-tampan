import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.4;
  }
  100% {
    opacity: 1;
  }
`;

const Skeleton = styled.span`
  margin: ${({ margin }) => margin || null};
  padding: ${({ padding }) => padding || null};
  height: ${({ height }) => height || 'auto'};
  width: ${({ width }) => width || '300px'};
  display: ${({ display }) => display || 'flex'};
  background-color: #006eff1c;
  transform-origin: 0 60%;
  transform: ${({ transform }) => transform || 'scale(1, 1)'};
  border-radius: ${({ radius }) => radius || '4px'};
  animation: ${pulse} 1.5s ease-in-out 0.2s infinite;
  &:empty:before {
    content: '\\00a0';
  }
`;

Skeleton.whyDidYouRender = true;

export default Skeleton;
