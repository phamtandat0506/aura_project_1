import {
    // ADD_PAYMENT,
    // DELETE_PAYMENT,
    // UPDATE_PAYMENT,
    GET_ALL_PAYMENT,
    GET_ITEM_PAYMENT
} from '../constants/payment.constants'
import callApi from "../../utils/callAPI";

export const getAllPaymentAction = () => {
    const add = async (dispatch) => {
        try {
            const res = await callApi(
                `/api/60939744ac969b4078488026/so1?access_token=8e87610b543bec77cc2da2de4e99188e&`,
                "GET"
            )
            dispatch({
                type: GET_ALL_PAYMENT,
                payload: res.data
            })
        } catch (err) {
            console.log(err);
        }
    }
    return add
}

export const getItemPaymentAction = (_id) => {
    const add = async (dispatch) => {
        try {
            const res = await callApi(
                `api/60939744ac969b4078488026/so1/${_id}?access_token=8e87610b543bec77cc2da2de4e99188e`,
                "GET",
            )
            dispatch({
                type: GET_ITEM_PAYMENT,
                payload: res.data
            })
        } catch (err) {
            console.log(err);
        }
    }
    return add
}