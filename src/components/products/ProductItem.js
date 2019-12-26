import React from "react";
import { CollectionItem, select } from "react-materialize";
import Currency from "react-currency-formatter";

const ProductItem = props => {
  return (
    <CollectionItem className="product-item" key={props.product.id}>
      <div className="product-item__image">
        <img src={props.product.imagem} />
      </div>

      <div className="product-item__description">
        <span>{props.product.nome}</span>
        <span>
          Vendido e entregue por{" "}
          <span className="marketplace_nome">
            {props.product.marketplace.nome}
          </span>
        </span>
        <span>
          <span className="product-item__description__promo">
            {props.product.valor_unitario_promocional <
              props.product.valor_unitario &&
            props.product.valor_unitario_promocional > 0
              ? "De: " +
                props.product.valor_unitario
                 +
                " por " +
                props.product.valor_unitario_promocional
              : props.product.valor_unitario}
          </span>
        </span>
      </div>

      <div className="product-item__quantity">
        Quantidade:
        <select className="select_quantity">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
    </CollectionItem>
  );
};

export default ProductItem;
