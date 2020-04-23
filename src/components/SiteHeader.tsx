import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Dispatch } from 'redux';
import { State } from '../store/types';
import styled from 'styled-components';


interface SiteHeaderProps extends ConnectedProps<typeof connector> {
}


function SiteHeader({ isHomePage }: SiteHeaderProps) {
  return (
    <Header className={isHomePage ? 'home' : ''}>
      <span>Chris'</span>
      Movie Collection
    </Header>
  );
}

const Header = styled.h1`
  transition: font-size;
  transition-duration: 0.4s;
  color: white;
  
  &.home {
    font-size: 4rem;
  }
  span {
    padding: 0.2em;
    background-color: red;
    border-radius: 0.2em;
    margin-right: 0.2em;
  }
`;

function mapStateToProps(state: State) {
  return {
    isHomePage: state.router.location.pathname === '/'
  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {};
}

const connector = connect(mapStateToProps, mapDispatchToProps);


export default connector(SiteHeader);
export { SiteHeader };
