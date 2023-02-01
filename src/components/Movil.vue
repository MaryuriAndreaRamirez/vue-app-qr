<template>

    <div 
        class="container px-4" 
        v-if="entradaReal">
        <div class="row gx-5">
            <div class="col">
                <div class="p-3 divComponent">
                    <h1 class="subtitulos">
                        <big>
                            <img src="@/assets/icons/bus.png" 
                                 alt="Logo"
                                 height="28"
                                 class="d-inline-block align-text-top mx-3">
                            <b>Detalle del vehículo {{ term }} </b>
                        </big>
                    </h1> 

                    <p><b>Nombre de la empresa: </b>{{ entradaReal.nombreEmpresa }}</p>
                    <p><b>Interno: </b>{{ entradaReal.nroMovil }}</p>
                    <p><b>Placa: </b>{{ entradaReal.placa  }}</p>

                </div>
            </div>
        </div>
    </div>

</template>

<script>
import { mapActions, mapGetters } from 'vuex'

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
        ...mapActions('storeGlobal', ['cargarEntradas']),
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
