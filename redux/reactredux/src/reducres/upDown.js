const intialState = 0;

const changeTheNumber = (state = intialState, action) => {
    switch (action.type) {
        case "INCREMENT":
            return state + 1;
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