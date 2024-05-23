import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { allProducts } from "../thunks/productsThunks";

const Products = () => {
  const [products, setProducts] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const response = await dispatch(allProducts());
    setProducts(response.payload);
  };

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>{product.title}</div>
      ))}
    </div>
  );
};

export default Products;
