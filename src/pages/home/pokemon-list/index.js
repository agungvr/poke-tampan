import React from 'react';
import { Row, Column } from '../../../components/grid';
import PokemonCard from '../pokemon-card';
import Skeleton from '../../../components/skeleton';

const PokemonList = ({ loading, data }) => {
  return (
    <Row>
      {loading
        ? [...new Array(20)].map((x) => {
            return (
              <Column key={x} lg="3" md="4" sm="12" padding="8px">
                <Skeleton width="100%" height="166px" />
              </Column>
            );
          })
        : data.map((pokemon) => {
            return (
              <Column
                key={pokemon.id}
                lg="3"
                md="4"
                sm="12"
                padding="8px"
              >
                <PokemonCard data={pokemon} />
              </Column>
            );
          })}
    </Row>
  );
};
PokemonList.whyDidYouRender = true;

export default PokemonList;
