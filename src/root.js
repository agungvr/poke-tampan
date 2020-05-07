import React, { useEffect } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import Pages from '@tampan/pages';
import { BASE_URL } from '@tampan/utils/constants';
import GlobalStyles from './assets/styles';

const client = new ApolloClient({
  uri: BASE_URL,
});

function Root() {
  useEffect(() => {
    const element = document.getElementById('logo-center');
    element.remove();
  }, []);
  return (
    <ApolloProvider client={client}>
      <Pages />
      <GlobalStyles />
    </ApolloProvider>
  );
}
Root.whyDidYouRender = true;

export default Root;
