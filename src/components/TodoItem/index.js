// Write your code here
const TodoItem = props => {
  const {userDetails} = props
  const {title} = userDetails

  return (
    <li>
      <p>{title}</p>
    </li>
  )
}
export default TodoItem
