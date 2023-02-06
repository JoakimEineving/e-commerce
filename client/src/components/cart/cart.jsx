import React from "react";


const Cart = () => {
    return (
        
        <div className="container p-8 mx-auto mt-12 bg-white shadow-xl">
        <div className="w-full overflow-x-auto ">
          <div className="my-2">
            <h3 className="text-xl font-bold tracking-wider">Shopping Cart 3 item</h3>
          </div>
          <table className="w-full shadow-inner">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-6 py-3 font-bold whitespace-nowrap">Product</th>
                <th className="px-6 py-3 font-bold whitespace-nowrap">Qty</th>
                <th className="px-6 py-3 font-bold whitespace-nowrap">Price</th>
                <th className="px-6 py-3 font-bold whitespace-nowrap">Remove</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-4 px-6 text-center whitespace-nowrap">Iphone 11</td>
                <td className="p-4 px-6 text-center whitespace-nowrap">
                  <div>
                    <button className="px-2 py-0 shadow">-</button>
                    <input
                      type="text"
                      name="qty"
                      value="2"
                      className="w-12 text-center bg-gray-100 outline-none"
                    />
                    <button className="px-2 py-0 shadow">+</button>
                  </div>
                </td>
                <td className="p-4 px-6 text-center whitespace-nowrap">$1,000</td>
                <td className="p-4 px-6 text-center whitespace-nowrap">
                  <button className="px-2 py-0 text-red-100 bg-red-600 rounded">
                    x
                  </button>
                </td>
              </tr>
              <tr>
                <td className="p-4 px-6 text-center whitespace-nowrap">Iphone 12</td>
                <td className="p-4 px-6 text-center whitespace-nowrap">
                  <div>
                    <button className="px-2 py-0 shadow">-</button>
                    <input
                      type="text"
                      name="qty"
                      value="1"
                      className="w-12 text-center bg-gray-100 outline-none"
                    />
                    <button className="px-2 py-0 shadow">+</button>
                  </div>
                </td>
                <td className="p-4 px-6 text-center whitespace-nowrap">$12,00</td>
                <td className="p-4 px-6 text-center whitespace-nowrap">
                  <button className="px-2 py-0 text-red-100 bg-red-600 rounded">
                    x
                  </button>
                </td>
              </tr>
              <tr>
                <td className="p-4 px-6 text-center whitespace-nowrap">Iphone 13</td>
                <td className="p-4 px-6 text-center whitespace-nowrap">
                  <div>
                    <button className="px-2 py-0 shadow">-</button>
                    <input
                      type="text"
                      name="qty"
                      value="1"
                      className="w-12 text-center bg-gray-100 outline-none"
                    />
                    <button className="px-2 py-0 shadow">+</button>
                  </div>
                </td>
                <td className="p-4 px-6 text-center whitespace-nowrap">$1,300</td>
                <td className="p-4 px-6 text-center whitespace-nowrap">
                  <button className="px-2 py-0 text-red-100 bg-red-600 rounded">
                    x
                  </button>
                </td>
              </tr>
              <tr>
                <td className="p-4 px-6 text-center whitespace-nowrap"></td>
                <td className="p-4 px-6 text-center whitespace-nowrap">
                  <div className="font-bold">Total Qty - 4</div>
                </td>
                <td className="p-4 px-6 font-extrabold text-center whitespace-nowrap">
                  Total - 40,00 (include tax)
                </td>
                <td className="p-4 px-6 text-center whitespace-nowrap">
                  <button className="px-4 py-1 text-red-600 bg-red-100">
                    Clear All
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="flex justify-end mt-4 space-x-2">
            <button
              className="
                px-6
                py-3
                text-sm text-gray-800
                bg-gray-200
                hover:bg-gray-400
              "
            >
              Cannel
            </button>
            <button
              className="
                px-6
                py-3
                text-sm text-white
                bg-indigo-500
                hover:bg-indigo-600
              "
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>

        
            
                    
  
  )
}
export default Cart;


