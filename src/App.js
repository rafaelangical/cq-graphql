import React, { Component } from 'react';
import './App.css';
import { ApolloProvider } from 'react-apollo'
import apolloClient from './services/apollo'
import ApolloClient from 'apollo-client';

class App extends Component {
  render() {
    return (
      <ApolloProvider client={ApolloClient}>
        <div className="App">
          <h1>Hello Word</h1>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
