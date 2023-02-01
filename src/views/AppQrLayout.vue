<template>

    <Navbar />

    <div v-if="isLoading" class="row justify-content-md-center" >
        <div class="col-3"></div>
        <div class="col-6 alert-info text-center mt-5">
            Espere por favor...
            <h3 class="mt-2">
                <i class="fa fa-spin fa-sync"></i>
            </h3>
        </div>
        <div class="col-3"></div>
    </div>
    
    <div v-else>
        <div class="d-flex divExterior">
            <Logo />
        </div>

        <div class="d-flex divExterior">
            <Movil />
        </div>

        <div class="d-flex divExterior">
            <Conductor />
        </div>

        <div class="d-flex divExterior">
            <Documentos />
        </div>

        <div class="divFooter fade-in-down">
            <p>**** ELABORADO POR LOGIRASTREO S.A.S ****</p>
            <a href="https://www.logirastreo.com/">
                <img 
                    src="@/assets/logoLogiNuevo.png"
                    alt="Logirastreo"
                    >
                www.logirastreo.com
            </a>
        </div>

    </div>


</template>

<script>

import { defineAsyncComponent } from 'vue'
import { mapActions, mapState } from 'vuex'

export default {
    props: {
        id: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            term: this.$route.params.id,
        }    
    },
    components: {
        Navbar: defineAsyncComponent( () => import('../components/Navbar.vue')),
        Logo: defineAsyncComponent( () => import('../components/Logologi.vue')),
        Movil: defineAsyncComponent( () => import('../components/Movil.vue')),
        Documentos: defineAsyncComponent( () => import('../components/Documentos.vue')),
        Conductor: defineAsyncComponent( () => import('../components/Conductor.vue')),
    },
    computed: {
        ...mapState('storeGlobal', ['isLoading']),
    },
    methods: {
        ...mapActions('storeGlobal', ['cargarEntradas']),
    },
    created() {
        this.cargarEntradas(this.term)
    },
}
</script>

<style lang="scss" scoped>
    .divExterior {
        margin: 1em;
    }
    .divFooter {
        text-align: center;
        font-size: 14px;
        padding-bottom: 1em;
    }
</style>