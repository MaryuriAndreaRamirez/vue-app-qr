<template>

    <Navbar />

    <div class="d-flex divExterior">
        <Logo />
    </div>

    <div class="d-flex divExterior">
        <Movil />
    </div>

    <div class="d-flex divExterior">
        <Documentos />
    </div>

    <div class="d-flex divExterior">
        <Conductor />
    </div>

</template>

<script>

import { defineAsyncComponent } from 'vue'

export default {
    components: {
        Navbar: defineAsyncComponent( () => import('../components/Navbar.vue')),
        Logo: defineAsyncComponent( () => import('../components/Logologi.vue')),
        Movil: defineAsyncComponent( () => import('../components/Movil.vue')),
        Documentos: defineAsyncComponent( () => import('../components/Documentos.vue')),
        Conductor: defineAsyncComponent( () => import('../components/Conductor.vue')),
    }
}
</script>

<style lang="scss" scoped>
    .divExterior {
        margin: 1em;
    }
</style>