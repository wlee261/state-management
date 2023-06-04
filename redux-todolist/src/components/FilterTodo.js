import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const FilterTodo = () => {
  const dispatch = useDispatch();
  const showCompleted = useSelector((state) => state.filter);
  const handleChange = () => {
    dispatch({ type: "filter/toggle" });
  };

  return (
    <div>
      <label>
        Show Completed Todos
        <input
          type="checkbox"
          onChange={handleChange}
          checked={showCompleted}
        />
      </label>
    </div>
  );
};

export default FilterTodo;
