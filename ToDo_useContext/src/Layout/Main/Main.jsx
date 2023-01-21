import "./Main.css";
import { useEffect, useContext } from "react";
import { v4 as uuid } from "uuid";
import InputForm from "../../Components/InputForm/InputForm";
import TodoList from "../../Components/TodoList/TodoList";
import ToggleContext from "../../Context/ToggleContext";
import TodoContext from "../../Context/TodoContext";

const Main = () => {
  const { isToggleled } = useContext(ToggleContext);
  const { todos, setTodos } = useContext(TodoContext);

  useEffect(() => {
    localStorage.setItem("todosList", JSON.stringify(todos));
  }, [todos]);

  const onAddTodo = (inputValue) => {
    const newTodo = {
      id: uuid(),
      todoText: inputValue,
      done: false,
    };
    setTodos((previousTodos) => [newTodo, ...previousTodos]);
  };

  const sortTodos = (todoToSort) => {
    const completed = todoToSort.filter((todo) => todo.done);
    const uncompleted = todoToSort.filter((todo) => !todo.done).reverse();
    return [...uncompleted, ...completed];
  };

  const onToggleTodo = (id) => {
    const findTodo = todos.find((todo) => todo.id === id);
    setTodos((previousTodos) => {
      const updateTodos = previousTodos.map((todo) => {
        if (todo.id === findTodo.id) {
          todo.done = !todo.done;
          return todo;
        }
        return todo;
      });
      return sortTodos(updateTodos);
    });
  };

  const onDeleteTodo = (e, id) => {
    e.preventDefault();
    e.stopPropagation();
    setTodos((previousTodos) => previousTodos.filter((todo) => todo.id !== id));
  };

  return (
    <main className={`main ${isToggleled ? "lightTheme-main" : ""}`}>
      <InputForm onAddTodo={onAddTodo} />
      <TodoList
        todos={todos}
        onToggleTodo={onToggleTodo}
        onDeleteTodo={onDeleteTodo}
      />
    </main>
  );
};

export default Main;
