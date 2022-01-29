import React from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.scss';

export const TodoList = () => {
  return (
    <div classNmae="TodoList">
        <TodoListItem/>
        <TodoListItem/>
        <TodoListItem/>
    </div>
  );
};
