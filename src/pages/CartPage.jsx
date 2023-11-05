import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import CartItem from "../components/CartItem";

const CartPage = () => {
  const { cart, totalPrice } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <section className="container mx-auto py-5 flex items-center">
        <div className="flex flex-col w-full h-screen justify-center items-center">
          <h1 className="text-3xl font-semibold my-8 text-center md:text-left">
            Your Shopping Cart is EMPTY
          </h1>
        </div>
      </section>
    );
  }
  return (
    <section className="container mx-auto pt-20 pb-12 lg:py-20 flex items-center">
      <div className="flex flex-col w-full h-screen">
        <h1 className="text-3xl font-semibold my-8 text-center md:text-left">
          Your Shopping Cart
        </h1>

        <div className="overflow-y-auto">
          {cart.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
        <div className="mt-8">
          <h2 className="text-xl font-semibold">
            Total: ${parseFloat(totalPrice).toFixed(2)}
          </h2>
        </div>
        <div className="mt-8">
          <button className="bg-primary text-white py-3 px-6 rounded-lg">
            Checkout
          </button>
        </div>
      </div>
    </section>
  );
};

export default CartPage;
