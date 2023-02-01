


export const setEntradas =  ( state, entradas ) => {
    state.entries = [...state.entries, ...entradas]
    state.isLoading = false
}