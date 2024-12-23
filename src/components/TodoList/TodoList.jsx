import TodoItem from "../../pages/TodoItem/TodoItem";

const TodoList = ({ todoslist, markComplete, deleteTodo, editTodo }) => {
  return (
    <div>
      {todoslist.map((todo, index) => (
        <TodoItem
          todo={todo}
          key={todo._id}
          index={index}
          markComplete={markComplete}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
