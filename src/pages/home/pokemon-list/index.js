import React, { memo } from 'react';
import { Row, Column } from '@tampan/components/grid';
import Spinner from '@tampan/components/spinner';
import PokemonCard from '../pokemon-card';
import PokemonListLoading from './loading';

const LoadMoreLoading = memo(() => {
  return (
    <Column
      display="flex"
      justify="center"
      align="center"
      padding="16px"
    >
      <Spinner />
    </Column>
  );
});

const PokemonList = memo(
  ({ loading, data, error, isFetchingMore }) => {
    if (loading) return <PokemonListLoading />;

    if (error) return 'Something went wrong!';

    return (
      <Row>
        {data.map((pokemon) => (
          <Column
            key={pokemon.id}
            lg="3"
            md="4"
            sm="12"
            padding="8px"
          >
            <PokemonCard data={pokemon} />
          </Column>
        ))}

        {isFetchingMore && <LoadMoreLoading />}
      </Row>
    );
  },
  (prev, next) => {
    if (JSON.stringify(prev) === JSON.stringify(next)) {
      return true;
    }
    return false;
  }
);
PokemonList.whyDidYouRender = true;

export default PokemonList;
