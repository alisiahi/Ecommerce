import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../contexts/ProductContext";
import { CartContext } from "../contexts/CartContext";
import { ImSpinner9 } from "react-icons/im";

const ProductDetails = () => {
  const { id } = useParams();

  const { addToCart } = useContext(CartContext);

  const [product, setProduct] = useState();

  useEffect(() => {
    const productId = parseInt(id);
    const fetchProducts = async () => {
      const response = await fetch(
        `https://fakestoreapi.com/products/${productId}`
      );
      const data = await response.json();
      setProduct(data);
    };
    fetchProducts();
  }, [product, id]);

  // if product is not found
  if (!product) {
    return (
      <section className="h-screen flex justify-center items-center">
        <div className="text-6xl animate-spin">
          <ImSpinner9 />
        </div>
      </section>
    );
  }

  const { title, price, description, image } = product;

  return (
    <section className="container mx-auto pt-20 pb-12 lg:py-20 flex items-center">
      {/* image & text wrapper */}
      <div className="flex flex-col lg:flex-row items-center min-h-screen">
        {/* image */}
        <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0 ">
          <img className="max-w-[200px] lg:max-w-sm" src={image} alt="" />
        </div>
        {/* text */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-[26px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0">
            {title}
          </h1>
          <div className="text-xl text-red-500 font-medium mb-6">$ {price}</div>
          <p className="mb-8">{description}</p>
          <button
            onClick={() => addToCart(product, product.id)}
            className="bg-primary py-4 px-8 text-white rounded-lg"
          >
            Add to cart
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
