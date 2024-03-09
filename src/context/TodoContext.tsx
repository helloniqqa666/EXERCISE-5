import { createContext, useContext, ReactNode, useState, Dispatch, SetStateAction } from 'react';
import React from 'react';

interface TodoContextProps {
  tasks: string[];
  setTasks: Dispatch<SetStateAction<string[]>>;
  completed: string[];
  setCompleted: Dispatch<SetStateAction<string[]>>;
}

export const TodoContext = createContext<TodoContextProps | undefined>(undefined);

interface TodoContextProviderProps {
  children: ReactNode;
}

const TodoContextProvider: React.FC<TodoContextProviderProps> = ({ children }) => {
  const [tasks, setTasks] = useState<string[]>([]);
  const [completed, setCompleted] = useState<string[]>([]);

  return (
    <TodoContext.Provider value={{ tasks, setTasks, completed, setCompleted }}>
      {children}
    </TodoContext.Provider>
  );
};

const useTodoList = (): TodoContextProps => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error('useTodoList must be used within a TodoContextProvider');
  }

  return context;
};

export { TodoContextProvider, useTodoList };
