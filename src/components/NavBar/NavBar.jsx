import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="bg-yellow-300 flex justify-between items-center p-5 shadow-md">
      <div className="text-2xl font-bold">Todo App</div>

      <div className="flex space-x-5">
        <Link to="/">Home</Link>
        <Link to="/todo">Todo</Link>
        <Link to="/about-us">About Us</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
};

export default NavBar;
