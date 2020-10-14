import React from 'react';
import { ApolloProvider } from '@apollo/client';
import client from '../config/graph_ql';
import Books from './Books';

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <h2>My first Apollo app 🚀</h2>
        <Books />
      </div>
    </ApolloProvider>
  );
}

export default App;
