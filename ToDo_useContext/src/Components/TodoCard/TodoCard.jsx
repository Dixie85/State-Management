import "./TodoCard.css";
import Button from "../Button/Button";

const TodoCard = ({ todo, onToggleTodo, onDeleteTodo }) => {
  return (
    <li
      className={`todoCard todo--toggle-completed ${
        todo.done ? "todo--completed" : ""
      }`}
      onClick={() => onToggleTodo(todo.id)}
    >
      <span>{todo.todoText}</span>
      {todo.done && (
        <Button
          text={"🗑"}
          className={"todo__button--remove"}
          onButtonClick={(e) => onDeleteTodo(e, todo.id)}
        />
      )}
    </li>
  );
};

export default TodoCard;
