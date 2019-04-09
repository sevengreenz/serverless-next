import styled from './';

export const HeaderNav = styled('nav')`
  a::after {
    content: '\00a0|\00a0';
    text-decoration: none;
    display: inline-block;
  }
`;
