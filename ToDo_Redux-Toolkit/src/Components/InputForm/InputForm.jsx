import "./InputForm.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/todoSlice";
import Button from "../Button/Button";

const InputForm = () => {
  const dispatch = useDispatch()
  const [inputValue, setInputValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const onInputsubmit = (e) => {
    e.preventDefault();
    if (inputValue.length < 1) {
      setErrorMessage('No ToDO! What TODO?');
      return
    } 
    dispatch(addTodo(inputValue))
    setInputValue('');
    setErrorMessage('');
  };

  return (
    <section className="user-input">
      <form className="user-input__form">
        <input
          type="text"
          name="txtTodoItemTitle"
          id="txtTodoItemTitle"
          className="user-input__input-field"
          value={inputValue}
          placeholder="Write here..."
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Button
          id={"btnAddTodo"}
          className={"user-input__btnAddTodo"}
          text={"Add ToDo!!!"}
          onButtonClick={(e) => onInputsubmit(e)}
        />
      </form>
      <section className="info">
        <span className="info__span-titel">Your Todo List</span>
        {!errorMessage < 1 && <span className="info__span-error-message">{errorMessage}</span>}
      </section>
    </section>
  );
};

export default InputForm;
