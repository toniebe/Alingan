const initialStateConfig = {
    isError: false,
    loading:false,
    configApp : {},
  }
  
  const ConfigReducer = (state = initialStateConfig,action) => {
    switch(action.type){
        case "CONFIG_SUCCESS":
            return {
                ...state,
                configApp: action.payload
            }
        default:
            return {...state}
    }
  }
    
  export {initialStateConfig, ConfigReducer}