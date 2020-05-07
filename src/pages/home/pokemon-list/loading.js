import React, { memo } from 'react';
import Skeleton from '@tampan/components/skeleton';
import { Column } from '@tampan/components/grid';

const PokemonListLoading = memo(() => {
  return [...new Array(20)].map((_, index) => (
    <Column key={index} lg="3" md="4" sm="12" padding="8px">
      <Skeleton width="100%" height="166px" />
    </Column>
  ));
});
PokemonListLoading.whyDidYouRender = true;

export default PokemonListLoading;
