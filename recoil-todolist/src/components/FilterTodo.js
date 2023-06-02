import React, { useEffect } from "react";

import { useRecoilState } from "recoil";
import { showAllTodosState } from "../recoil_state";

const FilterTodo = () => {
  const [showAllTodos, setShowAllTodos] = useRecoilState(showAllTodosState);

  const handleChange = () => {
    setShowAllTodos(!showAllTodos);
  };

  return (
    <div>
      <label>
        Show Completed Todos
        <input type="checkbox" checked={showAllTodos} onChange={handleChange} />
      </label>
    </div>
  );
};

export default FilterTodo;
