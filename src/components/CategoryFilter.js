import React, { useState } from "react";

function CategoryFilter({ categories, handleFilter }) {
  const [selected, setSelected] = useState('All')

  function handleClick(e){
    handleFilter(e.target.textContent)
    setSelected(e.target.textContent)
  }

  const renderCategoryList = categories.map(category => <button key={category} className={selected === category ? 'selected': '' } onClick={handleClick}>{category}</button>)

  return (
    <div className="categories">
      <h5>Category filters</h5>
        {renderCategoryList}
    </div>
  );
}

export default CategoryFilter;
