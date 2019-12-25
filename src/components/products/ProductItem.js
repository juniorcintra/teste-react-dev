import React from 'react'
import { CollectionItem } from 'react-materialize'

const ProductItem = props => {
    return (
        <CollectionItem className="product-item" key={props.product.id}>
            <div className="product-item__image">
                <img src={props.product.imagem} />
            </div>

            <div className="product-item__description">
                <span>{props.product.nome}</span>
                <span>Vendido e entregue por {props.product.marketplace.nome}</span>
                <span>
                    <span className="product-item__description__promo">
                        {
                            props.product.valor_unitario_promocional < props.product.valor_unitario && props.product.valor_unitario_promocional > 0 
                            ? 'De: ' + props.product.valor_unitario + ' por ' + props.product.valor_unitario_promocional
                            : props.product.valor_unitario
                        }
                    </span> 
                </span>
            </div>
            
            <div className="product-item__quantity">
                Quantidade: 
                <select id="quantity" name="quantity">
                    <option value="1">1</option>
                    <option value="2">1</option>
                    <option value="3">1</option>
                    <option value="4">1</option>
                    <option value="5">1</option>
                    <option value="6">1</option>
                    <option value="7">1</option>
                    <option value="8">1</option>
                    <option value="9">1</option>
                    <option value="10">1</option>
                </select>
            </div>
        </CollectionItem>
    )
}

export default ProductItem