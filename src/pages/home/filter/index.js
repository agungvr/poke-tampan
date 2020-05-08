import React, { useState, memo } from 'react';
import { Container, Badge } from './styles';

const Filter = ({ data, onChange }) => {
  const [isActive, setIsActive] = useState(null);

  const _onChange = (val) => () => {
    const selected = val === isActive ? null : val;
    setIsActive(selected);
    onChange(selected);
  };

  return (
    <Container>
      {data.map((type) => (
        <Badge
          isActive={isActive === type}
          onClick={_onChange(type)}
          key={type}
        >
          {type}
        </Badge>
      ))}
    </Container>
  );
};
Filter.whyDidYouRender = true;

export default memo(Filter, (prev, next) => {
  if (JSON.stringify(prev) === JSON.stringify(next)) {
    return true;
  }
  return false;
});
