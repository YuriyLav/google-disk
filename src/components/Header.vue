<template>
    <div class="header">
        <div class="search">
            <Search></Search>
        </div>
        <div class="profile">
            <Profile></Profile>
        </div>
    </div>
</template>

<script>
import Profile from './Profile.vue';
import Search from './Search.vue';

export default {
    components: { Search, Profile }
}
</script>

<style>
.header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #F5F5F5;
    width: 100%;
    
}

.search{
    width: 80%;
    min-width: 400px;
}
</style>