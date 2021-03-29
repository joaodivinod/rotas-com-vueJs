<template>
	<div id="app">
		<h1>Rotas com VueRouter</h1>
        <router-view name="menu" />

        <transition mode="out-in"
            enter-active-class="animated rubberBand"
            leave-actice-class="animated rollOut">
            <router-view />
        </transition>

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
