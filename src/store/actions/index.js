import axios from "axios"

export const addFeature = (para) => {
    return { type: "ADD_FEATURE", payload: para}
}

export const removeFeature = (para) => {
    return { type: "REMOVE_FEATURE", payload: para}
}

export const getInitialData = para => {
    return { type: "GET_INITIAL_DATA", payload: para }
}

export const getData = (links) => dispatch => {
    dispatch({ type: "GET_DATA_START" });
    axios.get(links)
        .then( data => {
            dispatch({ type: "GET_DATA_SUCCESS", payload: data.data })
        })
        .catch( error => {
            console.log(error);
            dispatch({ type: "GET_DATA_FAIL", payload: `${error.response.status} : ${error.response.data}` })
            debugger
        })
}

//LOGIN

// const logInUser = creds => dispatch => {
//   return axios.post('/login', creds).then(res => {
//     const loggedInAction = { type: USER_LOGGED_IN, payload: res.data.user }
//     dispatch(loggedInAction);
//   });
// }

export const getIngredients = () => dispatch => {
    axios.get("https://heftyb-meal-planner.herokuapp.com/ingredients/ingredients")
    .then(res => {
        dispatch({ type: "GET_INGREDIENTS", payload: res.data});
    })
    .catch(err => {
        console.log(err);
        debugger;
    })
};

export const getRecipes = () => dispatch => {
    axios.get("https://heftyb-meal-planner.herokuapp.com/recipes/recipes")
    .then(res => {
        dispatch({ type: "GET_RECIPES", payload: res.data });
    })
    .catch(err => {
        console.log(err)
        debugger;
    })
}