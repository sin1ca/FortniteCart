function Cart(props) {
    const { quantity = 0, handleBasketShow = Function.prototype } = props;
    return (
        <div className="cart" onClick={handleBasketShow}>
            <i className="material-icons shopcart">add_shopping_cart</i>
            {quantity ? <span className="cart-quality">{quantity}</span> : null}
        </div>
    );
}

export { Cart };