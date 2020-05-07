import React from 'react';
import { Container, Menu, Icon } from './style';

const Sidebar = () => {
  return (
    <Container>
      <Menu>
        <Icon
          alt="pokemon-tampan"
          src={require('@tampan/img/ic_pokedex.png')}
        />
      </Menu>
    </Container>
  );
};
Sidebar.whyDidYouRender = true;

export default Sidebar;
