import React from 'react';
import styled from 'styled-components';
import { ReactComponent as SearchIcon } from './icons/search.svg';


export type IconType = keyof typeof icons;

interface IconProps {
  image: IconType;
}

const icons = {
  searchIcon: SearchIcon
};

function Icon({ image }: IconProps) {
  const SvgIcon = icons[image];
  return (
    <IconWrapper>
      <SvgIcon/>
    </IconWrapper>
  );
}

const IconWrapper = styled.span`
  padding: 0.3em;
  svg {
    fill: white;
    width: 1em;
    height: 1em;
    position: relative;
    top: 0.15em;
  }
`;


export default Icon;
