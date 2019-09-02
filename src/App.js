import React, { useContext } from 'react';
import styled from 'styled-components';

// Components
import ContextWrapper from './components/ContextWrapper';
import Layout from './components/Layout';
import Toolbar from './components/Toolbar';

function App() {

  return (
    <div className="App" style={{ height: '100vh' }}>
      <ContextWrapper>
        <Layout>
          My App
        </Layout>
      </ContextWrapper>
    </div>
  );
}

export default App;
