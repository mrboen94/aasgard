import React from 'react';
import { HomeBody } from './Components/Pages';
import { NavBar } from './Components/Pages/';
import styled from 'styled-components';

const PageWrapper = styled.div`
  display: flex;
`;

function App() {
  return (
    <PageWrapper>
      <NavBar />
      <HomeBody />
    </PageWrapper>
  );
}

export default App;
