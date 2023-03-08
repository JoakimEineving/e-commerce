import { ShoppingCart, Shipping } from "../index";

const CartModal = ({page}) => {
    console.log(page)
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
          {page == "ShoppingCart" ? (
            <ShoppingCart />
          ) : page == "Shipping" ? (
            <Shipping />
          ) :
          (
            <div>Page not found</div>)}
        </div>
      </div>
    </div>
  );
};

export default CartModal;
