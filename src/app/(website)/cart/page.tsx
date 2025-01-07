import CartPage from "./_components/cart-page";
import EmptyCart from "./_components/empty-cart";
import ProductsYouMayLike from "./_components/products-you-may-like";

const Page = () => {
  const isEmpty = false;
  return (
    <>
      {!isEmpty && <CartPage />}
      {isEmpty && <EmptyCart />}
      <ProductsYouMayLike />
    </>
  );
};

export default Page;
