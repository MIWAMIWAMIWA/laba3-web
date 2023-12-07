import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeFromCart, incrementItemQuantity, decrementItemQuantity } from '../redux/CartPageActions';
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import {ButtonsBuy, BuyContainer, ItemBuy, ItemRow, ItemStats, ItemTitleP, LiBuy} from "./CartPage.styled";

const CartPage = () => {
  const cartItems = useSelector((state) => state.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleIncrementQuantity = (itemId) => {
    dispatch(incrementItemQuantity(itemId));
  };

  const handleBackToCatalog = () => {
    navigate('/catalog');
  };

  const handleDecrementQuantity = (itemId, quantity) => {
    if (quantity === 1) {
      const confirmed = window.confirm('THIS ITEM WILL BE DELETED FROM CART');
      if (confirmed) {
        dispatch(removeFromCart(itemId));
      }
    } else {
      dispatch(decrementItemQuantity(itemId));
    }
  };

  const handleClearAllItems = () => {
    const confirmed = window.confirm('DO U WANT TO CANCEL?');
    if (confirmed) {
      cartItems.forEach((item) => {
        dispatch(removeFromCart(item.id));
      });
    }
  };
  const calculateTotalAmount = () => {
    return cartItems.reduce((total, item) => {
      return total + item.quantity * item.price;
    }, 0);
  };
  const handleItemDetailClick = (itemId) => {
    navigate(`/item/${itemId}`);
  };

  return (
        <BuyContainer>
          <h2>Shopping Cart</h2>
          <ul>
            {cartItems.map((item) => (
                <LiBuy key={item.id}>
                  <ItemBuy>
                    <img src={require(`../../icons/${item.image}`)}
                    style={{
                      width:150,
                      height:150
                    }}></img>
                    <ItemTitleP onClick={() => handleItemDetailClick(item.id)}>
                      {item.title}
                    </ItemTitleP>
                    <ItemRow>
                      <PrimaryButton onClick={() => handleDecrementQuantity(item.id, item.quantity)}>-</PrimaryButton>
                      <ItemStats>{item.quantity}</ItemStats>
                      <PrimaryButton onClick={() => handleIncrementQuantity(item.id)}>+</PrimaryButton>
                      <ItemStats>{item.price * item.quantity} $</ItemStats>
                    </ItemRow>
                  </ItemBuy>
                </LiBuy>
            ))}
          </ul>
          <ButtonsBuy>
            <p>Total amount: {calculateTotalAmount()} $</p>
            <div >
              <PrimaryButton onClick={handleBackToCatalog}>Back to Catalog</PrimaryButton>
              <PrimaryButton onClick={handleClearAllItems}>Clear All</PrimaryButton>
              <PrimaryButton>Continue</PrimaryButton>
            </div>
          </ButtonsBuy>
        </BuyContainer>

  );
};

export default CartPage;
