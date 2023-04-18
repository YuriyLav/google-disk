<template>
    <div class="app">
        <SideMenu></SideMenu>
    </div>
</template>

<script>
import SideMenu from './components/SideMenu.vue';

export default {
    components: { SideMenu }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
}
</style>