import React from 'react';
import * as C from './HeaderStyles'

export  const Header = () =>{
  return (
    <C.Header>
      <C.Logo>Party Time!</C.Logo>
      <C.Navigation>
        <C.NavItem><C.ListItem href='#'>Minhas festas</C.ListItem></C.NavItem>
        <C.NavItem><C.ListItemCreate href='#'>Criar festas</C.ListItemCreate></C.NavItem>
      </C.Navigation>
    </C.Header>
  );
}