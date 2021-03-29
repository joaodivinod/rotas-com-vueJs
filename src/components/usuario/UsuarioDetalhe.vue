<template>
    <div class="usuario-detalhe">
        <h3>Usuário Detalhe</h3>
        <p><strong>Código:{{ id }}</strong></p>

        <router-link tag="button" primario :to="`/usuario/${$route.params.id}/editar`">
            Editar
        </router-link>
    </div>
</template>

<script>
export default {
    name: "UsuarioDetalhe",
    props:['id'],
    // data(){
    //   return{
    //       id:this.$route.params.id
    //   }
    // },
    // watch:{
    //     $route(to,from){
    //         this.id = to.params.id
    //     }
    // },
}
</script>

<style scoped>

</style>