import React from 'react';
import './App.scss';

const backgroundColors = ['#FFFD75', '#FAAACA', '#69F098', '#FFA500', '#AFEEEE', '#800080', 
                          '#CD853F', '#A0522D', '#9ACD32', '#2F4F4F', '#6495ED', '#006400',
                          '#8FBC8F', '#FF1493', '#FF00FF', '#DCDCDC', '#ADFF2F', '#F0E68C',
                          '#E6E6FA', '#7B68EE', '#FFE4E1', '#808000', '#DDA0DD', '#008080']

function Todo({ todo, index, saveTodo, completeTodo, removeTodo }) {
  const [note, setNote] = React.useState({
    title: "",
    description: ""
  });

  const handleSaveNote = e => {
    if (!note.title || !note.description) return;
    saveTodo(index, note);
  };

  const handleChangeInput = (e) => {
    setNote({
      ...note,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div
      className="note"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "", backgroundColor: todo.color }}
    >
      <div className='note_header'>
        {
          (todo.isNew) ? (
            <span className="button save" onClick={handleSaveNote}>
              <svg width="1.7em" height="1.7em" viewBox="0 0 16 16" className="bi bi-plus" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
              </svg>
            </span>
          ) : (
            <span className="button complete" onClick={() => completeTodo(index)}>
              <svg width="1.7em" height="1.7em" viewBox="0 0 16 16" className="bi bi-check" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z"/>
              </svg>
            </span>
          )
        }
        <span className="button remove" onClick={() => removeTodo(index)}>X</span>
      </div>
      { 
        (todo.isNew) ? (
          <div className="note_cnt">
            <textarea 
              className="title"
              name="title"
              placeholder="Enter note title"
              style={{ backgroundColor: todo.color, background: todo.color }}
              value={note.title}
              onChange={handleChangeInput}
            >
            </textarea>
            <textarea
              className="cnt"
              name="description"
              placeholder="Enter note description here"
              style={{ backgroundColor: todo.color, background: todo.color }}
              value={note.description}
              onChange={handleChangeInput}
            >
            </textarea>
          </div>
        ) : (
          <div className="note_content">
            <h3 className="title">
              { todo.title }
            </h3>
            <p className="cnt">
              { todo.description }
            </p>
          </div>
        )
      }
    </div>
  );
}

function NewBtn({ addTodo }) {

  const handleClick = e => {
    e.preventDefault();
    addTodo();
  };

  return (
    <button onClick={handleClick} className="button" id="add_new">
      Add New Note
    </button>
  );
}

function App() {
  const [todos, setTodos] = React.useState([
    { 
      title: "Learn about React",
      description: "Learn about React",
      isCompleted: false,
      isNew: false,
      color: backgroundColors[Math.floor(Math.random()*backgroundColors.length)],
    },
    {
      title: "Meet friend for lunch",
      description: "Meet friend for lunch",
      isCompleted: false,
      isNew: false,
      color: backgroundColors[Math.floor(Math.random()*backgroundColors.length)],
    },
    {
      title: "Build really cool todo app",
      description: "Build really cool todo app",
      isCompleted: false,
      isNew: false,
      color: backgroundColors[Math.floor(Math.random()*backgroundColors.length)],
    }
  ]);

  const addTodo = () => {
    const newTodos = [...todos, { 
                                  title: "", 
                                  description: "", 
                                  isNew: true,
                                  color: backgroundColors[Math.floor(Math.random()*backgroundColors.length)], 
                                }
                      ];
    setTodos(newTodos);
  };

  const saveTodo = (index, value) => {
    const newTodos = [...todos];
    newTodos[index].title = value.title;
    newTodos[index].description = value.description;
    newTodos[index].isNew = false;
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
            saveTodo={saveTodo}
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
