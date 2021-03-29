<template>
    <div class="usuario-detalhe">
        <h3>Usuário Detalhe</h3>
        <button sucesso @click="irParaInicio">Voltar</button>
        <p><strong>Código:{{ id }}</strong></p>
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