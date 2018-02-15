import React,{ Component, Fragment } from 'react'
import { graphql, compose } from 'react-apollo'
import gql from 'graphql-tag'

class TodoList extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      newTodoText: ''
    }

    this.renderTodoList.bind(this)
  }
  renderTodoList = () => (
    <ul>
      { this.props.todos.allTodoes.map(todo => (
        <li key={todo.id}>{ todo.text}</li>  
      )) }
    </ul>
  );

  render(){

    const { todos } = this.props;

    return(
      <Fragment>
      { todos.loading 
        ? <p>Carregando...</p>
        : this.renderTodoList() }
        <input type="text" 
        value={this.state.newTodoText}
        onChange={e => this.setState({newTodoText: e.target.value})}
        />
        <input type="submit"
        value="Criar"
        onClick={this.addTodo}/>
        </Fragment>
      );
  }
}

const TodosQuery = gql`
  query {
    allTodoes{
      id
      text
    }
  }
`;

export default graphql(TodosQuery, { name: 'todos' })(TodoList);