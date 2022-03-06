const stateActionMethods = {};

// storing products to store
stateActionMethods.storeProducts = (dispatch, value) => {
    dispatch({
        type: "STORE_PRODUCTS",
        value
    });
}

// setMaterialType from select box selected value
stateActionMethods.setMaterialType = (dispatch, value) => {
    dispatch({
        type: "SET_MATERIAL_TYPE",
        value
    });
}

// Set Cart products
stateActionMethods.addProductToCart = (dispatch, value) => {
    dispatch({
        type: "STORE_PRODUCT_TO_CART",
        value
    });
}

// Remove Cart products
stateActionMethods.removeProductToCart = (dispatch, value) => {
    dispatch({
        type: "REMOVE_CART_ITEM",
        value
    });
}

export {stateActionMethods};