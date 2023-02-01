 
import appQrApi from '@/api/appQrApi'


export const cargarEntradas = async ({ commit }, value) => {
    const { data } = await appQrApi.get('/viajes.php?placa='+value)
    
    if( !data.viajes[0] ){
        commit('setEntradas', [] )
        return
    }

    const entradas = [data.viajes[0]]

    commit('setEntradas', entradas )
}