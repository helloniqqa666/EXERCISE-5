// pages/index.tsx
import React from 'react';
import { useState } from 'react';
import TodoList from '../components/TodoList';
import { useTodoList } from '@/context/TodoContext';

const TODO = {
  LIST: 'To-Do List',
  COMPLETED: 'Completed',
};

const Home: React.FC = () => {
  const { completed } = useTodoList();
  const [tab, setTabs] = useState<string>(TODO.LIST);

  return (
    <div className="bg-gray-200 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-2xl font-semibold mb-4">Todo List</h1>
      <div style={{ marginBottom: 20 }}>
        <button
          className={`p-2 ${tab === TODO.LIST ? 'active' : ''}`}
          onClick={() => setTabs(TODO.LIST)}
        >
          {TODO.LIST}
        </button>
        <button
          className={`p-2 ${tab === TODO.COMPLETED ? 'active' : ''}`}
          onClick={() => setTabs(TODO.COMPLETED)}
        >
          {TODO.COMPLETED}
        </button>
      </div>
      {tab === TODO.LIST && <TodoList />}
      {tab === TODO.COMPLETED && (
        completed.map((data: string, i: number) => (
          <div key={i}>{data}</div>
        ))
      )}
    </div>
  );
};

export default Home;
