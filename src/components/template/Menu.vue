<template>
    <nav class="menu">
        <ul>

            <router-link active-class="active" exact to="/" tag="li" >
                <a>Inicio</a>
            </router-link>

            <router-link active-class="active" to="/usuario" tag="li" >
                <a>Usuário</a>
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