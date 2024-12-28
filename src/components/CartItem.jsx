import { FcDeleteDatabase } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { remove } from "../redux/Slices/cartSlice";

const CartItem = ({item, itemindex}) => {
  const dispatch = useDispatch();

  const removefromcart = () => {
    dispatch(remove(item.id));
    toast.error("Item removed");
  }

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between bg-white p-4 rounded-xl 
                    border border-gray-200 hover:border-gray-300 hover:shadow-md transition duration-300">
      <div className="flex flex-col sm:flex-row items-center gap-5 flex-1">
        {/* Image */}
        <div className="w-[150px] h-[150px] p-2">
          <img 
            src={item.image} 
            alt={item.title} 
            className="w-full h-full object-contain hover:scale-105 transition duration-300"
          />
        </div>

        {/* Details */}
        <div className="flex flex-col gap-2 flex-1">
          <h3 className="text-lg font-semibold text-gray-800 line-clamp-1">{item.title}</h3>
          <p className="text-sm text-gray-500 line-clamp-2">{item.description}</p>
          
          {/* Price and Remove Button */}
          <div className="flex justify-between items-center mt-2">
            <p className="text-xl font-bold text-green-600">${item.price}</p>
            <button 
              onClick={removefromcart}
              className="group flex items-center gap-2 text-gray-600 hover:text-red-500 
                       bg-gray-100 hover:bg-red-50 px-3 py-2 rounded-lg transition duration-300"
            >
              <span className="text-sm font-medium">Remove</span>
              <FcDeleteDatabase className="text-xl group-hover:scale-110 transition duration-300"/>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
