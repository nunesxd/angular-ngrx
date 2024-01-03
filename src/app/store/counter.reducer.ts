import { createReducer, on } from "@ngrx/store";

import { increment } from "./counter.actions";

const initialState = 0;

// Mais nova forma de criação do reducer:
export const counterReducer = createReducer(
    initialState,
    on(increment, (state) => state + 1)
);

// Mais velha forma de criação do reducer:
// export function counterReducer(state = initialState) {
//     return state;
// }