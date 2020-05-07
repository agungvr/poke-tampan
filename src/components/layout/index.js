import React from 'react';
import Sidebar from '@tampan/components/sidebar';
import { Container, ImageBackground, Logo } from './style';

const MainLayout = ({ children }) => {
  return (
    <>
      <Sidebar />
      <Container>
        <ImageBackground
          alt="pokemon-tampan"
          src={require('@tampan/img/bg_pokeball.jpeg')}
        />
        <Logo
          alt="pokemon-tampan"
          src={require('@tampan/img/logo.png')}
        />
        {children}
      </Container>
    </>
  );
};
MainLayout.whyDidYouRender = true;

export default MainLayout;
