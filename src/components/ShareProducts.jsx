import React from "react";
import {  useSelector } from "react-redux";

const ShareProducts = () => {
  const { data, loading, error } = useSelector((state) => state.products);

  if (loading) return "Loading...";

  return (
    <div>
      {data.map((product) => (
        <div key={product.id}>{product.title}</div>
      ))}
    </div>
  );
};

export default ShareProducts;
