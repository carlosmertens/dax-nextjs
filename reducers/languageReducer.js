const initState = { title: 'Welcome to Dax!!!' };

export default function languageReducer(state = initState, action) {
  if (action.type === 'LANGUAGE_ACTION') {
    return action.payload;
  } else {
    return state;
  }
}
