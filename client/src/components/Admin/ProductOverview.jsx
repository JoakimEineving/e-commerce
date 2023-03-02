import React from "react";
import useProduct from "../../hooks/useProduct";

const ProductOverview = () => {
  const [products, handleDelete] = useProduct();
  console.log(products);
  return (
    <div>
      <div className="">
        <h1 className="text-3xl font-bold flex justify-center">
          Products Overview
        </h1>
        {products.length > 0 ? (
          products.map((product) => (
            <div
              key={product._id}
              tabIndex={0}
              className="collapse bproduct bproduct-base-300 bg-base-100 rounded-box  m-2"
            >
              <div className="p-4 flex justify-between items-center">
                <div>
                  <p className="font-medium text-lg">{product.title}</p>
                  <p className="text-gray-500 text-sm">{product.description}</p>
                  <p className="text-gray-500 text-sm">{product.price}$</p>
                  <button
                    className="btn btn-sm"
                    onClick={() => handleDelete(product._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No products found</p>
        )}
      </div>
    </div>
  );
};

export default ProductOverview;
