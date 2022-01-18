import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState( TASKS );
  const [categories, setCategories] = useState( "All" )

  const taskFilter = categories === "All" ? tasks : tasks.filter(task => task.category === categories)

  const handleFilter = (targetCategory) => {
    setCategories(targetCategory)
  }

  const deleteTask = (targetTask) => {
    setTasks(tasks.filter(task => task !== targetTask))
  }
  
  const onTaskFormSubmit = (newTask) => {
    setTasks([...taskFilter, newTask])
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
        categories={CATEGORIES} 
        handleFilter={handleFilter}/>
      <NewTaskForm 
        onTaskFormSubmit={onTaskFormSubmit} 
        categories={CATEGORIES.filter((targetCategory => targetCategory !== "All"))}/>
      <TaskList 
        tasks={taskFilter} 
        deleteTask={deleteTask}/>
    </div>
  );
}

export default App;
