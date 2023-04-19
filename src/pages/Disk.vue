<template>
    <div class="app">
        <SideMenu></SideMenu>
        <div class="work-field">
            <Header></Header>
            <Content></Content>
        </div>
    </div>
</template>

<script>
import SideMenu from '@/components/SideMenu.vue';
import Header from '@/components/Header.vue';
import Content from '@/components/Content.vue';

export default {
    components: { SideMenu, Header, Content }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');


.app{
    display: flex;
    height: 100%;
    background-color: #F5F5F5;
    width: 100%;
}

.work-field{
    width: 100%;
    margin-left: 250px;
    margin-top: 10px;
    background-color: #F5F5F5;
    overflow-x: scroll;
}

</style>