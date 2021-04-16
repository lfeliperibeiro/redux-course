import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { addProductToCart } from "../store/modules/cart/actions";
import { IProduct } from "../store/modules/cart/types";

interface catalogItemProps {
  product: IProduct;
}

const CatalogItem = ({ product }: catalogItemProps) => {
  const dispatch = useDispatch();
  const handleAddProductToCart = useCallback(() => {
    dispatch(addProductToCart(product));
  }, [dispatch, product]);

  return (
    <article>
      <strong>{product.title}</strong> {" - "}
      <span>{product.price}</span>
      <button type="button" onClick={handleAddProductToCart}>
        Comprar
      </button>
    </article>
  );
};

export default CatalogItem;

function dispatch(arg0: { type: string; payload: { product: IProduct } }) {
  throw new Error("Function not implemented.");
}
