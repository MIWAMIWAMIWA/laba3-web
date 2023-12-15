const initialState = {
  lists: {},
};

const cartPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const { key } = action.payload;
      const existingItem = (state.lists[key] || []).find(item => item.id === action.payload.id);

      if (existingItem) {
        return {
          ...state,
          lists: {
            ...state.lists,
            [key]: state.lists[key].map(item =>
                item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
            ),
          },
        };
      } else {
        return {
          ...state,
          lists: {
            ...state.lists,
            [key]: [...(state.lists[key] || []), { ...action.payload, quantity: 1 }],
          },
        };
      }
    case 'INCREMENT_ITEM_QUANTITY':
      return {
        ...state,
        lists: {
          ...state.lists,
          [action.payload.key]: (state.lists[action.payload.key] || []).map(item =>
              item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
          ),
        },
      };
    case 'DECREMENT_ITEM_QUANTITY':
      return {
        ...state,
        lists: {
          ...state.lists,
          [action.payload.key]: (state.lists[action.payload.key] || []).map(item => {
            if (item.id === action.payload.id) {
              if (item.quantity === 1) {
                return null;
              } else {
                return { ...item, quantity: item.quantity - 1 };
              }
            }
            return item;
          }).filter(Boolean),
        },
      };
    case 'REMOVE_ALL_ITEMS_FROM_CART':
      return {
        ...state,
        lists: {
          ...state.lists,
          [action.payload.key]: [],
        },
      };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        lists: {
          ...state.lists,
          [action.payload.key]: (state.lists[action.payload.key] || []).filter(item => item.id !== action.payload.id),
        },
      };
    default:
      return state;
  }
};

export default cartPageReducer;
