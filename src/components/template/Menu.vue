<template>
    <nav class="menu">
        <ul>

            <router-link active-class="active" exact to="/" tag="li" >
                <a>Inicio</a>
            </router-link>

            <router-link active-class="active" to="/usuario/1" tag="li" >
                <a>Usuário 1</a>
            </router-link>

            <router-link active-class="active" to="/usuario/2" tag="li" >
                <a>Usuário 2</a>
            </router-link>

        </ul>
    </nav>
</template>

<script>
export default {
    name: "Menu"
}
</script>

<style scoped>

</style>