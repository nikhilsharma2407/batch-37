const initialState = {
    count: 0
};


const ACTIONS = {
    INCREMENT: 'INCREMENT',
    DECREMENT: 'DECREMENT',
}

// Actions are javascript objects

// ActionCreator is a fn which returns action

export const incrementActionCreator = () => {
    return async (dispatch)=>{
        // ṃock api, get payload form a promise
        const payload = await Promise.resolve(1);

        dispatch({ type: ACTIONS.INCREMENT, payload })
    }
}

export const decrementActionCreator = (payload = 1) => {
    return { type: ACTIONS.DECREMENT, payload }
}

export const countReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {

        case ACTIONS.DECREMENT:
            return { ...state, count: state.count - payload }

        case ACTIONS.INCREMENT:
            return { ...state, count: state.count + payload }

        default:
            return state
    }

}