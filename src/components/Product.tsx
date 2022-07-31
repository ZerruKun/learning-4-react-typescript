import React from "react";
import { IProduct } from "../models";

interface ProductProps {
  product: IProduct;
}

const Product = (props: ProductProps) => {
  return (
    <div className="border py-2 px-4 rounded flex flex-col items-center mb2">
      Product!
    </div>
  );
};

export default Product;