


// export const myGetter =  ( state ) => {
// return state.algo;
// }

export const getEntrada =  ( state ) => ( term = '' ) => {

    if( term.length === 0 ) return state.entries

    return state.entries.filter( entrada => entrada.placa === term )

}

export const getEntradaPorId =  ( state ) => ( term = '' ) => {

    const entrada = state.entries.find( entrada => entrada.placa === term )
    console.log( 'entrada de los getters' )
    console.log( entrada )

    if( !entrada ) return
    
    return { ...entrada } 
}
