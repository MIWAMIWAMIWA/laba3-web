import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  removeFromCart,
  incrementItemQuantity,
  decrementItemQuantity,
} from '../redux/CartPageActions';
import PrimaryButton from '../PrimaryButton/PrimaryButton';
import {
  ButtonsBuy,
  BuyContainer,
  ItemBuy,
  ItemRow,
  ItemStats,
  ItemTitleP,
  LiBuy,
} from './CartPage.styled';

const CartPage = () => {
  const cartLists = useSelector((state) => state.lists);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const key = localStorage.getItem('loggedInUser');

  const handleFormikPageClick = () => {
    navigate(`/formik`);
  };

  const handleIncrementQuantity = (itemId) => {
    dispatch(incrementItemQuantity(itemId, key));
  };

  const handleBackToCatalog = () => {
    navigate('/catalog');
  };

  const handleDecrementQuantity = (itemId, quantity) => {
    if (quantity === 1) {
      const confirmed = window.confirm('THIS ITEM WILL BE DELETED FROM CART');
      if (confirmed) {
        dispatch(removeFromCart(itemId, key));
      }
    } else {
      dispatch(decrementItemQuantity(itemId, key));
    }
  };

  const handleClearAllItems = () => {
    const confirmed = window.confirm('DO U WANT TO CANCEL?');
    if (confirmed) {
      (cartLists[key] || []).forEach((item) => {
        dispatch(removeFromCart(item.id, key));
      });
    }
  };

  const calculateTotalAmount = () => {
    return (cartLists[key] || []).reduce((total, item) => {
      return total + item.quantity * item.price;
    }, 0);
  };

  const handleItemDetailClick = (itemId) => {
    // You may want to decide how to handle this based on your application's structure
    // For example, you could find the key of the list that contains the item and pass it to the URL
    navigate(`/item/${itemId}`);
  };

  const executeDecrementMultipleTimes = (quantity, id) => {
    let miwa = quantity;
    for (let i = 0; i < quantity; i++) {
      handleDecrementQuantity(id, miwa);
      miwa--;
    }
  };

  return (
      <BuyContainer>
        <h2>Shopping Cart</h2>
        <ul>
          {(cartLists[key] || []).map((item) => (
              <LiBuy key={item.id}>
                <ItemBuy>
                  <img
                      src={require(`../../icons/${item.image}`)}
                      style={{
                        width: 150,
                        height: 150,
                      }}
                      alt={item.title}
                  ></img>
                  <ItemTitleP onClick={() => handleItemDetailClick(item.id)}>
                    {item.title}
                  </ItemTitleP>
                  <ItemRow>
                    <PrimaryButton onClick={() => handleDecrementQuantity(item.id, item.quantity)}>
                      -
                    </PrimaryButton>
                    <ItemStats>{item.quantity}</ItemStats>
                    <PrimaryButton onClick={() => handleIncrementQuantity(item.id)}>+</PrimaryButton>
                    <ItemStats>{item.price * item.quantity} $</ItemStats>
                    <PrimaryButton
                        onClick={() => executeDecrementMultipleTimes(item.quantity, item.id)}
                    >
                      Remove
                    </PrimaryButton>
                  </ItemRow>
                </ItemBuy>
              </LiBuy>
          ))}
        </ul>
        <ButtonsBuy>
          <p>Total amount: {calculateTotalAmount()} $</p>
          <div>
            <PrimaryButton onClick={handleBackToCatalog}>Back to Catalog</PrimaryButton>
            <PrimaryButton onClick={handleClearAllItems}>Clear All</PrimaryButton>
            <PrimaryButton onClick={handleFormikPageClick}>Continue</PrimaryButton>
          </div>
        </ButtonsBuy>
      </BuyContainer>
  );
};

export default CartPage;

