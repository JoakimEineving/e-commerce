import React, { useState } from "react";
import productsService from "../../services/productsService";

const UploadForm = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [description, setDescription] = useState("");

  const handleProductSubmit = async (e) => {
    e.preventDefault();
    const productData = {
      title,
      price,
      thumbnail,
      description,
    };
    const uploadedProduct = await productsService.uploadProduct(productData);
    if (uploadedProduct) {
      setTitle("");
      setPrice("");
      setThumbnail("");
      setDescription("");
    }
  };
  return (
    <div className="flex">
      <h1 className="m-5">Upload New Product</h1>
      <form onSubmit={handleProductSubmit} className="m-2">
        <input
          type="text"
          placeholder="Title"
          className="input input-bordered w-full max-w-xs m-2"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          className="input input-bordered w-full max-w-xs m-2"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          type="text"
          placeholder="Image link"
          className="input input-bordered w-full max-w-xs m-2"
          value={thumbnail}
          onChange={(e) => setThumbnail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          className="input input-bordered w-full max-w-xs m-2"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit" className="btn btn-primary m-2">
          Add Product
        </button>
      </form>
      <div className="flex flex-row m-3 flex-wrap">
        <h1 className="">Preview:</h1>
        <div className="m-2 shadow-xl flex-wrap">
          <figure>
            <img
              src={
                thumbnail === "" ? "https://dummyimage.com/400x300/000/fff" : ""
              }
              alt="Product Image"
            />
          </figure>
          <div className="card-body w-96 ">
            <h2 className="card-title">
              {title === "" ? "Product Title" : title}
            </h2>

            <p>
              {description === ""
                ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
                : description}
            </p>
            <div className="card-actions justify-end">
              <p className="card-subtitle text-gray-600">
                {`${price}$` === "$" ? "0000$" : `${price}$`}
              </p>
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadForm;
