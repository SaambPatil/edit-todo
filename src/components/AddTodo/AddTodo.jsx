import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const AddTodo = ({ createTodo }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setFocus,
    reset,
  } = useForm();

  const innerSubmit = (data) => {
    createTodo(data);
    toast.success("New todo added successfully", {
      position: "bottom-right",
      duration: 2000
    });
    reset();
  };

  setFocus("title");
  // setValue("title", "kndkjn");

  return (
    <form
      onSubmit={handleSubmit(innerSubmit)}
      className="bg-gray-100 p-4 rounded-md shadow-md max-w-md"
    >
      <h2 className="text-xl font-semibold mb-4">Add New Todo</h2>
      <input
        type="text"
        placeholder="Title"
        className="w-full p-2 mb-2 border rounded-md"
        {...register("title", { required: true, minLength: 5, maxLength: 50 })}
      />

      {/* {errors.title && (
        <span className="text-red-400">This field is required</span>
      )} */}

      {errors.title?.type === "minLength" && (
        <span className="text-red-400">Allowed minimum length: 5</span>
      )}
      {errors.title?.type === "maxLength" && (
        <span className="text-red-400">Allowed max length: 50</span>
      )}

      <textarea
        placeholder="Description"
        className="w-full p-2 mb-2 border rounded-md"
        {...register("description", {
          required: true,
          minLength: 10,
        })}
      ></textarea>

      {errors.description && (
        <span className="text-red-400">This field is required</span>
      )}

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
