import { CartReducer, initialStateCart } from "./CartReducer";
import { initialStateConfig, ConfigReducer } from "./ConfigReducer";


export const reducers = {
    configReducer: ConfigReducer,
    cartReducer: CartReducer,
}

export const initialState= {
    configReducer: initialStateConfig,
    cartReducer: initialStateCart,
}