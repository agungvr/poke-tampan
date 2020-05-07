import { memo } from 'react';
import styled, { keyframes } from 'styled-components';

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);

  border-top: 2px solid #e5f0ff;
  border-right: 2px solid #e5f0ff;
  border-bottom: 2px solid #e5f0ff;
  border-left: 4px solid lightblue;
  background: transparent;
  width: 54px;
  height: 54px;
  border-radius: 50%;
`;
Spinner.whyDidYouRender = true;

export default memo(Spinner);
