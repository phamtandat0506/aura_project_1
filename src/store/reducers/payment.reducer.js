import {
    ADD_PAYMENT,
    DELETE_PAYMENT,
    UPDATE_PAYMENT,
    GET_ALL_PAYMENT,
    GET_ITEM_PAYMENT
} from '../constants/payment.constants'

const initialState = {
    addPayment: '',
    listPayment: [],
    deletePayment: 0,
    fixPayment: {},
    getOnePayment: {}
}

export const PaymentReducer = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case ADD_PAYMENT: {
            state.addPayment = payload
            return { ...state }
        }
        case GET_ALL_PAYMENT: {
            state.listPayment = payload
            return { ...state }
        }
        case DELETE_PAYMENT: {
            state.deletePayment = payload
            return { ...state }
        }
        case UPDATE_PAYMENT: {
            state.fixPayment = payload
            return { ...state }
        }
        case GET_ITEM_PAYMENT: {
            state.getOnePayment = payload
            return { ...state }
        }
        default:
            return state
    }
}