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
      <h3>No se encontaron datos para la placa.</h3>
    </div>

</template>

<script>

import { defineAsyncComponent } from 'vue'
import { mapState } from 'vuex'

export default {
    components: {
        Navbar: defineAsyncComponent( () => import('../components/Navbar.vue')),
    },
    computed: {
        ...mapState('storeGlobal', ['isLoading']),
    }
}
</script>


<style lang="scss" scoped> 
    h3 {
        text-align: center;
    }
</style>