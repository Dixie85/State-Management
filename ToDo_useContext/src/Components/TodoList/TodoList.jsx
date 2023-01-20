import './TodoList.css';
import TodoCard from "../TodoCard/TodoCard";

const TodoList = ({todos, onToggleTodo, onDeleteTodo}) => {
    return (
        <section id="todoList" className="todoList">
            {todos.map((todo, i) => 
            <TodoCard 
            key={i} 
            todo={todo} 
            onToggleTodo={onToggleTodo}
            onDeleteTodo={onDeleteTodo}
            />)}
        </section>
    )
};

export default TodoList