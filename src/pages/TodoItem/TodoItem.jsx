import React from "react";

const TodoItem = ({ todo, index, markComplete, deleteTodo, editTodo }) => {
  return (
    <div className="bg-white shadow-md rounded-md p-4 mb-4 border-l-4 border-blue-500 hover:border-blue-700 transition-all w-full text-left">
      <p className="text-lg font-semibold">
        {index + 1}. Title: <span className="font-normal">{todo.title}</span>
      </p>
      <p className="text-gray-600">Description: {todo.desc}</p>
      <p className="text-sm text-gray-400">
        Created on: {new Date(todo.createdOn).toDateString()}
      </p>
      <div className="flex space-x-2 mt-4">
        <button
          onClick={() => markComplete(todo.id, todo.completed)}
          className={`px-4 py-2 rounded-md text-white ${
            todo.completed ? "bg-yellow-500" : "bg-green-500"
          }`}
        >
          {todo.completed ? "Mark As Incomplete" : "Mark As Complete"}
        </button>
        <button
          onClick={() => deleteTodo(todo.id)}
          className="px-4 py-2 rounded-md bg-red-500 text-white"
        >
          Delete
        </button>
        <button
          onClick={() => editTodo(todo.id)}
          className="px-4 py-2 rounded-md bg-yellow-400 text-black"
        >
          Edit
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
