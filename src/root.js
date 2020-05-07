import React, { useEffect } from 'react';
import Pages from './pages';
import GlobalStyles from './assets/styles';

function Root() {
  useEffect(() => {
    const element = document.getElementById('logo-center');
    element.remove();
  }, []);
  return (
    <>
      <Pages />
      <GlobalStyles />
    </>
  );
}
Root.whyDidYouRender = true;

export default Root;
