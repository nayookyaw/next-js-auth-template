import React, {useState, useEffect, useContext, FC} from 'react';
import {TodoContext} from '../contexts/todoContext';
import {TodoContextType, ITodo} from '../types/todo';

const AddTodo : FC = () => {
    const {saveTodo} = useContext(TodoContext) as TodoContextType;

    useEffect(() => {
        console.log ("haha working now");
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