import React from "react";
import CartList from "../components/CartList";
import Newsletter from "../components/Newsletter";

class CartPage extends React.Component {
    render() {
        return (
            <>
                <CartList
                    newBoxs={this.props.newBoxs}
                    handleChange={this.props.handleChange}
                    totalNum={this.props.totalNum}
                    totalPrice={this.props.totalPrice}
                    handleRemove={this.props.handleRemove}
                />
                <Newsletter />
            </>
        );
    }
}

export default CartPage;
