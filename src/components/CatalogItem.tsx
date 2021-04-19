import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IState } from "../store";
import { addProductToCartRequest } from "../store/modules/cart/actions";
import { IProduct } from "../store/modules/cart/types";

interface catalogItemProps {
  product: IProduct;
}

const CatalogItem = ({ product }: catalogItemProps) => {
  const dispatch = useDispatch();

  const hasFailedstockCheck = useSelector<IState, boolean>((state) => {
    return state.cart.failureStockCheck.includes(product.id);
  });

  const handleAddProductToCart = useCallback(() => {
    dispatch(addProductToCartRequest(product));
  }, [dispatch, product]);

  return (
    <article>
      <strong>{product.title}</strong> {" - "}
      <span>{product.price}</span>
      <button type="button" onClick={handleAddProductToCart}>
        Comprar
      </button>
      {hasFailedstockCheck && (
        <span style={{ color: "red" }}>Falta de estoque</span>
      )}
    </article>
  );
};

export default CatalogItem;

function dispatch(arg0: { type: string; payload: { product: IProduct } }) {
  throw new Error("Function not implemented.");
}
