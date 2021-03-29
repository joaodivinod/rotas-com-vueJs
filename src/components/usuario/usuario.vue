<template>
<div class="usuario">
    <h2>Usuários</h2>
    <hr>
    <router-view />
</div>
</template>

<script>
export default {
    name: "usuario",

    methods:{
        irParaInicio(){
            this.$router.push('/')
        }
    }
}

</script>

<style scoped>

</style>