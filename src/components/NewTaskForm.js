import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [formDetail, setFormDetail] = useState({
    text: "", 
    category: "Code"
  })

  function handleSubmit(event) {
    event.preventDefault()
    const newTask = {
      text: formDetail.text,
      category: formDetail.category
    }

    onTaskFormSubmit(newTask)
  }

  function handleChange(event) {
    setFormDetail({
      ...formDetail,
      [event.target.name]: event.target.value
    })
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={handleChange} />
      </label>
      <label>
        Category
        <select name="categories" onChange={handleChange}>
          {categories.map(category => <option key={category} value={category}>{category}</option>)}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
