import { createReducer, on } from "@ngrx/store";

import { increment, decrement, set } from "./counter.actions";

const initialState = 0;

// Mais nova forma de criação do reducer:
export const counterReducer = createReducer(
    initialState,
    on(increment, (state, action) => state + action.value),
    on(decrement, (state, action) => state - action.value),
    on(set, (state, action) => action.value)
);

// Mais velha forma de criação do reducer:
// export function counterReducer(state = initialState) {
//     return state;
// }