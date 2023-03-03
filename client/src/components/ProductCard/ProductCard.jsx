import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/cartSlice";
import useProduct from "../../hooks/useProduct";

const ProductCard = () => {
  const [products] = useProduct();
  const dispatch = useDispatch();

  return (
    <div className="flex justify-around flex-row  flex-wrap bg-base-200 ">
      {products.length > 0
        ? products.map((product) => (
            <div key={product._id} className="m-2 shadow-xl flex-wrap  ">
              <figure className="w-96 ">
                <img className="object-contain h-48 w-96"src={product.thumbnail} alt="Product Image" />
              </figure>
              <div className="card-body w-96  ">
                <h2 className="card-title text-gray-300">{product.title}</h2>

                <p className="text-gray-400">{product.description}</p>
                <div className="card-actions justify-end">
                  <p className="card-subtitle text-gray-300">
                    {`${product.price}$`}
                  </p>
                  <button
                    className="btn btn-primary"
                    onClick={() => dispatch(addItem(product))}
                  >
                    add to cart
                  </button>
                </div>
              </div>
            </div>
          ))
        : "No products found"}
    </div>
  );
};

export default ProductCard;
