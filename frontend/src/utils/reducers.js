const reducers = (state, action) => {
    switch (action.type) {
      case 'STORE_PRODUCTS':
        return {
            ...state,
            products: action.value
        }
      case 'SET_MATERIAL_TYPE':
        return {
            ...state,
            materialType: action.value
        }
      case 'STORE_PRODUCT_TO_CART':
        return {
            ...state,
            cartProducts: {
              ...state.cartProducts,
              ...action.value
            }
        }
        case 'REMOVE_CART_ITEM':
          return {
              ...state,
              cartProducts: action.value
          }
      default: return state;
    }
  }
  
  export {reducers};