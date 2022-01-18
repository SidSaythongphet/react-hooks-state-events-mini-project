import React from "react";
import Task from "./Task";

function TaskList({ tasks, deleteTask, categories }) {
  return (
    <div className="tasks">
      {tasks.map((task, i) => 
        <Task 
          key={i} 
          {...task}
          deleteTask={() => deleteTask(task)}
        /> 
      )}
    </div>
  );
}

export default TaskList;
