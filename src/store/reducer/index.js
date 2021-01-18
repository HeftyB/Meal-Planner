const initialState = {
  ingredients: [],
  recipes: [],
};

export default function reducers(state = initialState, action) {
  switch (action.type) {
    case "GET_INGREDIENTS":
      return {
        ...state,
        ingredients: [...action.payload],
      };
    case "GET_RECIPES":
      return {
        ...state,
        recipes: [...action.payload],
      };
    default:
      return state;
  }
}
