/* eslint-disable react/prop-types */
import "react";

const AddTodo = ({ formData, handleChange, onSubmitForm }) => {
  return (
    <form
      onSubmit={onSubmitForm}
      className="bg-gray-100 p-4 rounded-md shadow-md max-w-md"
    >
      <h2 className="text-xl font-semibold mb-4">Add New Todo</h2>
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={formData.title}
        onChange={handleChange}
        className="w-full p-2 mb-2 border rounded-md"
      />
      <input
        type="text"
        name="desc"
        placeholder="Description"
        value={formData.desc}
        onChange={handleChange}
        className="w-full p-2 mb-2 border rounded-md"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded-md w-full"
      >
        Add Todo
      </button>
    </form>
  );
};

export default AddTodo;
