import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GetAllPokemons } from '@tampan/graph-query/pokemon.gql';

const HomePage = () => {
  const { loading, error, data } = useQuery(GetAllPokemons, {
    variables: {
      first: 10,
      name: '',
    },
  });

  return (
    <div>
      <span>Home Page</span>
    </div>
  );
};
HomePage.whyDidYouRender = true;

export default HomePage;
