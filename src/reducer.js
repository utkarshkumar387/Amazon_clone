export const initialState ={
    basket: [],
    user: null,
};

const reducer = (state, action) => {
    console.log(action);
    switch(action.type) {
        case 'Add_To_Basket':
            // lOGIC
            return {  
                ...state,
                basket: [...state.basket, action.item], 
            };
        case 'Remove_From_Basket':
            // lOGIC
            return { state };
        default:
            return state;
    }
}

export default reducer;