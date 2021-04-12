import { useState } from "react";
const Index = () => {
  const [userInput, setUserInput] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleChange = (e) => {
    e.preventDefault();
    setUserInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setTodoList([userInput, ...todoList]);
    setUserInput("");
  };

  const handleDelete = (todo) => {
    const updatedArr = todoList.filter(
      (todoItem) => todoList.indexOf(todoItem) != todoList.indexOf(todo)
    );
    setTodoList(updatedArr);
  };

  return (
    <div>
      <h3> NextJS todo List - Leo Phan </h3>
      <form>
        <input
          type="text"
          value={userInput}
          onChange={handleChange}
          placeholder="Enter a todo Item"
        />
        <button onClick={handleSubmit}>Submit</button>
      </form>
      <ul>
        {todoList.length >= 1
          ? todoList.map((todo, idx) => {
              return (
                <li key={idx}>
                  {todo}
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      handleDelete(todo);
                    }}
                  >
                    Delete
                  </button>
                </li>
              );
            })
          : ""}
      </ul>
    </div>
  );
};
export default Index;
