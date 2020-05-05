import React, { useState } from 'react';
import styled from 'styled-components';

const Aside = styled.aside<{ open?: boolean }>`
  background-color: ${(props) => props.theme.colors.wildSand};
  border: 1px solid ${(props) => props.theme.colors.gallery};
  flex-basis: 60px;
  transition: flex-basis 225ms cubic-bezier(0.4, 0, 0.6, 1) 0ms;

  ${props => props.open && `
    flex-basis: 50%;
  `}

  display: flex:
  flex-direction: column;

  @media (min-width: ${(props) => props.theme.breakpoints.medium}) {
    flex-basis: 500px;
  }
`;

const OutputArea = styled.main`
  background-color: ${(props) => props.theme.colors.whiteish};
  border: 1px solid ${(props) => props.theme.colors.gallery};
  flex-grow: 1;
  margin-top: 56px;

  @media (min-width: ${(props) => props.theme.breakpoints.medium}) {
    margin-top: 86px;
  }
`;

const Page = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  min-height: 600px;

  @media (min-width: ${(props) => props.theme.breakpoints.large}) {
    flex-direction: row;
  }
`;

const AsideHeader = styled.header``;

export const Editor = () => {
  const [drawerOpen, setDrawerState] = useState<boolean>(false);
  return (
    <Page>
      <OutputArea>out</OutputArea>
      <Aside open={drawerOpen}>
        <AsideHeader>
          header
          <button onClick={() => setDrawerState(open => !open)}>{drawerOpen ? 'close' : 'open' } </button>
        </AsideHeader>
      </Aside>
    </Page>
  );
};
