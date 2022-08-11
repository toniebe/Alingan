import remoteConfig from "@react-native-firebase/remote-config";
import SendError from "../../assets/helper/sendError";

export const ActivateConfig = (cb) => {
  remoteConfig()
    .setDefaults({
      config_app: "default",
    })
    .then(() => remoteConfig().fetchAndActivate())
    .then((fetchedRemotely) => {
      if (fetchedRemotely) {
        // this.getValue()
        cb(false);
      } else {
        cb(false);
        // GetAllConfig()
        // GetConfig()
      }
    })
    .catch((err) => {
      cb(true);
      SendError.other({
        file: "GetConfig",
        methods: "ActivateConfig",
        message: err,
      });
    });
};
export const GetConfig = (parametes) => (dispatch) => {
  const valueConfig = remoteConfig().getValue(parametes);
  try {
    let res = JSON.parse(valueConfig._value);
    dispatch({ type: "GET_BLOG", payload: res });
  } catch (err) {}
};

export const GetAllConfig = (cb) => (dispatch) => {
  // return ( dispatch ) => {
  const parameters = remoteConfig().getAll();
  let config = {};
  let language = {};
  Object.entries(parameters).forEach((configs) => {
    const [key, entry] = configs;
    const value = entry.asString();
    if (key == "config_app") {
      let configParse = JSON.parse(value);
      config = { ...config, ...configParse };
    } else if (
      key == "wording_custom" ||
      key == "wording_default" ||
      key == "wording_error_message" ||
      key == "wording_button"
    ) {
      let langParse = JSON.parse(value);
      language = { ...language, ...langParse };
    } else {
      let langParse = JSON.parse(value);
    }
  });
  dispatch({ type: "CONFIG_SUCCESS", payload: config });
  dispatch({ type: "LANGUAGE_SUCCESS", payload: language });
  cb();

  // }
};
