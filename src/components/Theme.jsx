import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../slices/themeSlice";

const Theme = () => {
  const theme = useSelector((state) => state.theme);
  const { data: products } = useSelector((state) => state.products);

  const dispatch = useDispatch();

  const changeTheme = () => {
    dispatch(setTheme("blue"));
  };

  return (
    <div>
      {theme.colors.map((color) => (
        <button onClick={() => dispatch(setTheme(color))} key={color}>
          {color}
        </button>
      ))}
      {theme.value}
      <b>{products.length}</b>
    </div>
  );
};

export default Theme;
