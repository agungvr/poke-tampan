import React, { memo } from 'react';
import { Row, Column } from '@tampan/components/grid';
import Spinner from '@tampan/components/spinner';
import PokemonCard from '../pokemon-card';
import PokemonListLoading from './loading';

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

        {isFetchingMore && (
          <Column
            display="flex"
            justify="center"
            align="center"
            padding="16px"
          >
            <Spinner />
          </Column>
        )}
      </Row>
    );
  }
);
PokemonList.whyDidYouRender = true;

export default PokemonList;
