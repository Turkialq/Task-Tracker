import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import About from "./components/About";

function App() {
  const [tasks, setTasks] = useState([]);
  const [add, setAdd] = useState(false);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    }
    getTasks();

  }, [])

  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/tasks");
    const data = await res.json();
    return data;
  }

  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json();

    return data;
  }


  const deleteTask = async id => {
    await fetch(`http://localhost:5000/tasks/${id}`, { method: 'DELETE' })
    setTasks(current => current.filter(task => { return task.id !== id; }),);
  };

  const addTask = async task => {
    const res = await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(task)
    });
    const data = await res.json();
    console.log(data);
    setTasks([...tasks, data]);

  };

  const toggle = async id => {
    const taskTotogle = await fetchTask(id);
    const updatedTask = { ...taskTotogle, reminder: !taskTotogle.reminder };


    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(updatedTask)
    });

    const data = await res.json();

    setTasks(tasks.map(task => task.id === id ? { ...task, reminder: data.reminder } : task));
  }

  return (
    <Router>
      <div className="container">
        <Header title={"Task Tracker"} showform={() => { setAdd(!add) }} buttontext={add} />
        <Routes>
          <Route
            path="/"
            element={<>
              {add && <AddTask addTask={addTask} />}
              {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} toggle={toggle} />
                : 'No tasks to show'
              }
            </>
            }
          />
          <Route path='/about' element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router >

  );

}

export default App;
