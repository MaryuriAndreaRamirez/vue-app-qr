<template>

    <div 
        class="container px-4" 
        v-if="entradaReal">
        <div class="row gx-5">
            <div class="col">
                <div class="p-3 divComponent">
                    <h1 class="subtitulos">
                        <big>
                            <img src="@/assets/icons/viaje.png" 
                                 alt="Logo"
                                 height="28"
                                 class="d-inline-block align-text-top mx-3">
                            <b>Información del Viaje</b>
                        </big>
                    </h1> 

                    <p><b>Último despacho: </b> {{ entradaReal.inicio }}</p>
                    <p><b>Despachador: </b>{{ entradaReal.nombreDespachador }}</p>
                    <p><b>Conductor: </b>{{ entradaReal.nombreConductor }}</p>
                    <p><b>Cédula Conductor: </b>{{ entradaReal.cedulaConductor }}</p>
                    <p><b>Ruta: </b>{{ entradaReal.ruta }}</p>
                    <p><b>Pasajeros: </b>{{ entradaReal.pasajeros }}</p>

                </div>
            </div>
        </div>
    </div>

</template>

<script>
import { mapGetters } from 'vuex'

export default {
    props: {
        entrada: {
            type: Object
        },
    },
    data() {
        return {
            term: this.$route.params.id,
            entradaReal: null
        }    
    },
    computed: {
        ...mapGetters('storeGlobal', ['getEntradaPorId', 'getEntrada']),
        entradasByTerm() {
            return this.getEntrada( this.term )    
        },
    },
    methods: {
        loadEntrada() {
            const entry = this.getEntradaPorId( this.term )

            if( !entry ) {
                this.$router.push({ name: 'About' })
            } else {
                this.entradaReal = entry
            }
            
        }
    },
    created() { 
        setTimeout(() => this.loadEntrada(), 600);
    },
}
</script>


<style lang="scss" scoped>
    h1 {
        font-size: 1em;
        text-align: center;
    }
</style>