import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Link = styled(NavLink)`
  font-weight: 700;
  color: inherit;
  text-decoration: none;
  text-transform: none;
  font-size: 16px;
  &.active {
    color: orange;
  }
`;
