import React from "react";
import { Link } from "react-router-dom";

const TodoItem = ({ todo, index, markComplete, deleteTodo }) => {
  return (
    <div
      className={`bg-white shadow-md rounded-md p-4 mb-4 border-l-4 ${
        todo.completed ? "border-green-500" : "border-blue-500"
      } hover:border-blue-700 transition-all w-full text-left`}
    >
      <p
        className={`text-lg font-semibold ${
          todo.completed ? "text-green-500 line-through" : "text-gray-800"
        }`}
      >
        {index + 1}. Title: <span className="font-normal">{todo.title}</span>
      </p>
      <p
        className={`text-gray-600 ${
          todo.completed ? "text-green-400 line-through" : ""
        }`}
      >
        Description: {todo.description}
      </p>
      <p className="text-sm text-gray-400">
        Created on: {new Date(todo.createdOn).toDateString()}
      </p>
      <div className="flex space-x-2 mt-4">
        <button
          onClick={() => markComplete(todo._id, todo.completed)}
          className={`px-4 py-2 rounded-md text-white transition-all duration-300 ease-in-out ${
            todo.completed
              ? "bg-yellow-500 hover:bg-yellow-600"
              : "bg-green-500 hover:bg-green-600"
          }`}
        >
          {todo.completed ? "Mark As Incomplete" : "Mark As Complete"}
        </button>

        <button
          onClick={() => deleteTodo(todo._id)}
          className="px-4 py-2 rounded-md bg-red-500 text-white hover:bg-red-600 transition-all duration-300 ease-in-out"
        >
          Delete
        </button>

        <Link
          to={`/todo/edit/${todo._id}`}
          className="px-4 py-2 rounded-md bg-yellow-400 text-black hover:bg-yellow-500 transition-all duration-300 ease-in-out"
        >
          Edit
        </Link>
      </div>
    </div>
  );
};

export default TodoItem;
