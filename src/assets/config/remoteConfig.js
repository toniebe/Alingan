import remoteConfig from '@react-native-firebase/remote-config';


export const ActivateConfig = (cb) => {
  remoteConfig()
  .setDefaults({
    config_app: 'default',
  })
  .then(() => remoteConfig().fetchAndActivate())
  .then(fetchedRemotely => {
    if (fetchedRemotely) {
      // this.getValue()
      cb(false)
    } else {
      cb(false)
      // GetAllConfig()
    }
  })
  .catch(err => {
    cb(true)
    // SendError.other({file : "GetConfig", url : "ActivateConfig", message : err})
  })
}
export const GetConfig = (parameter) => {
  const valueConfig = remoteConfig().getValue(parameter);
  // this.getSource()
  let res = JSON.parse(valueConfig._value)
  let {APP_ID, APP_COD} = res
}
export const GetAllConfig = (dispatch, cb) => {
  // return ( dispatch ) => {
    const parameters = remoteConfig().getAll();
    let config = {}
    let language = {}
    Object.entries(parameters).forEach(configs => {
      const [key, entry] = configs;
      console.log({key})
      const value = entry.asString()
      if( key == 'alingan' ){
        let configParse = JSON.parse(value)
        config = { ...config, ...configParse }
      } else{
        let langParse = value
      }
    });
    dispatch({type:'CONFIG_SUCCESS', payload: config})
    cb()

  // }
}