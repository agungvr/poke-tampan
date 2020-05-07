import styled from 'styled-components';

const Card = styled.div`
  cursor: pointer;
  width: 100%;
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 8px;
  padding: 16px;
  font-size: 16px;
  position: relative;
  min-height: 150px;
  overflow: hidden;
  box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.16);
`;

Card.Title = styled.span`
  font-size: medium;
  font-weight: 600;
  margin: 0px 0px 12px;
`;

Card.Label = styled.div`
  background: #3c71b5;
  border-radius: 20px;
  padding: 4px 16px;
  width: fit-content;
  font-size: x-small;
  color: white;

  margin: 0px 0px 8px;
`;

Card.Image = styled.img`
  width: auto;
  height: 120px;
  position: absolute;
  bottom: -12px;
  right: 12px;
`;

Card.Background = styled.div`
  background: #006eff1c;
  border-radius: 100%;
  height: 131px;
  width: 172px;
  position: absolute;
  top: -63px;
  left: -46px;
`;

Card.Info = styled.div`
  font-size: 12px;
  position: absolute;
  bottom: 0;
  left: 0;
  background: #6a7c95;
  padding: 4px 20px;
  color: white;
  min-width: 110px;
  border-top-right-radius: 32px;
`;

export { Card };
