import { ShoppingCart } from "../index";

const CartModal = () => {
  return (
    <div>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal ">
        <div className="modal-box max-w-[900px] w-full">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <ShoppingCart />
        </div>
      </div>
    </div>
  );
};

export default CartModal;
