export const addToCart = (item, key) => ({
  type: 'ADD_TO_CART',
  payload: { ...item, key },
});

export const incrementItemQuantity = (itemId, key) => ({
  type: 'INCREMENT_ITEM_QUANTITY',
  payload: { id: itemId, key },
});

export const decrementItemQuantity = (itemId, key) => ({
  type: 'DECREMENT_ITEM_QUANTITY',
  payload: { id: itemId, key },
});

export const removeFromCart = (itemId, key) => ({
  type: 'REMOVE_FROM_CART',
  payload: { id: itemId, key },
});

export const removeAllItemsFromCart = (key) => ({
  type: 'REMOVE_ALL_ITEMS_FROM_CART',
  payload: { key },
});