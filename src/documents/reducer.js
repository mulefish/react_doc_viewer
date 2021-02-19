// These are all just strings
import { TYPE_LOAD_START, TYPE_LOAD_FINISH, TYPE_LOAD_ERROR, STATUS_LOADING, STATUS_ERROR, STATUS_FINISH } from '../constants/constants.js'

const initialState = {
    counter: 0
}

export function documentReducer(state = initialState, action) {
    switch (action.type) {

        case TYPE_LOAD_START:
            return { status: STATUS_LOADING }

        case TYPE_LOAD_ERROR:
            return { status: STATUS_ERROR, error: action.error.message }

        case TYPE_LOAD_FINISH:
            return { status: STATUS_FINISH, data: action.data }

        default:
            return state
    }
}