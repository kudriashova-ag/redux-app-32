import { NavLink, Outlet } from "react-router-dom";
import "./App.css";
import Theme from "./components/Theme";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { allProducts } from "./thunks/productsThunks";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(allProducts());
      dispatch(allProducts());
    }, []);
  
  return (
    <div>
      <Theme />
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/shop">Shop</NavLink>
      </div>
      <Outlet />
    </div>
  );
}

export default App;
