import React from 'react';
import { CartGrid } from "./CartGrid"
import { Btn } from './Button';

class CartList extends React.Component {
    render() {
        return (
            <section className='cart-list'>
                <div className='container'>
                    <h5>
                        your cart
                    </h5>
                    <CartGrid
                        newBoxs={this.props.newBoxs}
                        handleChange={this.props.handleChange}
                        totalNum={this.props.totalNum}
                        totalPrice={this.props.totalPrice}
                        handleRemove={this.props.handleRemove}
                    />
                    <div className='dark-cart-list'>
                        <div className='box-dark-cart-list'>
                            <span>
                                all items
                            </span>
                            <span>
                                {this.props.totalNum()}
                            </span>
                            <span>
                                ${this.props.totalPrice()}
                            </span>
                            <Btn classbtn="main-btn-dark-bc" text="check out all"/>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default CartList;