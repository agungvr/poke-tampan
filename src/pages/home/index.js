import React, { useState, useEffect, useCallback } from 'react';
import { useLazyQuery } from '@apollo/react-hooks';
import { GetAllPokemons } from '@tampan/graph-query/pokemon.gql';
import useInfiniteScroll from '@tampan/hooks/useInfiniteScroll';
import PokemonList from './pokemon-list';
import { Container } from './style';

const HomePage = () => {
  const [query, setQuery] = useState(20);

  const [
    getListPokemon,
    { loading, error, data, fetchMore },
  ] = useLazyQuery(GetAllPokemons);

  const [isFetchingMore, setIsFetchingMore] = useInfiniteScroll();

  useEffect(() => {
    if (isFetchingMore && query <= 150) {
      fetchMore({
        variables: {
          first: query + 20,
        },
        updateQuery: (prev, { fetchMoreResult }) => {
          if (!fetchMoreResult) return prev;
          setIsFetchingMore(false);
          setQuery((prevState) => prevState + 20);
          return fetchMoreResult;
        },
      });
    }
    if (query > 150) {
      setIsFetchingMore(false);
    }
  }, [isFetchingMore, setIsFetchingMore, fetchMore, query]);

  useEffect(() => {
    getListPokemon({
      variables: {
        first: query,
      },
    });
  }, []);

  const pokemons = data?.pokemons || [];

  return (
    <Container>
      <PokemonList
        loading={loading}
        error={error}
        data={pokemons}
        isFetchingMore={isFetchingMore}
      />
    </Container>
  );
};
HomePage.whyDidYouRender = true;

export default HomePage;
