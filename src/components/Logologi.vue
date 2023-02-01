<template>
    <div 
        v-if="entradaReal" 
        class="container px-4">
        <div class="row gx-5">
            <div class="col">
                <div class="p-3 divComponent">
                    <img 
                         v-if="!logo" 
                         src="../assets/logologi.jpg"  
                         class="img-fluid"
                         alt="logo">

                    <img 
                        v-else
                        :src="require(`../assets/${logo}`)"
                        class="img-fluid"
                        alt="logo">
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
            entradaReal: null,
            logo: null
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
                this.logo = this.entradaReal.logoEmpresa
            }
            
        }
    },
    created() { 
        setTimeout(() => this.loadEntrada(), 600);
    },
}
</script>

<style lang="scss" scoped>
    img {
        max-width: 100%;
        height: auto;
    }
    div {
        text-align: center;
    }
</style>