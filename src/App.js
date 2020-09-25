import React from 'react';
import './App.scss';

function Todo({ todo, index, completeTodo, removeTodo }) {
  return (
    <div
      className="note"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      <div className='note_header'>
        <a href="javascript:;" className="button complete" onClick={() => completeTodo(index)}>
        <svg width="1.7em" height="1.7em" viewBox="0 0 16 16" class="bi bi-check" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z"/>
        </svg>
        </a>
        <a href="javascript:;" className="button remove" onClick={() => removeTodo(index)}>X</a>
      </div>
      <div className="note_content">
        <h3 className="title">
          { todo.title }
        </h3>
        <p className="cnt">
          { todo.description }
        </p>
      </div>

    </div>
  );
}

function CreateTodo({ todo, index, saveTodo, completeTodo, removeTodo }) {
  return (
    <div
      className="note"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      <div className='note_header'>
        <a href="javascript:;" className="button save" onClick={() => saveTodo(index)}>
        <svg width="1.7em" height="1.7em" viewBox="0 0 16 16" class="bi bi-plus" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
        </svg>
        </a>
        <a href="javascript:;" className="button remove" onClick={() => removeTodo(index)}>X</a>
      </div>
      <div className="note_cnt">
        <textarea className="title" placeholder="Enter note title"></textarea>
        <textarea className="cnt" placeholder="Enter note description here"></textarea>
      </div>
    </div>
  );
}

function NewBtn({ addTodo }) {
  const [value, setValue] = React.useState("");

  const handleClick = e => {
    e.preventDefault();
    addTodo(value);
    // setValue("");
  };

  return (
    <button onClick={handleClick} className="button" id="add_new">
      Add New Note
    </button>
  );
}

function TodoForm({ addTodo }) {
  const [value, setValue] = React.useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
}

function App() {
  const [todos, setTodos] = React.useState([
    { 
      title: "Learn about React",
      description: "Learn about React",
      isCompleted: false
    },
    {
      title: "Meet friend for lunch",
      description: "Meet friend for lunch",
      isCompleted: false
    },
    {
      title: "Build really cool todo app",
      description: "Build really cool todo app",
      isCompleted: false
    }
  ]);

  const addTodo = (title, description) => {
    const newTodos = [...todos, { title, description }];
    setTodos(newTodos);
  };

  const saveTodo = (title, description) => {
    const newTodos = [...todos, { title, description }];
    setTodos(newTodos);
  }

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
      </ul>
      <NewBtn addTodo={addTodo} />
    </div>
  );
}

export default App;
