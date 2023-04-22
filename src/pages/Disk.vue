<template>
    <div class="app">
        <SideMenu></SideMenu>
        <div class="work-field">
            <Header @search="searchQuery"></Header>
            <Content v-bind:searchStr="searchStr" ></Content>
        </div>
    </div>
</template>

<script>
import SideMenu from '@/components/SideMenu.vue';
import Header from '@/components/Header.vue';
import Content from '@/components/Content.vue';

export default {
    components: { SideMenu, Header, Content },
    data() {
        return {
            searchStr: ''
        }
    },
    methods: {
        searchQuery(query) {
            this.searchStr = query
        }
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap');


.app{
    display: flex;
    background-color: #F5F5F5;
    
}

.work-field{
    margin-left: 20px;
    margin-top: 10px;
    background-color: #F5F5F5;
    width: 85%;
    height: 98vh;
}


@media (max-width: 768px) { 
    .work-field
    {
        width: 100%;
    }
}

</style>