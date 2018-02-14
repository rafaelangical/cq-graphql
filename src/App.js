import React, { Component } from 'react';
import './App.css';
import { ApolloProvider } from 'react-apollo'
import apolloClient from './services/apollo'
import TodoList from './componentes/TodoList'

class App extends Component {
  render() {
    return (
      <ApolloProvider client={apolloClient}>
        <TodoList />
      </ApolloProvider>
    );
  }
}

export default App;
