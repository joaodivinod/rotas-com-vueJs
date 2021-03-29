<template>
    <div class="usuario-editar">
        <h3>Usuario Editar</h3>
        <p><strong>Código: </strong>{{ id }} / {{ $route.params.id }}</p>
        <p><strong>Completo: </strong>{{ $route.query.completo ? 'Sim':'Não' }}</p>
        <p><strong>Lingua: </strong>{{$route.query.lingua}}</p>
        <hr>
        <button primario>Comfirmar</button>
        <div id="rodape">
            <h3>Curso VueJs</h3>
        </div>
    </div>
</template>

<script>
export default {
    name: "UsuarioEditar",
    props:['id'],
}
</script>

<style scoped>
    #rodape{
        margin-top: 100vh;
    }
</style>