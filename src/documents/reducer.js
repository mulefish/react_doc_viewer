// These are all just strings
import { TYPE_GOTO_FULL_SCREEN, TYPE_LEAVE_FULL_SCREEN, STATUS_FULL_SCREEN, STATUS_NOT_FULL_SCREEN, TYPE_LOAD_START, TYPE_LOAD_FINISH, TYPE_LOAD_ERROR, STATUS_LOADING, STATUS_ERROR, STATUS_FINISH } from '../helpers/constants.js'



const initialState = {
    counter: 0
}


export function displayLayoutReducer(state = initialState, action) {
    switch (action.type) {

        case TYPE_GOTO_FULL_SCREEN:
            return { status: STATUS_FULL_SCREEN }

        case TYPE_LEAVE_FULL_SCREEN:
            return { status: STATUS_NOT_FULL_SCREEN }

        default:
            return state
    }
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