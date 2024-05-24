const intialState = 0;

const changeTheNumber = (state = intialState, action) => {
    switch (action.type) {
        case "INCREMENT":
            return state + action.payload.num;
            break;

        case "DECREMENT":
            return state - 1;
            break;

        default:
            return state;
            break;
    }
}

export default changeTheNumber;