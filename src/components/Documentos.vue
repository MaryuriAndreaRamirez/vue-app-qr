<template>

    <div v-if="entradaReal.nombreEmpresa == 'COOTRANSFUNZA'"></div>
    
    <div 
        v-else-if="entradaReal" 
        class="container px-4">
        <div class="row gx-5">
            <div class="col">
                <div class="p-3 divComponent">
                    <h1 class="subtitulos">
                        <big>
                            <img src="@/assets/icons/documentos.png" 
                                alt="Logo"
                                height="28"
                                class="d-inline-block align-text-top mx-3">
                            <b>Documentos</b>
                        </big>
                    </h1> 
                    <div>
                    <ul id="example-1">
                            <li v-for="item in entradaReal.documentos"
                                :key="item">
                            <b>{{ item[0].nombreDocumento }}</b> Vence: {{ item[0].vencimiento }}
                            </li>
                        </ul>
                    </div>
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
        }
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