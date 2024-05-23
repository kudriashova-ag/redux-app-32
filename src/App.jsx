import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { setTheme } from "./slices/themeSlice";

function App() {
  const theme = useSelector((state) => state.theme);
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
      
    </div>
  );
}

export default App;
