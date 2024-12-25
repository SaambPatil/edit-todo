import { useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const API_URL = "https://fake-api-kf7b.onrender.com";

const EditTodo = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { register, setValue, handleSubmit } = useForm();

  const onSubmitForm = async (data) => {
    try {
      await axios.put(`${API_URL}/todos/${id}`, data);
      toast.success("Todo updated successfully", {
        position: "bottom-right",
        duration: 2000
      });
      navigate("/todo");
    } catch (error) {
      console.log("Error updating todo:", error);
      toast.error("Failed to update todo. Please try again!", {
        position: "bottom-right",
        duration: 2000
      });
    }
  };

  useEffect(() => {
    const fetchTodo = async () => {
      try {
        const res = await axios.get(`${API_URL}/todos/${id}`);
        setValue("title", res.data.title);
        setValue("description", res.data.description);
        setValue("completed", res.data.completed);
      } catch (error) {
        console.log("Error fetching todo:", error);
        toast.error("Failed to fetch todo. Please try again!", {
          position: "bottom-right",
          duration: 2000
        });
      }
    };

    fetchTodo();
  }, [id, setValue]);

  return (
    <div className="container mx-auto max-w-lg p-6 bg-white shadow-md rounded-md mt-10">
      <h1 className="text-3xl font-semibold text-center text-blue-600 mb-6">
        Edit Todo
      </h1>
      <form onSubmit={handleSubmit(onSubmitForm)} className="space-y-6">
        {/* Title Field */}
        <div>
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="title"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            className="w-full p-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("title", { required: "Title is required" })}
            placeholder="Enter todo title"
          />
        </div>

        {/* Description Field */}
        <div>
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            id="description"
            className="w-full p-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("description", {
              required: "Description is required"
            })}
            placeholder="Enter todo description"
            rows="5"
          ></textarea>
        </div>

        {/* Completed Checkbox */}
        <div className="flex items-center space-x-3">
          <input
            type="checkbox"
            id="completed"
            className="h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            {...register("completed")}
          />
          <label
            htmlFor="completed"
            className="text-gray-700 font-medium cursor-pointer"
          >
            Mark as Completed
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-md shadow-md hover:bg-blue-600 transition duration-200"
        >
          Update Todo
        </button>
      </form>
    </div>
  );
};

export default EditTodo;
