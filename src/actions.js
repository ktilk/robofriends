import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED,
    REQUEST_CHAMPS_PENDING,
    REQUEST_CHAMPS_SUCCESS,
    REQUEST_CHAMPS_FAILED
} from "./constants"
import { apiCall } from "./api/api"

export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
});

export const requestRobots = () => (dispatch) => {
    dispatch({ type:REQUEST_ROBOTS_PENDING});
    apiCall('https://jsonplaceholder.typicode.com/users')
        .then(data => dispatch({
            type: REQUEST_ROBOTS_SUCCESS,
            payload: data
        }))
        .catch(error => dispatch({
            type: REQUEST_ROBOTS_FAILED,
            payload: error
        }))
}

export const requestChamps = () => (dispatch) => {
    dispatch({ type:REQUEST_CHAMPS_PENDING });
    apiCall('https://euw1.api.riotgames.com/lol/champion-mastery/v3/champion-masteries/by-summoner/27883000?api_key=RGAPI-d55cf118-f7a5-4ff2-9625-adc5a24a510a')
        .then(data => dispatch({
            type: REQUEST_CHAMPS_SUCCESS,
            payload: data
        }))
        .catch(error => dispatch({
            type: REQUEST_CHAMPS_FAILED,
            payload: error
        }))
}