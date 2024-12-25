/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import AddTodo from "../../components/AddTodo/AddTodo";
import TodoList from "../../components/TodoList/TodoList";

const API_URL = "https://fake-api-kf7b.onrender.com";

const Todo = () => {
  const [todoslist, setTodoslist] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const getTodos = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get(`${API_URL}/todos`);
      setTodoslist(res.data);
    } catch (error) {
      setError("Unable to get todos");
      toast.error("Failed to fetch todos. Please try again.", {
        position: "bottom-right",
        duration: 2000
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  const createTodo = async (data) => {
    try {
      const res = await axios.post(`${API_URL}/todos`, data);
      setTodoslist([...todoslist, res.data]); 
    } catch (err) {
      toast.error("Failed to add todo. Please try again.", {
        position: "bottom-right",
        duration: 2000
      });
    }
  };

  const deleteTodo = async (id) => {
    const originalTodos = [...todoslist];
    setTodoslist(todoslist.filter((todo) => todo._id !== id));
    try {
      await axios.delete(`${API_URL}/todos/${id}`);
      toast.success("Todo deleted successfully!", {
        position: "bottom-right",
        duration: 2000
      });
    } catch (error) {
      setTodoslist(originalTodos);
      toast.error("Failed to delete todo. Please try again.", {
        position: "bottom-right",
        duration: 2000
      });
    }
  };

  const markComplete = async (id, completed) => {
    const originalTodos = [...todoslist];
    const updatedTodos = todoslist.map((todo) =>
      todo._id === id ? { ...todo, completed: !completed } : todo
    );
    setTodoslist(updatedTodos);

    try {
      const updatedTodo = updatedTodos.find((todo) => todo._id === id);
      const temp = {
        title: updatedTodo.title,
        description: updatedTodo.description,
        completed: updatedTodo.completed
      };
      await axios.put(`${API_URL}/todos/${id}`, temp);
      toast.success(
        `Todo marked as ${!completed ? "completed" : "incomplete"}!`,
        {
          position: "bottom-right",
          duration: 2000
        }
      );
    } catch (error) {
      setTodoslist(originalTodos);
      toast.error("Failed to update todo. Please try again.", {
        position: "bottom-right",
        duration: 2000
      });
    }
  };

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div>
      <AddTodo createTodo={createTodo} />
      <br />
      <TodoList
        todoslist={todoslist}
        markComplete={markComplete}
        deleteTodo={deleteTodo}
      />
    </div>
  );
};

export default Todo;
