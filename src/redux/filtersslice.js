import { createSlice } from "@reduxjs/toolkit";


// export const filtersReducer = (state = initialState.filters, action) => { switch (action.type) {
//     case 'filters/CHANGE_FILTER': {
//         return { ...state, name: action.payload };
        
//     }
//     default:return state;
// }
    
// }
const initialState = { filters: { name: '', } };
const filtersSlice = createSlice({
    name: "filters",
    initialState: initialState.filters,
    reducers: {
        changeFilter(state, action) { state.name = action.payload },
        
    }
    
});
export const { changeFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;