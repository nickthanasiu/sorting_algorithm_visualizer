import React, { useContext } from 'react';
import styled from 'styled-components';

// Components
import DarkModeWrapper from './components/DarkModeWrapper';
import DropdownWrapper from './components/DropdownWrapper';
import Layout from './components/Layout';
import Toolbar from './components/Toolbar';
import Main from './components/Main';

function App() {

  return (
    <div className="App" style={{
      height: '100vh',
      maxHeight: '100vh',
      maxWidth: '100vw',
      overflow: 'hidden',
    }}>
      <DarkModeWrapper>
        <DropdownWrapper>
          <Layout>
            <Toolbar />
            <Main />
          </Layout>
        </DropdownWrapper>
      </DarkModeWrapper>
    </div>
  );
}

export default App;
