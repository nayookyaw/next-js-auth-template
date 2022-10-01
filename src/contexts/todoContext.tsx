import * as React from 'react';
import {TodoContextType, ITodo} from '../types/todo';

export const TodoContext = React.createContext<TodoContextType | null>(null);

type Props = {
    children?: React.ReactNode
}

const TodoProvider : React.FC<Props> = ({children}) => {
    const [todos, setTodos] = React.useState<ITodo[]>([
        {
            id : 1,
            title : 'post 1',
            description : 'this is first description',
            status : false,
        },
        {
            id : 2,
            title : 'post 2',
            description : 'this is second description',
            status : true,
        },
    ]);

    const saveTodo = (todo: ITodo) => {
        const newTodo : ITodo = {
            id: Math.random(),
            title: todo.title,
            description: todo.description,
            status: false,
        }
        setTodos([...todos, newTodo]);
    }
    return <TodoContext.Provider value={{todos, saveTodo}}>{children}</TodoContext.Provider>
}

export default TodoProvider;