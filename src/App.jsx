import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs/AboutUs";
import Contact from "./pages/Contact/Contact";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import RootLayout from "./components/RootLayout/RootLayout";
import Todo from "./pages/Todo/Todo";
import TodoItem from "./pages/TodoItem/TodoItem";
import EditTodo from "./pages/EditTodo/EditTodo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/todo/:todoId" element={<TodoItem />} />
          <Route path="/todo/edit/:id" element={<EditTodo />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
