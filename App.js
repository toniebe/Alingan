import {View, Text} from 'react-native';
import React, {useEffect, useReducer} from 'react';
import Router from './src/router';
import CombineReducers from './src/store/combineReducers';
import {initialState, reducers} from './src/store/reducer';
import remoteConfig from '@react-native-firebase/remote-config';
import {ReducerContext} from './src/store';

const App = () => {
  const [store, dispatch] = useReducer(CombineReducers(reducers), initialState);
  useEffect(() => {
    setRemoteConfig();
  }, []);
  const setRemoteConfig = async () => {
    await remoteConfig().setConfigSettings({
      minimumFetchIntervalMillis: 100,
    });
  };

  return (
    <ReducerContext.Provider value={{store, dispatch}}>
      <Router />
    </ReducerContext.Provider>
  );
};

export default App;
