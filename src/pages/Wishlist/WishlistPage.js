import { useWishlist } from "../../context";
import { WishlistCard, WishlistEmpty } from "./components";

export const WishlistPage = () => {

  const { wishlist } = useWishlist();

  console.log("Wishlist Page:", wishlist);

  return (
    <main className="max-w-screen-xl mx-auto px-5 py-10">

      <h1 className="text-3xl font-bold dark:text-white mb-8">
        ❤️ My Wishlist
      </h1>

      {
        wishlist.length === 0
          ? <WishlistEmpty />
          : (
            <div className="grid md:grid-cols-3 gap-6">
              {
                wishlist.map(product => (
                  <WishlistCard
                    key={product.id}
                    product={product}
                  />
                ))
              }
            </div>
          )
      }

    </main>
  );
};