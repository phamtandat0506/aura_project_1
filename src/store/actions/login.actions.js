import callApi from "../../utils/callAPI"
import { 
    GET_ALL_USER
}
from './../constants/login.const';

export const getAllUserAction = () => {
    const add = async (dispatch) => {
        try {
            const res = await callApi (
                '/api/60939744ac969b4078488026/so1?access_token=8e87610b543bec77cc2da2de4e99188e&',
                'GET'
            )
            dispatch({
                type: GET_ALL_USER,
                payload: res.data
            })
        } catch (err) {
            console.log(err);
        }
    }
    return add
}