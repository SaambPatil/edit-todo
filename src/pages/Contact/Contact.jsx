import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = async (data) => {
    try {
      console.log("Form Data Submitted:", data);
      toast.success("Form submitted successfully!", {
        position: "bottom-right",
        duration: 2000
      });

      reset();
    } catch (error) {
      toast.error("Something went wrong. Please try again.", {
        position: "bottom-right",
        duration: 2000
      });
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-5 border rounded-md shadow-md">
      <h2 className="text-xl font-bold mb-4 text-center">Contact Me</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full p-2 border rounded"
            placeholder="Your Name"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-2 border rounded"
            placeholder="Your Email"
            {...register("email", {
              required: "Email is required"
            })}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium">
            Message
          </label>
          <textarea
            id="message"
            className="w-full p-2 border rounded"
            placeholder="Your Message"
            rows="4"
            {...register("message", { required: "Message is required" })}
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-sm">{errors.message.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
