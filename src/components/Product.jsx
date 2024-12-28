import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { add, remove } from "../redux/Slices/cartSlice";
import { FaShoppingCart, FaTrash } from "react-icons/fa";

const Product = ({post}) => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const addtocart = () => {
    dispatch(add(post));
    toast.success("Item added to cart");
  }

  const removefromcart = () => {
    if (post?.id) {
      dispatch(remove(post.id));
      toast.error("Item removed from cart");
    }
  }

  return (
    <div className="group flex flex-col items-center justify-between bg-white 
                    hover:scale-105 transition duration-300 ease-in gap-3 p-4 rounded-xl
                    shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:shadow-[rgba(0,_0,_0,_0.1)_0px_10px_50px]
                    relative overflow-hidden">
      {/* Discount Badge */}
      <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
        -{Math.floor(Math.random() * 30 + 20)}%
      </div>

      {/* Image Container */}
      <div className="h-[180px] w-full">
        <img src={post.image} alt={post.title} 
             className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-110"/> 
      </div>

      {/* Content Container */}
      <div className="w-full mt-4 space-y-2">
        <p className="text-gray-700 font-semibold text-lg truncate">{post.title}</p>
        <p className="text-gray-400 text-sm text-left line-clamp-2">{post.description}</p>
      </div>

      {/* Price and Rating */}
      <div className="w-full flex justify-between items-center mt-3">
        <div>
          <p className="text-green-600 font-bold text-lg">${post.price}</p>
          <p className="text-gray-500 text-sm">⭐ {post.rating?.rate || "4.5"}</p>
        </div>
        {cart.some((p) => p.id === post.id) ? (
          <button
            className="bg-red-500 hover:bg-red-600 text-white rounded-full p-3 transition duration-300"
            onClick={removefromcart}>
            <FaTrash className="text-sm"/>
          </button>
        ) : (
          <button
            className="bg-green-600 hover:bg-green-700 text-white rounded-full p-3 transition duration-300"
            onClick={addtocart}>
            <FaShoppingCart className="text-sm"/>
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;
