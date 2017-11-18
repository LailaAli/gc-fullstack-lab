import React, { Component } from 'react';
import { connect } from 'react-redux';
import ShoppingCartItem from "./ShoppingCartItem";

class ShoppingCart extends Component {
  render() {

    let shoppingCartTotal = 0

    const ItemsInCart = this.props.items.map(item => {
      shoppingCartTotal += Number(item.price);
      return <ShoppingCartItem item={item} key={item.name} />
    });

    return (
      <div className="ShoppingCart">
        <div className="CartItemNames">
        {ItemsInCart}
        Total: {shoppingCartTotal}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
    return {
        items: state.items
    }
}

export default connect(mapStateToProps, null)(ShoppingCart);
//null means we are only mapping props not actions

//shopping cart is the only thing that needs to access the global state.