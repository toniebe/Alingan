const initialStateCart = {
    quantityById : {},
  }
  
  const CartReducer = (state = initialStateCart,action) => {
    switch(action.type){
        case "INCREASE_CART":{
            let {imageUrl,price,productId,productName,quantity,unit} = action.payload.item
            return {
                ...state,
                quantityById: {
                    ...state.quantityById,
                    [productId]:{
                        productId,
                        productName,
                        price,
                        imageUrl,
                        unit,
                        quantity
                    }
                }
            }
        }
            // console.log('reducer : ',action)
            
            case "DECREASE_CART":{
                let {imageUrl,price,productId,productName,quantity,unit} = action.payload.item
                return {
                    ...state,
                    quantityById: {
                        ...state.quantityById,
                        [productId]:{
                            productId,
                            productName,
                            price,
                            imageUrl,
                            unit,
                            quantity: quantity > 0 ? quantity - 1 : 0
                        }
                    }
                }
            }
            // console.log('reducer : ',action)
            
        default:
            return {...state}
    }
  }
    
  export {initialStateCart, CartReducer}