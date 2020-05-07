import React, {
  useState,
  useEffect,
  useCallback,
  useMemo,
} from 'react';
import { useLazyQuery } from '@apollo/react-hooks';
import { GetAllPokemons } from '@tampan/graph-query/pokemon.gql';
import useInfiniteScroll from '@tampan/hooks/useInfiniteScroll';
import PokemonList from './pokemon-list';
import Filter from './filter';
import { Container } from './style';

const HomePage = () => {
  const [query, setQuery] = useState(20);
  const [isFilter, setIsFilter] = useState(null);
  const [pokemonByTypes, setPokemonByTypes] = useState(null);
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
    getListPokemon({ variables: { first: query } });
  }, []);

  useEffect(() => {
    if (data) {
      const newTypes = [];
      const newData = {};
      data.pokemons.map((pokemon) => {
        pokemon.types.map((type) => {
          if (!newTypes.includes(type)) {
            newTypes.push(type);
            newData[type] = [pokemon];
          } else {
            newData[type].push(pokemon);
          }
        });
      });
      setPokemonByTypes(newData);
    }
  }, [data]);

  const pokemons = useMemo(() => {
    if (data?.pokemons) {
      if (isFilter) return pokemonByTypes[isFilter];
      return data?.pokemons;
    }
    return [];
  }, [data, isFilter, pokemonByTypes]);

  const types = useMemo(
    () => (pokemonByTypes ? Object.keys(pokemonByTypes) : null),
    [pokemonByTypes]
  );

  const _onChangeFilter = useCallback((selected) => {
    setIsFilter(selected);
  }, []);

  return (
    <Container>
      {pokemonByTypes && (
        <Filter data={types} onChange={_onChangeFilter} />
      )}
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
