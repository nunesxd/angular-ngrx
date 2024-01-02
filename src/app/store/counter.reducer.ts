import { createReducer } from "@ngrx/store";

const initialState = 0;

// Mais nova forma de criação do reducer:
// export const counterReducer = createReducer(initialState);

// Mais velha forma de criação do reducer:
export function counterReducer(state = initialState) {
    return state;
}