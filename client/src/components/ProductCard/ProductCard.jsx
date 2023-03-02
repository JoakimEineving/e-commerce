import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/cartSlice";
import useProduct from "../../hooks/useProduct";

const ProductCard = () => {
  const [products] = useProduct();
  const dispatch = useDispatch();

  return (
    <div className="flex justify-around flex-row m-3 flex-wrap ">
      {products.length > 0
        ? products.map((product) => (
            <div key={product._id} className="m-2 shadow-xl flex-wrap ">
              <figure>
                <img src={product.thumbnail} alt="Product Image" />
              </figure>
              <div className="card-body w-96 ">
                <h2 className="card-title">{product.title}</h2>

                <p>{product.description}</p>
                <div className="card-actions justify-end">
                  <p className="card-subtitle text-gray-600">
                    {`${product.price}$`}
                  </p>
                  <button
                    className="btn btn-primary"
                    onClick={() => dispatch(addItem(product))}
                  >
                    Buy Now
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
