import './TodoCard.css'
import Button from "../Button/Button";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodo } from '../../redux/todoSlice';


const TodoCard = ({todo}) => {
  const dispatch = useDispatch();

  const onDeleteTodo = (e, id) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(deleteTodo(id))
};

    return (
      <li 
      className={`todoCard todo--toggle-completed ${todo.done ? 'todo--completed' : ''}`}
      onClick={() => dispatch(toggleTodo(todo.id))}
      >
        <span >
          {todo.todoText}
        </span>
        {
          todo.done && 
          <Button 
          text={'🗑'} 
          className={'todo__button--remove'} 
          onButtonClick={(e) => onDeleteTodo(e, todo.id)}
          />
        }
      </li> 
    )
};

export default TodoCard