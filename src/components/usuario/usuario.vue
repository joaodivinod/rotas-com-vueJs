<template>
<div class="usuario">
    <h2>Usuários</h2>
    <button sucesso @click="irParaInicio">Voltar</button>
    <p><strong>Código:{{ id }}</strong></p>
</div>
</template>

<script>
export default {
    name: "usuario",
    data(){
      return{
          id:this.$route.params.id
      }
    },
    watch:{
        $route(to,from){
            this.id = to.params.id
        }
    },
    methods:{
        irParaInicio(){
            this.$router.push('/')
        }
    }
}

</script>

<style scoped>

</style>