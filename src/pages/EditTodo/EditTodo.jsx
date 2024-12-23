import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const API_URL = "https://fake-api-kf7b.onrender.com";

const EditTodo = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ title: "", desc: "" });
  const [originalCompleted, setOriginalCompleted] = useState(false);

  const fetchTodo = async () => {
    try {
      const res = await axios.get(`${API_URL}/todos/${id}`);
      setFormData({
        title: res.data.title,
        desc: res.data.description,
      });
      setOriginalCompleted(res.data.completed);
    } catch (error) {
      console.log("Error fetching todo:", error);
      alert("Failed to fetch todo. Please try again.");
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.title || !formData.desc) {
      alert("All fields are required!");
      return;
    }

    const updatedTodo = {
      title: formData.title.trim(),
      description: formData.desc.trim(),
      completed: originalCompleted,
    };

    const previousState = { ...formData }; 
    setFormData(updatedTodo);

    try {
      await axios.put(`${API_URL}/todos/${id}`, updatedTodo);
      navigate("/todo"); 
    } catch (error) {
      console.log("Error updating todo:", error);
      setFormData(previousState);
      alert("Failed to update todo. Please try again.");
    }
  };

  useEffect(() => {
    fetchTodo();
  }, [id]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-6">Edit Todo</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Description</label>
          <textarea
            name="desc"
            value={formData.desc}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Update Todo
        </button>
      </form>
    </div>
  );
};

export default EditTodo;
