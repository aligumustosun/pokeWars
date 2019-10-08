export const addToArray = (data) => {
  return ({
    data,
    type: 'addToArray'
  })
};
export const emptyTheArray = () => {
  return ({
    type: 'emptyTheArray'
  })
};

export const setFighter1 = (fighter1) => {
  return ({
    fighter1,
    type: 'setFighter1'
  })
};
export const setFighter2 = (fighter2) => {
  return ({
    fighter2,
    type: 'setFighter2'
  })
};