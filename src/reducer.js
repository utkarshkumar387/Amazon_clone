export const initialState ={
    basket: ['asd', 'adaad'],
};

function reducer(state, action) {
    switch(action.type) {
        case 'Add_To_Basket':
            // lOGIC
            break;
        case 'Remove_From_Basket':
            // lOGIC
            break;
        default:
            return state;
    }
}

export default reducer;