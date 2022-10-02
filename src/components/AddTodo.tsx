import React, {useState, useEffect, useContext, FC} from 'react';
import {TodoContext} from '../contexts/todoContext';
import {TodoContextType, ITodo} from '../types/todo';

const AddTodo : FC = () => {
    const {todos, saveTodo} = useContext(TodoContext) as TodoContextType;

    useEffect(() => {
        console.log ("haha working now");
        console.log (todos);
    }, []);

    return (
        <>
            <div>
                <label>Hello</label>
            </div>
        </>
    );
}

export default AddTodo;