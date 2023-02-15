// Write your code here
const TodoItem = props => {
  const {userDetails, deleteTodo} = props
  const {id, title} = userDetails

  const onDelete = () => {
    deleteTodo(id)
  }

  return (
    <li>
      <p>{title}</p>
      <button type="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}
export default TodoItem
