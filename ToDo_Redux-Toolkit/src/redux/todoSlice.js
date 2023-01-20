import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from 'uuid';

export const sortTodos = (todoToSort) => {
    const completed = todoToSort.filter(todo => todo.done);
    const uncompleted = todoToSort.filter(todo => !todo.done).reverse();
    return [...uncompleted, ...completed];
}

export const todoSlice = createSlice({
    name:'todos',
    initialState: [],
    reducers:{
        addTodo: (state, action) => {
            const newTodo = {
                id: uuid(),
                todoText: action.payload,
                done: false,
              };
              const newEntry = [...state, newTodo]
              const sortedTodos = sortTodos(newEntry)
              
            return [...sortedTodos]
        },
        toggleTodo: (state, action) => {
            const findTodo = state.find(todo => todo.id === action.payload);
            const updateTodos = state.map((todo) => {
                if (todo.id === findTodo.id) {
                return {...todo, done: !todo.done };
                }
                return todo
            })
            const sortedTodos = sortTodos(updateTodos)
            return [...sortedTodos];
        },
        deleteTodo: (state, action) => {
            const remainingTodos = state.filter(todo => todo.id !== action.payload);
            return [...remainingTodos];
        }
    }
})

export const { addTodo, toggleTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
