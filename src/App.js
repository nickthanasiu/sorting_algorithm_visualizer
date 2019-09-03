import React, { useContext } from 'react';
import styled from 'styled-components';

// Components
import ContextWrapper from './components/ContextWrapper';
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
      <ContextWrapper>
        <Layout>
          <Toolbar />
          <Main />
        </Layout>
      </ContextWrapper>
    </div>
  );
}

export default App;
