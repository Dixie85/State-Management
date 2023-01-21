import "./Main.css";
import InputForm from "../../Components/InputForm/InputForm";
import TodoList from "../../Components/TodoList/TodoList";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const Main = () => {
  const todos = useSelector((state) => state.todos);

  useEffect(() => {
    localStorage.setItem("todosList", JSON.stringify(todos));
  }, [todos]);

  return (
    <main className="main">
      <InputForm />
      <TodoList todos={todos} />
    </main>
  );
};

export default Main;
