const CombineReducers = (slices) => (prevState, action) =>
  Object.keys(slices).reduce(
    (nextState, nextProp) => ({
      ...nextState,
      [nextProp]: slices[nextProp](prevState[nextProp], action),
    }),
    prevState,
  );

export default CombineReducers;