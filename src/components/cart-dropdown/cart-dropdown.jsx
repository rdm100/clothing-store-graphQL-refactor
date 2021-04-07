import React from 'react';
import CustomButton from '../custom-button/custom-button';
import { withRouter } from 'react-router-dom';
import CartItem from '../cart-item/cart-item';
import './court-dropdown.scss';

const CartDropdown = ({ cartItems, history, toggleCartHidden }) => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
      {
        cartItems.length ?   
          cartItems.map(cartItem => (
          <CartItem key={cartItem} item={cartItem} />
        )) 
        :
        <span className='empty-message'>Your cart is empty</span>
      }
      </div>
        <CustomButton onClick={() => {
          history.push('/checkout');
          toggleCartHidden();
        }}>
        GO TO CHECKOUT
        </CustomButton>
    </div>
  );
};

export default withRouter(CartDropdown);