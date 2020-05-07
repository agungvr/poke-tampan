import React, { memo } from 'react';
import { Card } from './style';

const PokemonCard = memo(({ data }) => {
  return (
    <Card>
      <Card.Background />
      <Card.Title>{data.name}</Card.Title>
      {data.types.map((item) => (
        <Card.Label key={item}>{item}</Card.Label>
      ))}
      <Card.Image alt="pokemon-image" src={data.image} />
      <Card.Info>{data.number}</Card.Info>
    </Card>
  );
});
PokemonCard.whyDidYouRender = true;

export default PokemonCard;
