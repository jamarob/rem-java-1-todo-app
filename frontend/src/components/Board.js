import styled from 'styled-components/macro'
import Todo from './Todo'

export default function Board({ todos, title }) {
  return (
    <Wrapper>
      <h2>{title}</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <Todo todo={todo} />
          </li>
        ))}
      </ul>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  ul {
    padding: 0;
    list-style: none;
    display: grid;
    grid-gap: 20px;
  }
`