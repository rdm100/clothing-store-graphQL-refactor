import React from 'react';
import { connect } from 'react-redux';
import CustomButton from '../custom-button/custom-button';
import CartItem from '../cart-item/cart-item';
import { selectCartItems } from '../../redux/cart/cart-selectors';
import './court-dropdown.scss';

const CartDropdown = ({ cartItems }) => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {cartItems.map(cartItem => (
          <CartItem key={cartItem} item={cartItem} />
        ))}
      </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state)
});

export default connect(mapStateToProps, null)(CartDropdown);