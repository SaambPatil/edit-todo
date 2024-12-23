import TodoItem from "../../pages/TodoItem/TodoItem";

const TodoList = ({ todoslist, markComplete, deleteTodo, editTodo }) => {
  return (
    <div className="mt-4">
      {todoslist.map((todo, index) => (
        <TodoItem
          key={todo.id}
          todo={todo}
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
