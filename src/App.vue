<template>
	<div id="app">
		<h1>Rotas com VueRouter</h1>
        <router-view name="menu" />
        <router-view />
	</div>
</template>

<script>
export default {
	components:{}
}
</script>

<style>
	#app {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
