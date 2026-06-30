import { Link } from "react-router-dom";
import { useWishlist } from "../../../context";

export const WishlistCard = ({ product }) => {

  const { removeFromWishlist } = useWishlist();

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4">

      <Link to={`/products/${product.id}`}>
        <img
          src={product.poster}
          alt={product.name}
          className="w-full h-60 object-cover rounded"
        />

        <h2 className="mt-3 text-xl font-bold dark:text-white">
          {product.name}
        </h2>
      </Link>

      <p className="text-gray-600 dark:text-gray-300">
        ${product.price}
      </p>

      <button
        onClick={() => removeFromWishlist(product)}
        className="mt-4 w-full bg-red-600 text-white py-2 rounded"
      >
        Remove
      </button>

    </div>
  );
};