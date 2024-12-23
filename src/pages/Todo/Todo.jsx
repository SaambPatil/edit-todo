/* eslint-disable no-unused-vars */
import  { useEffect, useState } from "react";
import axios from "axios";
import AddTodo from "../../components/AddTodo/AddTodo";
import TodoList from "../../components/TodoList/TodoList";
import { useNavigate } from "react-router-dom";

const API_URL = "https://fake-api-kf7b.onrender.com";

const Todo = () => {
  const navigate = useNavigate(); // Correct placement inside the component

  const [formData, setFormData] = useState({
    title: "",
    desc: "",
    completed: false,
  });

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
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  const onSubmitForm = async (e) => {
    e.preventDefault();
    if (!formData.title || !formData.desc) {
      alert("All fields are required!");
      return;
    }

    const temp = {
      title: formData.title.trim(),
      description: formData.desc.trim(),
    };

    try {
      const res = await axios.post(`${API_URL}/todos`, temp);
      setTodoslist([...todoslist, res.data]);
      setFormData({ title: "", desc: "" });
    } catch (err) {
      alert("Failed to add todo. Please try again.");
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const deleteTodo = async (id) => {
    const originalTodos = [...todoslist];
    setTodoslist(todoslist.filter((todo) => todo._id !== id));
    try {
      await axios.delete(`${API_URL}/todos/${id}`);
    } catch (error) {
      setTodoslist(originalTodos);
      alert("Failed to delete the todo. Please try again.");
    }
  };

  const editTodo = (id) => {
    navigate(`/todo/edit/${id}`); // Correct navigation using useNavigate
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
        completed: updatedTodo.completed,
      };
      await axios.put(`${API_URL}/todos/${id}`, temp);
    } catch (error) {
      setTodoslist(originalTodos);
      alert("Failed to update the todo. Please try again.");
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
      <AddTodo
        formData={formData}
        handleChange={handleChange}
        onSubmitForm={onSubmitForm}
      />
      <TodoList
        todoslist={todoslist}
        markComplete={markComplete}
        deleteTodo={deleteTodo}
        editTodo={editTodo} 
      />
    </div>
  );
};

export default Todo;
