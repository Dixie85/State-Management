import "./TodoList.css";
import TodoCard from "../TodoCard/TodoCard";

const TodoList = ({ todos }) => {
  return (
    <section id="todoList" className="todoList">
      {todos.map((todo, i) => (
        <TodoCard key={i} todo={todo} />
      ))}
    </section>
  );
};

export default TodoList;
