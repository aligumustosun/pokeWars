export const reducer = (state={array: []}, action ) => {
  switch(action.type) {
    case 'addToArray':
      return ({
        type: action.type,
        array: [...state.array, action.data],
        fighter1: state.fighter1,
        fighter2: state.fighter2,

      });
    case 'emptyTheArray':
      return ({
        array: [],
      });
    case 'setFighter1':
      return ({
        array: state.array,
        fighter1: action.fighter1,
        fighter2: state.fighter2,
      });
    case 'setFighter2':
      return ({
        array: state.array,
        fighter1: state.fighter1,
        fighter2: action.fighter2,
      });
      default:
      return state;
   }
};