import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GetAllPokemons } from '@tampan/graph-query/pokemon.gql';
import PokemonList from './pokemon-list';
import { Container } from './style';

const HomePage = () => {
  const { loading, data } = useQuery(GetAllPokemons, {
    variables: {
      first: 20,
      name: '',
    },
  });
  const pokemons = data?.pokemons || [];

  return (
    <Container>
      <PokemonList loading={loading} data={pokemons} />
    </Container>
  );
};
HomePage.whyDidYouRender = true;

export default HomePage;
